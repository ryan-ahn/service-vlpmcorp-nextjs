/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : 1-FirstSection
 */

import { useCallback } from 'react';
import styled from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';
import { useScrollTo } from '@lib/hooks/useScroll';

export default function FirstSection() {
  // RootState
  const { contactOffsetTop } = useScrollStore();

  const onClickScrollToUp = useCallback(() => {
    useScrollTo('default', 0, contactOffsetTop, 'smooth');
  }, [contactOffsetTop]);

  return (
    <Wrapper>
      <ContentBlock>
        <DescriptionBox>
          <p>{`발품없는\n패키지 가전\n전국딜러 견적비교`}</p>
          <StoreBox>
            <AppStoreButton onClick={onClickScrollToUp}>
              <div />
              <p>App Store</p>
            </AppStoreButton>
            <PlayStoreButton onClick={onClickScrollToUp}>
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
  background-color: black;
`;

const ContentBlock = styled.div`
  margin: 250px 0 100px 0;
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

const DescriptionBox = styled.div`
  & > p {
    margin-bottom: 30px;
    color: white;
    ${({ theme }) => theme.fontSet(35, 700, 45)};
    text-align: center;
    white-space: pre-wrap;
  }
  animation: moveup 1.5s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
`;

const StoreBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const CommonButton = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 48%;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  animation: fadein 1s 1.5s both;
  cursor: pointer;
  & > p {
    margin-left: 10px;
    color: #b3b3b3;
    ${({ theme }) => theme.fontSet(13, 300, 20)};
  }
`;

const AppStoreButton = styled(CommonButton.withComponent('div'))`
  margin-right: 10px;
  & > div {
    width: 15px;
    height: 15px;
    ${({ theme }) => theme.backgroundSet('/static/icons/app-store.svg', 'contain')};
  }
`;

const PlayStoreButton = styled(CommonButton.withComponent('div'))`
  & > div {
    width: 15px;
    height: 13px;
    ${({ theme }) => theme.backgroundSet('/static/icons/play-store.svg', 'contain')};
  }
`;

const SimulatorImageBox = styled.img`
  width: 240px;
  animation: fadein 2s 2s both;
`;
