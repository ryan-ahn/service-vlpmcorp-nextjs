/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : 6-ContactSection
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';
import { MOBILE_REGEX, validateCount } from '@lib/utils/verification';
import Toast from '@components/Common/Toast';

type TButtonBox = {
  attrActive: boolean;
};

export default function ContactSection() {
  // RootState
  const { setContactOffsetTop } = useScrollStore();
  // State
  const [currentUser, setCurrentUser] = useState(0);
  const [sendSMS, setSendSMS] = useState(false);
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
    await axios.post('https://api.vlpmcorp.com/landing', { contact: value }).then((res: any) => {
      setSendSMS(true);
      onClickGetNumber();
    });
  }, [value]);

  const onClickGetNumber = useCallback(async () => {
    await axios
      .get('https://api.vlpmcorp.com/landing')
      .then(res => setCurrentUser(2000 + res.data.count));
  }, []);

  useEffect(() => {
    if (contactScrollRef && contactScrollRef.current) {
      setContactOffsetTop(contactScrollRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    if (sendSMS) {
      setTimeout(() => setSendSMS(false), 2000);
    }
  }, [sendSMS]);

  useEffect(() => {
    onClickGetNumber();
  }, []);

  return (
    <Wrapper ref={contactScrollRef}>
      <ContentBlock>
        <TitleBox>
          <p>앱 오픈 알림받기 🔔</p>
          <p>
            현재 <span>{validateCount(currentUser)}</span>분이 앱오픈 알림을 신청했어요!
          </p>
        </TitleBox>
        <InputBox>
          <TextInput
            placeholder="연락처를 입력해주세요!"
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
      <Toast text="알람이 신청되었습니다." description="1등으로 알려드릴게요" inverted={sendSMS} />
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
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  margin-bottom: 30px;
  & > p:nth-child(1) {
    ${({ theme }) => theme.fontSet(35, 700, 45)};
  }
  & > p:nth-child(2) {
    ${({ theme }) => theme.fontSet(30, 400, 50)};
    margin-top: 10px;
    & > span {
      color: #557fe6;
      ${({ theme }) => theme.fontSet(30, 700, 50)};
    }
  }
`;

const InputBox = styled.div`
  position: relative;
`;

const TextInput = styled.input`
  width: 630px;
  height: 90px;
  margin-bottom: 15px;
  padding: 0px 35px;
  border: 3px solid #557fe6;
  border-radius: 30px;
  ${({ theme }) => theme.fontSet(30, 500, 40)};
  &::placeholder {
    color: #d7d7d7;
  }
`;

const ButtonBox = styled.button<TButtonBox>`
  position: absolute;
  top: 10px;
  right: 10px;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 132px;
  height: 70px;
  border-radius: 20px;
  background-color: #eee;
  & > p {
    color: #777;
    ${({ theme }) => theme.fontSet(30, 500, 35)};
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

const StoreBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
  margin-top: 20px;
`;

const CommonButton = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 200px;
  height: 60px;
  border-radius: 10px;
  background-color: #f2f2f2;
  animation: fadein 1s 1.5s both;
  & > p {
    margin-left: 10px;
    color: #b3b3b3;
    ${({ theme }) => theme.fontSet(18, 300, 25)};
  }
`;

const AppStoreButton = styled(CommonButton.withComponent('div'))`
  margin-right: 20px;
  & > div {
    width: 20px;
    height: 20px;
    ${({ theme }) => theme.backgroundSet('/static/icons/app-store.svg', 'contain')};
  }
`;

const PlayStoreButton = styled(CommonButton.withComponent('div'))`
  & > div {
    width: 20px;
    height: 18px;
    ${({ theme }) => theme.backgroundSet('/static/icons/play-store.svg', 'contain')};
  }
`;
