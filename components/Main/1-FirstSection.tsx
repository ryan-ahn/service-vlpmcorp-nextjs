/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : 1-FirstSection
 */

import styled from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';

export default function FirstSection() {
  return (
    <Wrapper>
      <ContentBlock>
        <DescriptionBox>
          <p>{`발품없는\n패키지 가전\n전국딜러 견적비교`}</p>
          <StoreBox>
            <AppStoreButton>
              <div />
              <p>App Store</p>
            </AppStoreButton>
            <PlayStoreButton>
              <div />
              <p>Google Store</p>
            </PlayStoreButton>
          </StoreBox>
        </DescriptionBox>
        <SimulatorImageBox src="/static/images/simulator.png" />
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: calc(100vh - 60px);
  background-color: black;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const DescriptionBox = styled.div`
  margin-top: 100px;
  margin-right: 120px;
  & > p {
    margin-bottom: 50px;
    color: white;
    ${({ theme }) => theme.fontSet(45, 700, 57)};
    white-space: pre-wrap;
  }
  animation: moveup 1.5s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
`;

const StoreBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const CommonButton = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 200px;
  height: 60px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  animation: fadein 1s 1.5s both;
  cursor: pointer;
  & > p {
    margin-left: 10px;
    color: #b3b3b3;
    ${({ theme }) => theme.fontSet(18, 300, 25)};
  }
`;

const AppStoreButton = styled(CommonButton.withComponent('div'))`
  margin-right: 20px;
  & > div {
    width: 20px;
    height: 20px;
    ${({ theme }) => theme.backgroundSet('/static/icons/app-store.svg', 'contain')};
  }
`;

const PlayStoreButton = styled(CommonButton.withComponent('div'))`
  & > div {
    width: 20px;
    height: 18px;
    ${({ theme }) => theme.backgroundSet('/static/icons/play-store.svg', 'contain')};
  }
`;

const SimulatorImageBox = styled.img`
  width: 350px;
  animation: fadein 5s 2s both;
`;
