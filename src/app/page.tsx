import { redirect } from "next/navigation";

/**
 * 최신 배포 파일(mlb_report_2026_03.html)로 기본 진입 경로를 연결합니다.
 * 보고서 내용 기준 월과 배포 파일명은 운영 방식에 따라 다를 수 있습니다.
 */
export default function Home() {
  redirect("/reports/mlb_report_2026_03.html");
}
