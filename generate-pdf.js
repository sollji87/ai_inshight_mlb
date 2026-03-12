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
  const outputFileName = latestReportFile
    .replace(/^mlb_report/, 'MLB_Report')
    .replace(/\.html$/, '.pdf');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // A4 사이즈 기준 뷰포트 설정 (210mm x 297mm, 96dpi 기준 약 794 x 1123px)
  await page.setViewport({ width: 794, height: 1123 });

  console.log('페이지 로딩 중...');
  await page.goto(reportUrl, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  // 모든 이미지/폰트 로딩 대기
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  const outputPath = path.resolve(__dirname, outputFileName);

  console.log('PDF 생성 중...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '8mm',
      bottom: '10mm',
      left: '8mm',
    },
    displayHeaderFooter: false,
  });

  console.log(`PDF 저장 완료: ${outputPath}`);
  await browser.close();
})();
