/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : FooterBlock
 */

import styled from 'styled-components';

export default function FooterBlock() {
  const onClickRouteToService = () => {
    if (window) {
      window.open('/service');
    }
  };

  const onClickRouteToPolicy = () => {
    if (window) {
      window.open('/policy');
    }
  };

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
      <PolicyBox>
        <p onClick={onClickRouteToService}>서비스 이용약관</p>
        <p onClick={onClickRouteToPolicy}>개인정보 수집 및 이용약관</p>
      </PolicyBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center', 'column')};
  width: 100%;
  padding: 50px;
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
  & > div:nth-child(1) {
    width: 200px;
    height: 20px;
    ${({ theme }) => theme.backgroundSet('/static/icons/samsung.png', 'contain')};
  }
  & > div:nth-child(2) {
    width: 200px;
    height: 28px;
    ${({ theme }) => theme.backgroundSet('/static/icons/lg.png', 'contain')};
  }
  & > div:nth-child(3) {
    width: 200px;
    height: 35px;
    ${({ theme }) => theme.backgroundSet('/static/icons/hi.png', 'contain')};
  }
  & > div:nth-child(4) {
    width: 200px;
    height: 25px;
    ${({ theme }) => theme.backgroundSet('/static/icons/elec.png', 'contain')};
  }
`;

const CorpInfoBox = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(20, 500, 35)};
    opacity: 0.6;
  }
  & > div {
    width: 200px;
    height: 25px;
    margin: 15px;
    ${({ theme }) => theme.backgroundSet('/static/icons/aws.png', 'contain')};
  }
`;

const PolicyBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'column')};
  width: 400px;
  padding: 30px 60px;
  & > p {
    color: white;
    margin-bottom: 30px;
    ${({ theme }) => theme.fontSet(14, 400, 15)};
    opacity: 0.6;
  }
`;
