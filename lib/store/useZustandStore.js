/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : useZustandStore
 */

import create from 'zustand';

export const useScrollStore = create(set => ({
  currentScroll: 0,
  secondOffsetTop: 0,
  thirdOffsetTop: 0,
  fourthOffsetTop: 0,
  setCurrentScroll: payload => set({ currentScroll: payload }),
  setSecondOffsetTop: payload => set({ secondOffsetTop: payload }),
  setThirdOffsetTop: payload => set({ thirdOffsetTop: payload }),
  setFourthOffsetTop: payload => set({ fourthOffsetTop: payload }),
}));
