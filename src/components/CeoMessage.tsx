/**
 * ========================================
 * 📌 CEO 메시지 & 푸터
 * ========================================
 * 수정 포인트: CEO 코멘트 내용, 보고서 날짜
 */
export default function CeoMessage() {
  return (
    <>
      <div
        className="box box-dark"
        style={{ padding: "12px 14px", marginTop: "12px" }}
      >
        <div
          style={{ fontSize: "10px", fontWeight: "bold", marginBottom: "6px" }}
        >
          📣 CEO 메시지
        </div>
        <div style={{ fontSize: "8.5px", lineHeight: 1.45 }}>
          &quot;2026년 1월, MLB는 <b>수익성 중심 성장의 첫 성과</b>를
          입증했습니다. 면세점 의존도를 전략적으로 축소하며 영업이익률 13.8%를
          달성한 것은 MLB의 구조적 경쟁력이 강화되고 있음을 보여줍니다.
          플래그쉽·온라인·RF 등 고수익 채널이 성장을 견인하며,{" "}
          <b>북촌·도산 플래그쉽 오픈</b>이라는 중요한 이정표를 앞두고 있습니다.
          <br />
          <br />
          다만 <b>할인율 상승(7.3%)과 신발 재고 과다(55.3주)</b>는 즉각적 조치가
          필요합니다. 2월 할인율 긴급 통제와 재고 소진 프로그램을 최우선
          실행하여 Q1 영업이익률 12% 이상을 유지하겠습니다. 2026년은{" "}
          <b>&quot;채널 다각화 완성의 해&quot;</b>입니다. 연간 영업이익률 15%,
          2027년 매출 2,000억원 달성을 향해 나아가겠습니다.&quot;
        </div>
      </div>

      <div className="footer">
        F&amp;F Corporation | MLB Brand FP&amp;A Report | Confidential |
        2026.02.11 | AI-Assisted Analysis
      </div>
    </>
  );
}
