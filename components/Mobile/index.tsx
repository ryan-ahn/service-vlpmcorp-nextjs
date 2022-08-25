/**
 * Author : Ryan
 * Date : 2022-08-25
 * Desc : index
 */

import { useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import styled from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';
import HeaderBlock from './HeaderBlock';
import FirstSection from './1-FirstSection';
import SecondSection from './2-SecondSection';
import ThirdSection from './3-ThirdSection';
import FourthSection from './4-FourthSection';
import FifthSection from './5-FifthSection';
import ContactSection from './6-ContactSection';
import FooterBlock from './FooterBlock';

export default function MobileMain() {
  // RootState
  const { currentScroll, setCurrentScroll } = useScrollStore();
  // Ref
  const scrollRef = useRef<any>(null);

  const setScroll = useCallback(
    throttle(() => {
      console.log('hi');
      if (window !== null) {
        const scroll = window.scrollY;
        if (scroll) {
          setCurrentScroll(scroll);
        }
      }
    }, 200),
    [],
  );

  useEffect(() => {
    if (window !== null) {
      window.addEventListener('scroll', setScroll);
      return () => {
        window?.removeEventListener('scroll', setScroll);
      };
    }
  }, [setCurrentScroll]);

  return (
    <Wrapper ref={scrollRef}>
      <HeaderBlock />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <ContactSection />
      <FooterBlock />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 60px;
`;
