/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : 2-SecondSection
 */

import styled from 'styled-components';

export default function SecondSection() {
  return (
    <Wrapper>
      <ContentBlock>
        <p>패키지 가전, 같은 상품인데</p>
        <div>
          <p>매장마다 가격이 다르다고요?</p>
          <div />
        </div>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 100vh;
`;

const ContentBlock = styled.div`
  margin-top: 70px;
  & > p:nth-child(1) {
    margin-bottom: 15px;
    ${({ theme }) => theme.fontSet(36, 500, 50)};
    text-align: center;
    animation: text1 2s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
    animation: moveup 1.5s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
  }
  & > div:nth-child(2) {
    position: relative;
    ${({ theme }) => theme.flexSet('center', 'center', 'row')};
    width: 530px;
    height: 60px;
    animation: text1 2s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
    & > p:nth-child(1) {
      position: absolute;
      bottom: 0;
      ${({ theme }) => theme.fontSet(44, 700, 55)};
      text-align: center;
      z-index: 2;
      animation: moveup 1.5s 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
    }
    & > div:nth-child(2) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 165px;
      margin-bottom: 50px;
      border: 12px solid #92b6fb;
      animation: underline 1.5s 2s both;
      z-index: 1;
    }
  }
`;
