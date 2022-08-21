/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : index
 */

import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FirstSection from './1-FirstSection';
import SecondSection from './2-SecondSection';
import ThirdSection from './3-ThirdSection';
import HeaderBlock from './HeaderBlock';

export default function Main() {
  // Ref
  const scrollRef = useRef<any>(null);
  const firstSectionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef !== null && scrollRef.current !== null) {
      console.log(scrollRef.current.scrollTop);
    }
  }, []);

  return (
    <Wrapper ref={scrollRef}>
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
