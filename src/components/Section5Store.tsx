/**
 * ========================================
 * 📌 섹션 5: 매장 효율성
 * ========================================
 * 수정 포인트: 매장 효율, Top/Bottom 매장, 저수익 매장, 영업비
 */
export default function Section5Store() {
  return (
    <>
      <div className="page-title" id="sec5">
        5. 매장 효율성 — Top5/Bottom5, 저수익 매장, 클로징 검토
      </div>

      <div className="container">
        {/* ===== 좌측 ===== */}
        <div className="left">
          {/* 매장수 & 점당매출 */}
          <div className="section">
            <div className="section-title">🏪 매장수 &amp; 점당매출 효율</div>
            <table>
              <thead>
                <tr><th>채널</th><th className="num">매장수</th><th className="num">증감</th><th className="num">점당매출</th><th className="num">YoY</th></tr>
              </thead>
              <tbody>
                <tr className="success-row"><td>플래그쉽</td><td className="num">3</td><td className="num">+1</td><td className="num"><b>785</b></td><td className="num"><b>160%</b></td></tr>
                <tr><td>면세점</td><td className="num">8</td><td className="num">-1</td><td className="num">1,102</td><td className="num">103%</td></tr>
                <tr><td>RF</td><td className="num">8</td><td className="num">+1</td><td className="num">283</td><td className="num">126%</td></tr>
                <tr><td>백화점</td><td className="num">63</td><td className="num">-5</td><td className="num">113</td><td className="num">119%</td></tr>
                <tr><td>대리점</td><td className="num">58</td><td className="num">-6</td><td className="num">80</td><td className="num">119%</td></tr>
                <tr><td>직영점</td><td className="num">10</td><td className="num">-2</td><td className="num">71</td><td className="num">108%</td></tr>
                <tr className="total-row"><td>합계</td><td className="num">150</td><td className="num">-12</td><td className="num">173</td><td className="num">118%</td></tr>
                <tr className="highlight-row"><td>면세 제외</td><td className="num">142</td><td className="num">-11</td><td className="num">121</td><td className="num">132%</td></tr>
              </tbody>
            </table>

            <div className="insight-box">
              <div className="insight-title">💡 효율성 핵심 인사이트</div>
              <div style={{ fontSize: "8px" }}>
                매장 12개 축소(162→150)에도 전체 점당매출 <b>118%</b> 성장<br />
                면세 제외 시 점당매출 YoY <b>132%</b>로 실질 매장효율 대폭 개선<br />
                플래그쉽 점당 785백만(160%) — 채널 내 최고 효율 입증
              </div>
            </div>
          </div>

          {/* TOP5 */}
          <div className="section">
            <div className="section-title">✅ 직접이익 TOP5 매장 (전 채널)</div>
            <table>
              <thead>
                <tr><th>#</th><th>매장</th><th>채널</th><th className="num">실판매액</th><th className="num">직접이익</th><th className="num">이익률</th></tr>
              </thead>
              <tbody>
                <tr className="success-row"><td>1</td><td>명동중앙</td><td>플래그쉽</td><td className="num">1,423</td><td className="num">530</td><td className="num">40.9%</td></tr>
                <tr><td>2</td><td>롯데면세소공</td><td>면세</td><td className="num">1,954</td><td className="num">547</td><td className="num">30.8%</td></tr>
                <tr><td>3</td><td>무신사</td><td>제휴몰</td><td className="num">1,355</td><td className="num">519</td><td className="num">42.1%</td></tr>
                <tr><td>4</td><td>현대면세무역</td><td>면세</td><td className="num">1,405</td><td className="num">397</td><td className="num">31.1%</td></tr>
                <tr><td>5</td><td>신라면세용산</td><td>면세</td><td className="num">1,551</td><td className="num">372</td><td className="num">26.4%</td></tr>
              </tbody>
            </table>
            <div style={{ fontSize: "7.5px", color: "#666", marginTop: "3px" }}>
              ※ 온라인쇼핑몰(직) 359백만/62.1%, 성수 334백만/49.2% 포함 시 Top7
            </div>
          </div>

          {/* 영업비 */}
          <div className="section">
            <div className="section-title">📈 영업비 구조 (3,692백만, YoY 104%)</div>
            <table>
              <thead>
                <tr><th>항목</th><th className="num">금액</th><th className="num">YoY</th><th>비고</th></tr>
              </thead>
              <tbody>
                <tr><td>인건비</td><td className="num">1,001</td><td className="num text-green">96%</td><td>-8명 효과</td></tr>
                <tr className="warn-row"><td>광고비</td><td className="num">696</td><td className="num text-red">161%</td><td>브랜드 투자효과(신규모델 카리나, 투어스)</td></tr>
                <tr className="success-row"><td>지급수수료</td><td className="num">116</td><td className="num text-green">44%</td><td>구조 효율화</td></tr>
                <tr><td>자가임차료</td><td className="num">280</td><td className="num text-red">217%</td><td>신사옥 이전</td></tr>
                <tr><td>감가상각비</td><td className="num">145</td><td className="num">124%</td><td>슈즈몰드 상각비 추가</td></tr>
                <tr className="total-row"><td>브랜드 영업비</td><td className="num">2,530</td><td className="num">113%</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== 우측 ===== */}
        <div className="right">
          {/* 저수익 매장 */}
          <div className="section">
            <div className="section-title">🚨 저수익 매장 진단 — 14개 매장 해당</div>

            <div className="box box-red">
              <div className="box-title red">즉시 클로징 검토 (3개 매장)</div>
              <table>
                <thead>
                  <tr><th>매장</th><th>채널</th><th className="num">실판매액</th><th className="num">직접이익</th><th className="num">매출YoY</th><th className="num">할인율↑</th></tr>
                </thead>
                <tbody>
                  <tr className="danger-row"><td><b>타임테라스동탄</b></td><td>직영</td><td className="num">25</td><td className="num text-red"><b>-4</b></td><td className="num text-red">99.4%</td><td className="num text-red">+8.7%p</td></tr>
                  <tr className="danger-row"><td><b>롯데분당</b></td><td>백화점</td><td className="num">16</td><td className="num">1</td><td className="num text-red">80.8%</td><td className="num text-red">+6.9%p</td></tr>
                  <tr className="danger-row"><td><b>갤러리아진주</b></td><td>백화점</td><td className="num">29</td><td className="num">2</td><td className="num text-red">9.2%</td><td className="num">+0.4%p</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "3px" }}>
                <li>3개 매장 클로징 시 월간 <b>1백만원</b>, 연간 <b>12백만원</b> 손실 방지</li>
                <li>2월 말 재평가 → 3월 내 클로징 최종 결정</li>
              </ul>
            </div>

            <div className="box box-yellow">
              <div className="box-title yellow">할인 정책 긴급 조정 (4개 매장)</div>
              <table>
                <thead>
                  <tr><th>매장</th><th>채널</th><th className="num">실판매액</th><th className="num">직접이익</th><th className="num">매출YoY</th><th className="num">할인율</th></tr>
                </thead>
                <tbody>
                  <tr><td>롯데상인</td><td>백화점</td><td className="num">32</td><td className="num">3</td><td className="num text-red">66.1%</td><td className="num">+3.9%p</td></tr>
                  <tr><td>엔터식스왕십리</td><td>백화점</td><td className="num">31</td><td className="num">4</td><td className="num">84.0%</td><td className="num">+3.1%p</td></tr>
                  <tr><td>롯데포항</td><td>백화점</td><td className="num">43</td><td className="num">3</td><td className="num">105.1%</td><td className="num">+2.7%p</td></tr>
                  <tr><td>신세계광주</td><td>백화점</td><td className="num">58</td><td className="num">7</td><td className="num">94.4%</td><td className="num">+2.1%p</td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "3px" }}>
                <li>할인율 5% 이내 목표 → 월간 <b>4백만원</b>, 연간 <b>44백만원</b> 개선</li>
              </ul>
            </div>

            <div className="box box-green">
              <div className="box-title green">상품믹스 재구성 &amp; 정상화 임박 (7개 매장)</div>
              <table>
                <thead>
                  <tr><th>매장</th><th className="num">실판매액</th><th className="num">직접이익</th><th className="num">매출YoY</th><th>상태</th></tr>
                </thead>
                <tbody>
                  <tr className="success-row"><td>스타필드하남</td><td className="num">120</td><td className="num">11</td><td className="num">128.3%</td><td><span className="badge-up">회복</span></td></tr>
                  <tr className="success-row"><td>갤러리아광교</td><td className="num">87</td><td className="num">12</td><td className="num">124.4%</td><td><span className="badge-up">정상화</span></td></tr>
                  <tr className="success-row"><td>신세계경기</td><td className="num">46</td><td className="num">5</td><td className="num">131.8%</td><td><span className="badge-up">회복</span></td></tr>
                  <tr><td>롯데광주</td><td className="num">46</td><td className="num">7</td><td className="num">107.5%</td><td><span className="badge-warn">관찰</span></td></tr>
                  <tr><td>동성로</td><td className="num">76</td><td className="num">3</td><td className="num">107.7%</td><td><span className="badge-warn">관찰</span></td></tr>
                  <tr><td>스타필드수원</td><td className="num">68</td><td className="num">3</td><td className="num text-red">91.2%</td><td><span className="badge-warn">관찰</span></td></tr>
                  <tr><td>롯데대구</td><td className="num">32</td><td className="num">5</td><td className="num text-red">79.9%</td><td><span className="badge-warn">관찰</span></td></tr>
                </tbody>
              </table>
              <ul style={{ marginTop: "3px" }}>
                <li>고마진 상품 비중 15%→25% 확대 → 연간 <b>300백만원</b> 증익</li>
              </ul>
            </div>

            <div className="insight-box">
              <div className="insight-title">📌 저수익 매장 개선 재무 효과 합산</div>
              <table>
                <thead>
                  <tr><th>구분</th><th className="num">대상</th><th className="num">월간 개선</th><th className="num">연간 영향</th></tr>
                </thead>
                <tbody>
                  <tr><td>클로징</td><td className="num">3개</td><td className="num">1</td><td className="num">12</td></tr>
                  <tr><td>할인율 조정</td><td className="num">4개</td><td className="num">4</td><td className="num">44</td></tr>
                  <tr><td>상품믹스</td><td className="num">5개</td><td className="num">25</td><td className="num">300</td></tr>
                  <tr className="total-row"><td><b>합계</b></td><td className="num"><b>12개</b></td><td className="num"><b>30</b></td><td className="num"><b>356</b></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
