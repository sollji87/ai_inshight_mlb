import { redirect } from "next/navigation";

/**
 * 최신 월간 보고서(2026년 2월)로 기본 진입 경로를 연결합니다.
 * 월별 전환은 보고서 상단 26.01 / 26.02 탭에서 이동할 수 있습니다.
 */
export default function Home() {
  redirect("/reports/mlb_report_2026_02.html");
}
