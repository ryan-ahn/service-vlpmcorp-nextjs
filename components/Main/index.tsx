/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : index
 */

import styled from 'styled-components';
import FirstSection from './1-FirstSection';
import SecondSection from './2-SecondSection';
import ThirdSection from './3-ThirdSection';
import HeaderBlock from './HeaderBlock';

export default function Main() {
  return (
    <Wrapper>
      <HeaderBlock />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 60px;
  overflow: scroll;
`;
