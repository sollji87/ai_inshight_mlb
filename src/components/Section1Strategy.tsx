/**
 * ========================================
 * 📌 섹션 1: 전략 & Action Plan
 * ========================================
 * 수정 포인트: 즉시 실행 과제, 단기 전략, 중기 성장 전략, KPI 목표
 */
export default function Section1Strategy() {
  return (
    <>
      <div className="page-title" id="sec1">
        1. 전략 &amp; Action Plan — 즉시/단기/중장기 과제
      </div>

      <div className="container">
        {/* ===== 좌측: 즉시 실행 과제 ===== */}
        <div className="left">
          <div className="section">
            <div className="section-title">⚡ 즉시 실행 과제 (2월 내)</div>

            <div className="box box-red">
              <div className="box-title red">
                1. 할인율 긴급 통제 → 목표: Q1 평균 6.0% 이하
              </div>
              <ul>
                <li>현재 7.3%(YoY +2.6%p) — 신발 13.3%, 가방 10.4%로 급등</li>
                <li>26S 시즌 할인율 4% 목표 (1월 차기시즌 의류 할인율 3.7%유지중)</li>
                <li>25F 시즌 종료 임박에 따른 프로모션을 통한 겨울상품 판매촉진, 25FW DJ/DV/PD/WB 품목 구매 시 10% OFF 및 카카오 플친 프로모션 진행중</li>
                <li>
                  <b>기대효과:</b> 할인율 1%p↓ 시 직접이익 <b>+265백만원</b>
                </li>
              </ul>
            </div>

            <div className="box box-red">
              <div className="box-title red">
                2. 신발 재고 긴급 소진 → 목표: 55.3주 → 26S 시즌말 50주, 연말 40주
              </div>
              <ul>
                <li>
                  신발 재고주수 55.3주(≈13개월분), 26SS 신상품 입고 여력 제약
                </li>
                <li>
                  아울렛 이관 50% 확대, 제휴몰 단독 프로모션(할인 15% 이내)
                </li>
                <li>청키/라이너 37억 면세 재운영, 뮬/슬립온 백화점 35억</li>
                <li>
                  <b>기대효과:</b> 26S시즌 말 신발 예상택재고고 <b>909억 수준</b>
                </li>
              </ul>
            </div>

            <div className="box box-red">
              <div className="box-title red">
                3. 25F 의류 시즌 마감 → 목표: 판매율 49.6%→60%
              </div>
              <ul>
                <li>
                  다운점퍼 판매율 46.9%(전년 64.3% 대비 -17.4%p 급락)
                </li>
                <li>
                  2/15~28 &quot;25FW Final Sale&quot; 전 채널 동시 진행(할인
                  10%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== 우측: 단기 & 중기 전략 ===== */}
        <div className="right">
          <div className="section">
            <div className="section-title">🎯 단기 전략 과제 (Q1)</div>

            <div className="box box-yellow">
              <div className="box-title yellow">
                4. 플래그쉽 확대: 북촌·도산 오픈 준비
              </div>
              <ul>
                <li>현 플래그쉽 매출 2,356백만(+139%), 직접이익률 39.3%</li>
                <li>북촌 26/3/20 오픈예정</li>
<li>북촌 월 1.2억 목표 (1.2억 기준 직접이익 월 0.4억, 직접이익률 35%)</li>
              <li>26년 연간 북촌 12억, 도산 7억 계획 중</li>
            </ul>
          </div>

            <div className="box box-yellow">
              <div className="box-title yellow">5. 온라인 채널 고도화</div>
              <ul>
                <li>
                  자사몰 이익률 62.3% vs 제휴몰 42.6% — 역할 재정의
                </li>
                <li>
                  자사몰: 멤버십 락인·독점 상품 20%, 할인율 10%↓ 목표
                </li>
                <li>제휴몰: 신제품 런칭·정가 판매, 무신사 수수료 25.8% (1%p인하 제안 중)</li>
              </ul>
            </div>

            <div className="box box-yellow">
              <div className="box-title yellow">
                6. 면세점 구조조정 완료
              </div>
              <ul>
                <li>1월 면세 비중 30.2%, 26년 연간 1,200억 내 운영 목표, 직접이익률 30% + 유지</li>
                <li>
                  신라/신세계 3개점 -26~32% 하락 — 매장별 매출액 조정을 통한 직접이익률 관리 필요요
                </li>
              </ul>
            </div>
          </div>

          <div className="section">
            <div className="section-title">🏆 중기 성장 전략 (2026 연간)</div>

            <div className="box box-green">
              <div className="box-title green">
                7. 채널 포트폴리오 최적화
              </div>
              <table>
                <thead>
                  <tr>
                    <th>채널</th>
                    <th className="num">현재</th>
                    <th className="num">목표</th>
                    <th>방향</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>플래그쉽</td>
                    <td className="num">8.1%</td>
                    <td className="num">12%</td>
                    <td>북촌·도산 오픈</td>
                  </tr>
                  <tr>
                    <td>온라인</td>
                    <td className="num">10.1%</td>
                    <td className="num">15%</td>
                    <td>자사몰 확대</td>
                  </tr>
                  <tr>
                    <td>면세점</td>
                    <td className="num">30.2%</td>
                    <td className="num">20%</td>
                    <td>전략적 축소</td>
                  </tr>
                  <tr>
                    <td>RF</td>
                    <td className="num">7.8%</td>
                    <td className="num">10%</td>
                    <td>재고 최적화 후 확대</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="box box-green">
              <div className="box-title green">
                8~9. 아울렛 직관리 확대 &amp; MLB 2.0 리뉴얼
              </div>
              <ul>
                <li>
                  아울렛 직관리: 3개점(26S)→7개점(27), 대형벤더 비중 72%
                </li>
                <li>MLB 2.0 인테리어: 14%(25)→38%(26)→60%(27)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== KPI 목표 Dashboard ===== */}
      <div
        className="box box-dark"
        style={{ padding: "10px 12px", marginTop: "4px" }}
      >
        <div style={{ fontSize: "9px", fontWeight: "bold", marginBottom: "4px" }}>
          📌 KPI 목표 Dashboard
        </div>
        <div className="kpi-grid" style={{ marginBottom: 0 }}>
          {[
            { label: "Q1 할인율", target: "≤6.0%", current: "현재 7.3%" },
            { label: "신발 재고주수", target: "≤40주", current: "현재 55.3주" },
            { label: "25F 의류 판매율", target: "≥60%", current: "현재 49.6%" },
            { label: "연간 영업이익률", target: "15%", current: "현재 13.8%" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="kpi-box"
              style={{
                background: "rgba(255,255,255,0.12)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "white",
              }}
            >
              <div
                className="kpi-label"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {kpi.label}
              </div>
              <div className="kpi-value" style={{ color: "#fbd38d" }}>
                {kpi.target}
              </div>
              <div
                className="kpi-change"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {kpi.current}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
