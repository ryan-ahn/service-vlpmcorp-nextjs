/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : 3-ThirdSection
 */

import styled from 'styled-components';

export default function ThirdSection() {
  return (
    <Wrapper>
      <ContentBlock>
        <TitleBox>
          <p>
            <em>발품노노</em>
            {`에서\n한번에 견적 비교하세요!`}
          </p>
        </TitleBox>
        <GraphBox></GraphBox>
        <NoticeBox>
          <p>혼수 및 이사 준비로 낭비되는 시간과 비용을 줄여보세요.</p>
        </NoticeBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

const TitleBox = styled.div`
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(40, 500, 52)};
    white-space: pre-wrap;
    text-align: center;
    & > em {
      color: #4f90ff;
    }
  }
`;

const GraphBox = styled.div``;

const NoticeBox = styled.div`
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(20, 500, 30)};
  }
`;
