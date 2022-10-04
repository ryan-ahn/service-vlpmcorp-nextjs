/**
 * Author : Ryan
 * Date : 2022-05-20
 * Desc : index
 */

import styled, { css, keyframes } from 'styled-components';
type Props = {
  text: string;
  description: string;
  inverted: boolean;
};

type Inverted = {
  inverted: boolean;
};

export default function Toast({ text, description, inverted }: Props) {
  return (
    <Wrapper inverted={inverted}>
      <Block inverted={inverted}>
        <CheckIcon />
        <div>
          <p>{text}</p>
          <p>{description}</p>
        </div>
      </Block>
    </Wrapper>
  );
}

const fadeInUp = keyframes`
    0% {
        line-height: 0;
        opacity: 0;
        visibility: hidden;
        transform: translate3d(0,40px,0)
    }
    25% {
        line-height: 24px;
        transform: translate3d(0, 0px,0);
        opacity: 1;
        visibility: visible;
    }
    75% {
        line-height: 24px;
        transform: translate3d(0, 0px,0);
        opacity: 1;
        visibility: visible;
    }
    100%{
        transform: translate3d(0, 60px,0);
        opacity: 0;
        visibility: hidden;
    }
`;

const Wrapper = styled.aside<Inverted>`
  position: fixed;
  left: 53px;
  bottom: 55px;
  z-index: 0;
  visibility: hidden;
  ${props =>
    props.inverted &&
    css`
      z-index: 3000;
      visibility: visible;
    `}
`;

const Block = styled.div<Inverted>`
  height: 60px;
  padding: 0 35px;
  border-radius: 8px;
  cursor: pointer;
  ${({ theme }) => theme.flexSet(undefined, 'center', 'row')};
  background: #2947a8;
  box-shadow: 6px 6px 10px rgba(156, 153, 153, 0.2);
  & > div {
    ${({ theme }) => theme.flexSet('center', 'flex-start', 'column')};
    & > p:nth-child(1) {
      color: white;
      ${({ theme }) => theme.fontSet(16, 500, 22)};
    }
    & > p:nth-child(2) {
      color: white;
      ${({ theme }) => theme.fontSet(14, 300, 22)};
    }
  }
  ${props =>
    props.inverted &&
    css`
      animation: ${fadeInUp} 2s both;
    `}
`;
const CheckIcon = styled.div`
  width: 19.5px;
  height: 23.31px;
  background-image: url('/static/icons/check.svg');
  background-size: 100% 100%;
  margin: 0 22.5px 0 0;
`;
