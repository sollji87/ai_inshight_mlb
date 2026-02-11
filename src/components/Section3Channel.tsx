/**
 * ========================================
 * 📌 섹션 3: 채널별 상세 분석
 * ========================================
 * 수정 포인트: 채널별 매출, 고성장 채널, 면세점, 백화점/대리점, RF
 */
export default function Section3Channel() {
  return (
    <>
      <div className="page-title" id="sec3">
        3. 채널별 상세 분석 — 고성장 vs 부진 채널
      </div>

      <div className="container">
        {/* ===== 좌측 ===== */}
        <div className="left">
          {/* 채널별 매출 */}
          <div className="section">
            <div className="section-title">📊 채널별 매출 &amp; 수익 구조</div>
            <table>
              <thead>
                <tr>
                  <th>채널</th>
                  <th className="num">매출</th>
                  <th className="num">YoY</th>
                  <th className="num">비중</th>
                  <th className="num">비중변화</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>면세점</td><td className="num">8,813</td><td className="num">91%</td><td className="num">30.2%</td><td className="num text-green">-6.2%p</td></tr>
                <tr><td>백화점</td><td className="num">7,150</td><td className="num">111%</td><td className="num">24.5%</td><td className="num">-0.1%p</td></tr>
                <tr><td>대리점</td><td className="num">4,955</td><td className="num">110%</td><td className="num">17.0%</td><td className="num">-</td></tr>
                <tr className="success-row"><td><b>플래그쉽</b></td><td className="num"><b>2,356</b></td><td className="num"><b>239%</b></td><td className="num"><b>8.1%</b></td><td className="num text-green"><b>+4.3%p</b></td></tr>
                <tr className="highlight-row"><td>제휴몰</td><td className="num">2,294</td><td className="num">127%</td><td className="num">7.9%</td><td className="num text-green">+1.0%p</td></tr>
                <tr className="highlight-row"><td>RF</td><td className="num">2,265</td><td className="num">145%</td><td className="num">7.8%</td><td className="num text-green">+1.8%p</td></tr>
                <tr><td>직영점</td><td className="num">713</td><td className="num">90%</td><td className="num">2.4%</td><td className="num">-</td></tr>
                <tr><td>자사몰</td><td className="num">655</td><td className="num">123%</td><td className="num">2.2%</td><td className="num">-</td></tr>
                <tr className="total-row"><td>합계</td><td className="num">29,200</td><td className="num">111%</td><td className="num">100%</td><td className="num">-</td></tr>
              </tbody>
            </table>
          </div>

          {/* 플래그쉽 */}
          <div className="section">
            <div className="section-title">🚀 고성장 채널: 플래그쉽 (+139%)</div>
            <div className="box box-green">
              <div className="box-title green">플래그쉽 — 직접이익 841백만(538%↑), 이익률 39.3%</div>
              <table>
                <thead>
                  <tr><th>매장</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                </thead>
                <tbody>
                  <tr className="success-row"><td>명동중앙</td><td className="num">589</td><td className="num">+131%</td><td className="num">45.5%</td></tr>
                  <tr className="success-row"><td>성수</td><td className="num">334</td><td className="num">신규</td><td className="num">49.2%</td></tr>
                  <tr className="warn-row"><td>한남</td><td className="num">31</td><td className="num">흑자전환</td><td className="num">18.5%</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>명동중앙 61.7% 기여도 — 단일매장 의존도 초집중 리스크</li>
                <li>성수 월 7억 수준으로 채널 2번째 축 형성</li>
                <li className="text-red">한남 2개월 연속 직접이익 달성, 매출 성장으로 이익레버리지 상승필요</li>
              </ul>
            </div>
          </div>

          {/* 온라인 */}
          <div className="section">
            <div className="section-title">🛒 제휴몰·자사몰 (+27%, +23%)</div>
            <div className="box box-blue">
              <div className="box-title blue">온라인 채널 — 합산 2,949백만(10.1%)</div>
              <table>
                <thead>
                  <tr><th>매장</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                </thead>
                <tbody>
                  <tr className="success-row"><td>무신사</td><td className="num">519</td><td className="num">+83%</td><td className="num">42.1%</td></tr>
                  <tr><td>온라인쇼핑몰(직)</td><td className="num">359</td><td className="num">+25%</td><td className="num">62.1%</td></tr>
                  <tr><td>네이버스토어</td><td className="num">126</td><td className="num">+6%</td><td className="num">44.9%</td></tr>
                  <tr className="success-row"><td>SSF샵</td><td className="num">60</td><td className="num">+264%</td><td className="num">37.5%</td></tr>
                  <tr><td>카카오선물하기</td><td className="num">64</td><td className="num text-red">-36%</td><td className="num">50.0%</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>무신사 58.4% 기여 — 채널 내 편중이나 고성장 지속</li>
                <li>SSF샵 +264% 급성장, 29CM +64% — 신규 유통 채널 유효</li>
                <li>자사몰 96.7% 단일 매장 의존 → 쇼피파이 글로벌(69.5% 이익률) 확대 검토</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== 우측 ===== */}
        <div className="right">
          {/* 면세점 */}
          <div className="section">
            <div className="section-title">📉 면세점 구조조정 현황 (30.2%→목표 25%)</div>
            <div className="box box-yellow">
              <div className="box-title yellow">면세점 — 양극화 심화</div>
              <table>
                <thead>
                  <tr><th>매장</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                </thead>
                <tbody>
                  <tr className="success-row"><td>롯데면세소공</td><td className="num">547</td><td className="num">+162%</td><td className="num">30.8%</td></tr>
                  <tr className="success-row"><td>현대면세무역</td><td className="num">397</td><td className="num">+104%</td><td className="num">31.1%</td></tr>
                  <tr className="danger-row"><td>신라면세용산</td><td className="num">372</td><td className="num text-red">-32%</td><td className="num">26.4%</td></tr>
                  <tr className="danger-row"><td>신라면세장충</td><td className="num">359</td><td className="num text-red">-28%</td><td className="num">30.3%</td></tr>
                  <tr className="danger-row"><td>신세계면세명동</td><td className="num">325</td><td className="num text-red">-25%</td><td className="num">29.7%</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>롯데/현대 2곳 회복 vs 신라/신세계 3곳 구조적 부진</li>
                <li>비중 36.4%→30.2% 전략적 축소 진행 중, 25% 목표 지속</li>
                <li>할인율 0.6%→6.4%(+5.8%p) — 면세 가격정책 재점검 필요</li>
              </ul>
            </div>
          </div>

          {/* 백화점·대리점 */}
          <div className="section">
            <div className="section-title">🏬 백화점·대리점 (24.5%, 17.0%)</div>
            <div className="box box-gray">
              <div className="box-title">백화점 — 분산 안정 구조(Top5 기여 26.0%)</div>
              <table>
                <thead>
                  <tr><th>매장</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                </thead>
                <tbody>
                  <tr><td>더현대서울</td><td className="num">154</td><td className="num text-red">-7%</td><td className="num">32.0%</td></tr>
                  <tr><td>현대판교</td><td className="num">129</td><td className="num">+24%</td><td className="num">34.1%</td></tr>
                  <tr className="success-row"><td>롯데잠실</td><td className="num">123</td><td className="num">+57%</td><td className="num">31.9%</td></tr>
                  <tr><td>롯데부산</td><td className="num">95</td><td className="num">+22%</td><td className="num">31.5%</td></tr>
                  <tr><td>신세계강남</td><td className="num">67</td><td className="num">+38%</td><td className="num">33.3%</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>할인율 5.0%→8.3%(+3.3%p) 상승 — 가격 통제 필요</li>
                <li>대리점 매출 4,955백만(110%), 이익률 33.5% — 안정적 분산 구조</li>
              </ul>
            </div>
          </div>

          {/* RF */}
          <div className="section">
            <div className="section-title">🔄 RF 채널 (145%, 이익률 31.7%)</div>
            <div className="box box-green">
              <div className="box-title green">RF Top5 매장</div>
              <table>
                <thead>
                  <tr><th>매장</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                </thead>
                <tbody>
                  <tr><td>롯데본점</td><td className="num">163</td><td className="num">+62%</td><td className="num">25.5%</td></tr>
                  <tr><td>온라인완주</td><td className="num">128</td><td className="num">+15%</td><td className="num">55.8%</td></tr>
                  <tr className="success-row"><td>홍대</td><td className="num">107</td><td className="num">+138%</td><td className="num">48.9%</td></tr>
                  <tr><td>가로수길</td><td className="num">89</td><td className="num">+52%</td><td className="num">32.1%</td></tr>
                  <tr><td>신제주</td><td className="num">82</td><td className="num">+45%</td><td className="num">36.6%</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>홍대 +138% 성장 + 49% 이익률 — 성장과 효율 동시 달성</li>
                <li>할인율 19.6%→17.9% 개선 추세이나 여전히 고할인 구간</li>
              </ul>
            </div>
          </div>

          <div className="insight-box">
            <div className="insight-title">💡 채널 집중도 리스크 요약</div>
            <div style={{ fontSize: "8px" }}>
              <b>초집중(Top5 80%+):</b> 플래그쉽 96.7%, 자사몰 100%, 면세 84.7%, RF 80.9%, 직영점 86.3%
              <br />
              <b>안정 분산(&lt;60%):</b> 백화점 26.0%, 대리점 32.4%, 제휴몰 58.4%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
