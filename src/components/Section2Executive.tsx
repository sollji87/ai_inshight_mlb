/**
 * ========================================
 * 📌 섹션 2: Executive Summary
 * ========================================
 * 수정 포인트: KPI 수치, 핵심 성과, 리스크 이슈
 */
export default function Section2Executive() {
  return (
    <>
      <div className="page-title" id="sec2">
        2. Executive Summary — 핵심 실적 및 이슈 요약
      </div>

      {/* ===== KPI 카드 Row 1 ===== */}
      <div className="kpi-grid">
        <div className="kpi-box">
          <div className="kpi-label">실판매출</div>
          <div className="kpi-value">29,200</div>
          <div className="kpi-change up">▲ YoY +11%</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">영업이익</div>
          <div className="kpi-value">3,811</div>
          <div className="kpi-change up">▲ YoY +59%</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">영업이익률</div>
          <div className="kpi-value">13.8%</div>
          <div className="kpi-change up">▲ +4.2%p</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">점당매출</div>
          <div className="kpi-value">173</div>
          <div className="kpi-change up">▲ YoY 118%</div>
        </div>
      </div>

      {/* ===== KPI 카드 Row 2 ===== */}
      <div className="kpi-grid">
        <div className="kpi-box">
          <div className="kpi-label">직접이익</div>
          <div className="kpi-value">7,503</div>
          <div className="kpi-change up">▲ +26% (이익률 27.1%)</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">할인율</div>
          <div className="kpi-value" style={{ color: "#c53030" }}>
            7.3%
          </div>
          <div className="kpi-change down">▼ +2.6%p ⚠️</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">매장수</div>
          <div className="kpi-value">150</div>
          <div className="kpi-change">전년 162개 (-12)</div>
        </div>
        <div className="kpi-box">
          <div className="kpi-label">인당매출</div>
          <div className="kpi-value">221</div>
          <div className="kpi-change up">▲ YoY 117%</div>
        </div>
      </div>

      <div className="container">
        {/* ===== 좌측: 핵심 성과 ===== */}
        <div className="left">
          <div className="section">
            <div className="section-title">
              🎯 핵심 성과: 수익성 중심 성장 체질 전환
            </div>
            <div className="box box-green">
              <div className="box-title green">
                매출 구조 고도화 — 면세 의존도 탈피
              </div>
              <ul>
                <li>
                  면세점 비중 <b>36.4%→30.2%</b> (-6.2%p) 전략적 축소 성공
                </li>
                <li>플래그쉽 +139%, RF +45%, 제휴몰 +27% 고수익채널 견인</li>
                <li>
                  직접이익 증가율(+26%)이 매출 증가율(+11%)의 <b>2.4배</b> →
                  규모의 경제
                </li>
              </ul>
            </div>

            <div className="box box-green">
              <div className="box-title green">효율성 극대화</div>
              <ul>
                <li>
                  비효율 매장 정리에 따른 점당매출 <b>118%</b> 성장
                </li>
                <li>영업비율 14.2%→13.3% (-0.9%p) 개선</li>
                <li>인원 146→138명(-8명), 인당매출 221백만(+17%)</li>
              </ul>
            </div>

            <div className="box box-blue">
              <div className="box-title blue">채널별 직접이익률 구조</div>
              <table>
                <thead>
                  <tr>
                    <th>채널</th>
                    <th className="num">실판매액</th>
                    <th className="num">이익률</th>
                    <th className="num">직접이익</th>
                    <th className="num">YoY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="success-row">
                    <td>자사몰</td>
                    <td className="num">655</td>
                    <td className="num"><b>62.3%</b></td>
                    <td className="num">371</td>
                    <td className="num">128%</td>
                  </tr>
                  <tr className="success-row">
                    <td>제휴몰</td>
                    <td className="num">2,294</td>
                    <td className="num">42.6%</td>
                    <td className="num">890</td>
                    <td className="num">138%</td>
                  </tr>
                  <tr className="highlight-row">
                    <td>플래그쉽</td>
                    <td className="num">2,356</td>
                    <td className="num">39.3%</td>
                    <td className="num">841</td>
                    <td className="num">538%</td>
                  </tr>
                  <tr>
                    <td>대리점</td>
                    <td className="num">4,955</td>
                    <td className="num">33.5%</td>
                    <td className="num">1,507</td>
                    <td className="num">111%</td>
                  </tr>
                  <tr>
                    <td>RF</td>
                    <td className="num">2,265</td>
                    <td className="num">31.7%</td>
                    <td className="num">652</td>
                    <td className="num">167%</td>
                  </tr>
                  <tr>
                    <td>면세점</td>
                    <td className="num">8,813</td>
                    <td className="num">29.5%</td>
                    <td className="num">2,360</td>
                    <td className="num">94%</td>
                  </tr>
                  <tr>
                    <td>백화점</td>
                    <td className="num">7,150</td>
                    <td className="num">23.2%</td>
                    <td className="num">1,511</td>
                    <td className="num">120%</td>
                  </tr>
                  <tr>
                    <td>직영점</td>
                    <td className="num">713</td>
                    <td className="num">16.2%</td>
                    <td className="num">105</td>
                    <td className="num">142%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== 우측: 리스크 & 이슈 ===== */}
        <div className="right">
          <div className="section">
            <div className="section-title">⚠️ 주요 리스크 및 이슈</div>

            <div className="box box-red">
              <div className="box-title red">
                할인율 7.3% — 수익성 잠식 경보
              </div>
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th className="num">할인율</th>
                    <th className="num">전년</th>
                    <th className="num">증감</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="danger-row">
                    <td>RF</td>
                    <td className="num">17.9%</td>
                    <td className="num">19.6%</td>
                    <td className="num text-green">-1.7%p</td>
                  </tr>
                  <tr className="danger-row">
                    <td>자사몰</td>
                    <td className="num">14.1%</td>
                    <td className="num">11.6%</td>
                    <td className="num text-red">+2.5%p</td>
                  </tr>
                  <tr className="warn-row">
                    <td>신발</td>
                    <td className="num">13.3%</td>
                    <td className="num">6.0%</td>
                    <td className="num text-red">+7.3%p</td>
                  </tr>
                  <tr className="warn-row">
                    <td>가방</td>
                    <td className="num">10.4%</td>
                    <td className="num">3.1%</td>
                    <td className="num text-red">+7.3%p</td>
                  </tr>
                  <tr className="total-row">
                    <td>전체</td>
                    <td className="num">7.3%</td>
                    <td className="num">4.7%</td>
                    <td className="num text-red">+2.6%p</td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{ fontSize: "7.5px", color: "#c53030", marginTop: "3px" }}
              >
                채널간 가격 경쟁 불일치 대신 쿠폰 사용 등 자사몰 유입 프로모션 진행
              </div>
            </div>

            <div className="box box-red">
              <div className="box-title red">
                ACC 재고주수 34주 — 구조적 과잉
              </div>
              <table>
                <thead>
                  <tr>
                    <th>아이템</th>
                    <th className="num">재고주수</th>
                    <th className="num">전년</th>
                    <th className="num">증감</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="danger-row">
                    <td><b>신발</b></td>
                    <td className="num"><b>55.3주</b></td>
                    <td className="num">50.1주</td>
                    <td className="num text-red">+5.2주</td>
                  </tr>
                  <tr className="warn-row">
                    <td>기타ACC</td>
                    <td className="num">41.5주</td>
                    <td className="num">88.4주</td>
                    <td className="num text-green">-46.9주</td>
                  </tr>
                  <tr>
                    <td>가방</td>
                    <td className="num">31.3주</td>
                    <td className="num">46.3주</td>
                    <td className="num text-green">-15.0주</td>
                  </tr>
                  <tr>
                    <td>모자</td>
                    <td className="num">20.6주</td>
                    <td className="num">20.9주</td>
                    <td className="num text-green">-0.3주</td>
                  </tr>
                </tbody>
              </table>
              <div
                style={{ fontSize: "7.5px", color: "#c53030", marginTop: "3px" }}
              >
                ※ 신발 55.3주=13개월분, 26SS 입고 여력 제약. 기말재고
                1,133억원(+14% YoY)
              </div>
            </div>

            <div className="box box-yellow">
              <div className="box-title yellow">
                25F 의류 판매율 49.6% — 시즌 마감 부담
              </div>
              <table>
                <thead>
                  <tr>
                    <th>아이템</th>
                    <th className="num">판매율</th>
                    <th className="num">전년</th>
                    <th className="num">증감</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="danger-row">
                    <td>다운점퍼</td>
                    <td className="num">46.9%</td>
                    <td className="num">64.3%</td>
                    <td className="num text-red">-17.4%p</td>
                  </tr>
                  <tr className="warn-row">
                    <td>팬츠</td>
                    <td className="num">53.3%</td>
                    <td className="num">59.2%</td>
                    <td className="num text-red">-5.9%p</td>
                  </tr>
                  <tr>
                    <td>반팔카라티</td>
                    <td className="num">68.1%</td>
                    <td className="num">66.3%</td>
                    <td className="num text-green">+1.8%p</td>
                  </tr>
                  <tr>
                    <td>맨투맨</td>
                    <td className="num">57.5%</td>
                    <td className="num">51.0%</td>
                    <td className="num text-green">+6.5%p</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
