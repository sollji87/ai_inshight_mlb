import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Section1Strategy from "@/components/Section1Strategy";
import Section2Executive from "@/components/Section2Executive";
import Section3Channel from "@/components/Section3Channel";
import Section4Product from "@/components/Section4Product";
import Section5Store from "@/components/Section5Store";
import CeoMessage from "@/components/CeoMessage";

/**
 * ========================================
 * MLB 브랜드 2026년 1월 경영 보고서
 * ========================================
 *
 * 📁 수정 가이드:
 * - 각 섹션은 src/components/ 폴더의 개별 파일로 관리됩니다.
 * - 데이터(숫자, 텍스트)를 수정하려면 해당 컴포넌트 파일을 열어 직접 편집하세요.
 * - 스타일을 수정하려면 src/app/globals.css를 편집하세요.
 *
 * 컴포넌트 구성:
 *   Navigation.tsx    - 상단 네비게이션 바
 *   Header.tsx        - 보고서 헤더 (제목, 총매출)
 *   Section1Strategy  - 전략 & Action Plan
 *   Section2Executive - Executive Summary
 *   Section3Channel   - 채널별 상세 분석
 *   Section4Product   - 상품·재고 분석
 *   Section5Store     - 매장 효율성
 *   CeoMessage.tsx    - CEO 메시지 & 푸터
 */
export default function Home() {
  return (
    <>
      <Navigation />

      <div className="wrap">
        <Header />

        {/* 1. 전략 & Action Plan */}
        <Section1Strategy />

        <hr className="divider" />

        {/* 2. Executive Summary */}
        <Section2Executive />

        <hr className="divider" />

        {/* 3. 채널별 상세 분석 */}
        <Section3Channel />

        <hr className="divider" />

        {/* 4. 상품·재고 분석 */}
        <Section4Product />

        <hr className="divider" />

        {/* 5. 매장 효율성 */}
        <Section5Store />

        {/* CEO 메시지 & 푸터 */}
        <CeoMessage />
      </div>

      <a href="#top" className="scroll-top">
        ↑
      </a>
    </>
  );
}
