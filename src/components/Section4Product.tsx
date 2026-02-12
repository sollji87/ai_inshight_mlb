/**
 * ========================================
 * 📌 섹션 4: 상품·재고 분석
 * ========================================
 * 수정 포인트: 아이템별 매출, 시즌 판매율, 재고 리스크, 원가율
 */
export default function Section4Product() {
  return (
    <>
      <div className="page-title" id="sec4">
        4. 상품·재고 분석 — 아이템별 성과, 시즌 판매율, 원가율
      </div>

      <div className="container">
        {/* ===== 좌측 ===== */}
        <div className="left">
          {/* 아이템별 매출 */}
          <div className="section">
            <div className="section-title">📊 아이템별 매출·수익 구조</div>
            <table>
              <thead>
                <tr><th>아이템</th><th className="num">매출</th><th className="num">YoY</th><th className="num">비중</th><th className="num">직접이익률</th></tr>
              </thead>
              <tbody>
                <tr className="success-row"><td><b>모자</b></td><td className="num"><b>12,122</b></td><td className="num"><b>148%</b></td><td className="num"><b>41.5%</b></td><td className="num"><b>34.3%</b></td></tr>
                <tr><td>신발</td><td className="num">7,607</td><td className="num text-red">95%</td><td className="num">26.1%</td><td className="num">27.5%</td></tr>
                <tr><td>25F 의류</td><td className="num">4,617</td><td className="num">118%</td><td className="num">15.8%</td><td className="num">30.1%</td></tr>
                <tr><td>가방</td><td className="num">2,376</td><td className="num text-red">85%</td><td className="num">8.1%</td><td className="num">27.3%</td></tr>
                <tr><td>차기시즌 의류</td><td className="num">2,251</td><td className="num text-red">76%</td><td className="num">7.7%</td><td className="num">28.2%</td></tr>
                <tr><td>기타ACC</td><td className="num">170</td><td className="num">121%</td><td className="num">0.6%</td><td className="num">29.7%</td></tr>
              </tbody>
            </table>

            <div className="insight-box" style={{ marginTop: "6px" }}>
              <div className="insight-title">💡 아이템별 직접이익 구성</div>
              <table>
                <thead>
                  <tr><th>아이템</th><th className="num">직접이익</th><th className="num">YoY</th><th className="num">이익률</th></tr>
                </thead>
                <tbody>
                  <tr className="success-row"><td>모자</td><td className="num">3,847</td><td className="num">161%</td><td className="num">34.3%</td></tr>
                  <tr><td>신발</td><td className="num">1,903</td><td className="num">102%</td><td className="num">27.5%</td></tr>
                  <tr><td>25F 의류</td><td className="num">1,263</td><td className="num">139%</td><td className="num">30.1%</td></tr>
                  <tr><td>가방</td><td className="num">667</td><td className="num text-red">89%</td><td className="num">27.3%</td></tr>
                  <tr><td>차기시즌</td><td className="num">578</td><td className="num text-red">85%</td><td className="num">28.2%</td></tr>
                  <tr className="danger-row"><td>과시즌 의류</td><td className="num">-130</td><td className="num">-</td><td className="num">14.8%</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 시즌 판매율 */}
          <div className="section">
            <div className="section-title">🏷️ 25F 시즌 판매율 &amp; M/U 분석</div>
            <div className="box box-yellow">
              <div className="box-title yellow">25F 판매율 49.6% (전년 55.3%, -5.7%p)</div>
              <table>
                <thead>
                  <tr><th>아이템</th><th className="num">판매율</th><th className="num">전년</th><th className="num">M/U</th><th className="num">전년M/U</th></tr>
                </thead>
                <tbody>
                  <tr className="danger-row"><td><b>다운점퍼</b></td><td className="num"><b>46.9%</b></td><td className="num">64.3%</td><td className="num">5.12</td><td className="num">5.21</td></tr>
                  <tr><td>팬츠</td><td className="num">53.3%</td><td className="num">59.2%</td><td className="num">5.34</td><td className="num">5.36</td></tr>
                  <tr className="success-row"><td>맨투맨</td><td className="num">57.5%</td><td className="num">51.0%</td><td className="num">5.39</td><td className="num">6.03</td></tr>
                  <tr className="success-row"><td>반팔카라티</td><td className="num">68.1%</td><td className="num">66.3%</td><td className="num">5.53</td><td className="num">5.72</td></tr>
                  <tr><td>우븐팬츠</td><td className="num">50.2%</td><td className="num">49.3%</td><td className="num">-</td><td className="num">-</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>전체 M/U 5.23(전년 5.48) — 발주 효율화 진행 중</li>
                <li className="text-red">다운점퍼 목표 마감판매율 50%, 전월 39.8% 대비 6.1%p 개선 중</li>
                <li>맨투맨·반팔카라티는 전년 초과 달성 — 우수 상품 검증</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== 우측 ===== */}
        <div className="right">
          {/* 재고 리스크 */}
          <div className="section">
            <div className="section-title">📦 재고 리스크 상세 분석</div>
            <div className="box box-red">
              <div className="box-title red">신발 재고 — 55.3주(약 13개월), 기말재고 1,133억</div>
              <ul>
                <li>과잉 재고 약 <b>1,085억원, 851K pcs, 168 모델</b></li>
                <li>근본 원인: 여름신발 과다발주, 청키/라이너 트렌드 하락, 스니커즈 확장</li>
                <li>26S시즌 <b>8월말 50주</b> 관리 목표, 26년말 <b>40주</b> 적정재고 달성</li>
              </ul>
              <div style={{ fontSize: "8px", marginTop: "3px", padding: "4px", background: "#fff", borderRadius: "2px" }}>
                <b>소진 계획:</b> 청키/라이너 37억 면세 재운영 | 뮬/슬립온 백화점 35억 | 스니커즈 39억 대리점/직영 | 잔여분 아울렛 이관(62억) + 소각(21억 손상품)
              </div>
            </div>

            <div className="box box-yellow">
              <div className="box-title yellow">기말재고 3,452억원 (YoY +7%)</div>
              <table>
                <thead>
                  <tr><th>아이템</th><th className="num">기말재고</th><th className="num">전년비</th></tr>
                </thead>
                <tbody>
                  <tr className="danger-row"><td><b>신발</b></td><td className="num"><b>1,133억</b></td><td className="num text-red"><b>114%</b></td></tr>
                  <tr><td>모자</td><td className="num">642억</td><td className="num text-red">137%</td></tr>
                  <tr><td>차기시즌 의류</td><td className="num">478억</td><td className="num">106%</td></tr>
                  <tr><td>25F 의류</td><td className="num">442억</td><td className="num text-red">118%</td></tr>
                  <tr><td>가방</td><td className="num">294억</td><td className="num text-green">91%</td></tr>
                  <tr><td>25S 의류</td><td className="num">281억</td><td className="num">105%</td></tr>
                  <tr><td>과시즌 의류</td><td className="num">153억</td><td className="num text-green">50%</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 원가율 */}
          <div className="section">
            <div className="section-title">🏭 원가율 분석 — 매출비중 상위 아이템</div>
            <div className="box box-blue">
              <div className="box-title blue">수출·사입 제외 기준 원가율 (전체 +0.82%p)</div>
              <table>
                <thead>
                  <tr><th>아이템</th><th className="num">비중</th><th className="num">원가율</th><th className="num">증감</th><th className="num">TAG단가</th></tr>
                </thead>
                <tbody>
                  <tr><td>다운점퍼</td><td className="num">37.4%</td><td className="num">19.1%</td><td className="num text-red">+0.6%p</td><td className="num">375</td></tr>
                  <tr><td>비니</td><td className="num">21.5%</td><td className="num">15.5%</td><td className="num text-red">+0.6%p</td><td className="num">45</td></tr>
                  <tr><td>팬츠</td><td className="num">5.7%</td><td className="num">18.7%</td><td className="num text-green">-0.2%p</td><td className="num">117</td></tr>
                  <tr className="warn-row"><td>트레이닝(상의)</td><td className="num">2.7%</td><td className="num">19.5%</td><td className="num text-red">+1.6%p</td><td className="num">153</td></tr>
                  <tr className="warn-row"><td>점퍼</td><td className="num">2.4%</td><td className="num">20.6%</td><td className="num text-red">+1.7%p</td><td className="num">275</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "4px" }}>
                <li>다운점퍼+비니(매출 58.9%) 원가율 상승이 전체 원가율 변동 주도</li>
                <li>비니 수량 전년比 <b>236% 급증</b>(미야옹/뉴젤리 효과), 비중 21.5%</li>
                <li className="text-red">트레이닝·점퍼: TAG단가↓ + 평균원가↑ → 원가율 1.5%p+ 급등</li>
                <li>전체기준(수출포함) 원가율 +0.07%p로 안정 — 수출물량 완충 효과</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
