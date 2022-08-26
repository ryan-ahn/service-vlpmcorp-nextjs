/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : 6-ContactSection
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';
import { MOBILE_REGEX } from '@lib/utils/verification';
import axios from 'axios';

type TButtonBox = {
  attrActive: boolean;
};

export default function ContactSection() {
  // RootState
  const { setContactOffsetTop } = useScrollStore();
  // State
  const [value, setValue] = useState<string>('');
  const [verificationValue, setVerificationValue] = useState(false);
  // Ref
  const contactScrollRef = useRef<any>(null);

  const onChangeValue = useCallback(
    (value: string) => {
      setValue(value);
      if (MOBILE_REGEX.test(value)) {
        setVerificationValue(true);
      } else {
        setVerificationValue(false);
      }
    },
    [value, verificationValue],
  );

  const onClickSendNumber = useCallback(async () => {
    await axios
      .post('https://api.vlpmcorp.com/landing', { contact: '01097796777' })
      .then(res => console.log(res));
  }, [value]);

  const onClickGetNumber = useCallback(async () => {
    await axios.get('https://api.vlpmcorp.com/landing').then(res => console.log(res));
  }, []);

  useEffect(() => {
    if (contactScrollRef && contactScrollRef.current) {
      setContactOffsetTop(contactScrollRef.current.offsetTop);
    }
  }, []);

  return (
    <Wrapper ref={contactScrollRef}>
      <ContentBlock>
        <TitleBox onClick={onClickGetNumber}>
          <p>앱 오픈 알림받기 🔔</p>
        </TitleBox>
        <InputBox>
          <TextInput
            placeholder="연락처 입력"
            maxLength={11}
            type="number"
            onChange={e => onChangeValue(e.target.value)}
          />
          <ButtonBox
            disabled={!verificationValue}
            attrActive={verificationValue}
            onClick={onClickSendNumber}
          >
            <p>전송</p>
          </ButtonBox>
        </InputBox>
        <DescriptionBox>
          <p>앱이 오픈하면 1등으로 연락 드릴게요!</p>
        </DescriptionBox>
        <StoreBox>
          <AppStoreButton>
            <div />
            <p>App Store</p>
          </AppStoreButton>
          <PlayStoreButton>
            <div />
            <p>Google Store</p>
          </PlayStoreButton>
        </StoreBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 100vh;
  background-color: #fcfcfc;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

const TitleBox = styled.div`
  margin-bottom: 30px;
  & > p {
    ${({ theme }) => theme.fontSet(25, 700, 30)};
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  padding: 0 25px;
`;

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 0px 15px;
  border: 3px solid #557fe6;
  border-radius: 30px;
  ${({ theme }) => theme.fontSet(13, 500, 30)};
  &::placeholder {
    color: #d7d7d7;
  }
`;

const ButtonBox = styled.button<TButtonBox>`
  position: absolute;
  top: 5px;
  right: 31px;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 59px;
  height: 30px;
  border-radius: 20px;
  background-color: #eee;
  & > p {
    color: #777;
    ${({ theme }) => theme.fontSet(13, 400, 25)};
  }
  ${props =>
    props.attrActive &&
    css`
      background-color: #557fe6;
      cursor: pointer;
      & > p {
        color: white;
      }
    `}
`;

const DescriptionBox = styled.div`
  margin-bottom: 20px;
  & > p {
    ${({ theme }) => theme.fontSet(13, 300, 30)};
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;

const StoreBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const CommonButton = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: #f2f2f2;
  animation: fadein 1s 1.5s both;
  & > p {
    margin-left: 5px;
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
