const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

function getLatestReportFile() {
  const reportsDir = path.resolve(__dirname, 'public', 'reports');
  const reportFiles = fs
    .readdirSync(reportsDir)
    .filter((file) => /^mlb_report_\d{4}_\d{2}\.html$/.test(file))
    .sort();

  const latestReport = reportFiles.at(-1);

  if (!latestReport) {
    throw new Error('public/reports 폴더에서 월간 보고서 HTML을 찾지 못했습니다.');
  }

  return latestReport;
}

(async () => {
  const latestReportFile = getLatestReportFile();
  const reportUrl = `http://localhost:3000/reports/${latestReportFile}`;
  const outputFileName = latestReportFile.replace(/^mlb_report/, 'MLB_Report');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123 });

  console.log('페이지 로딩 중...');
  await page.goto(reportUrl, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  // 모든 폰트 로딩 대기
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  console.log('HTML 추출 중...');

  // 모든 스타일시트를 인라인으로 포함한 완전한 HTML 생성
  const html = await page.evaluate(() => {
    // 모든 <link rel="stylesheet">와 <style> 태그의 CSS 수집
    let allCSS = '';
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          allCSS += rule.cssText + '\n';
        }
      } catch (e) {
        // cross-origin 스타일시트는 무시
      }
    }

    // body 내용 추출
    const bodyHTML = document.body.innerHTML;
    const pageTitle = document.title;

    // 완전한 standalone HTML 생성
    return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <style>
${allCSS}

  /* A4 인쇄 설정 */
  @media print {
    @page {
      size: A4;
      margin: 10mm 8mm;
    }
    body {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
  </style>
</head>
<body>
${bodyHTML}
</body>
</html>`;
  });

  const outputPath = path.resolve(__dirname, outputFileName);
  fs.writeFileSync(outputPath, html, 'utf-8');

  console.log(`HTML 저장 완료: ${outputPath}`);
  await browser.close();
})();
