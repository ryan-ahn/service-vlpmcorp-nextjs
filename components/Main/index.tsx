/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : index
 */

import { useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import styled from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';
import FirstSection from './1-FirstSection';
import SecondSection from './2-SecondSection';
import ThirdSection from './3-ThirdSection';
import HeaderBlock from './HeaderBlock';
import FourthSection from './4-fourthSection';

export default function Main() {
  // RootState
  const { setCurrentScroll } = useScrollStore();
  // Ref
  const scrollRef = useRef<any>(null);

  const setScroll = throttle(() => {
    if (document !== undefined) {
      const scroll = document.getElementById('scroll');
      if (scroll) {
        setCurrentScroll(scroll.scrollTop);
      }
    }
  }, 100);

  useEffect(() => {
    const scroll = document.getElementById('scroll');
    if (scroll) {
      scroll.addEventListener('scroll', setScroll);
      return () => {
        scroll.removeEventListener('scroll', setScroll);
      };
    }
  });

  return (
    <Wrapper ref={scrollRef} id="scroll">
      <HeaderBlock />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 60px;
  overflow: scroll;
`;
