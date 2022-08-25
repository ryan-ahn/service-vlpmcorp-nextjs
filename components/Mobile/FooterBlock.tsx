/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : FooterBlock
 */

import styled from 'styled-components';

export default function FooterBlock() {
  return (
    <Wrapper>
      <TitleBox>
        <p>Partners</p>
      </TitleBox>
      <PartnersIconBox>
        <div />
        <div />
        <div />
        <div />
      </PartnersIconBox>
      <TitleBox>
        <p>VLPM Corporation</p>
      </TitleBox>
      <CorpInfoBox>
        <p>dev@vlpm.io</p>
        <p>5F, 79gil 6 Teheran-ro Gangnam-gu Seoul, South Korea</p>
        <div />
        <p>Allrights reserved 2022 vlpm corp</p>
      </CorpInfoBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center', 'column')};
  width: 100%;
  padding: 30px;
  background-color: black;
`;

const TitleBox = styled.div`
  margin-bottom: 25px;
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(20, 900, 30)};
  }
`;

const PartnersIconBox = styled.div`
  margin-bottom: 70px;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  flex-wrap: wrap;
  & > div:nth-child(1) {
    width: 80px;
    height: 15px;
    margin-right: 20px;
    margin-bottom: 10px;
    ${({ theme }) => theme.backgroundSet('/static/icons/samsung.png', 'contain')};
  }
  & > div:nth-child(2) {
    width: 80px;
    height: 20px;
    margin-bottom: 10px;
    ${({ theme }) => theme.backgroundSet('/static/icons/lg.png', 'contain')};
  }
  & > div:nth-child(3) {
    width: 80px;
    height: 30px;
    margin-right: 20px;
    ${({ theme }) => theme.backgroundSet('/static/icons/hi.png', 'contain')};
  }
  & > div:nth-child(4) {
    width: 80px;
    height: 28px;
    ${({ theme }) => theme.backgroundSet('/static/icons/elec.png', 'contain')};
  }
`;

const CorpInfoBox = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(15, 500, 30)};
    text-align: center;
    opacity: 0.6;
  }
  & > div {
    width: 200px;
    height: 25px;
    margin: 15px;
    ${({ theme }) => theme.backgroundSet('/static/icons/aws.png', 'contain')};
  }
`;
