/**
 * ========================================
 * 📌 보고서 헤더 - 제목 및 총매출 요약
 * ========================================
 * 수정 포인트: 보고서 제목, 날짜, 총매출, YoY 수치
 */
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1>⚾ MLB 브랜드 2026년 1월 경영 보고서</h1>
        <p>경영관리팀 FP&amp;A | 보고일: 2026년 2월 11일</p>
      </div>
      <div className="header-right">
        <div className="big-num">
          29,200<span>백만원</span>
        </div>
        <div className="sub">실판매출 YoY 111% | 영업이익률 13.8%</div>
      </div>
    </div>
  );
}
