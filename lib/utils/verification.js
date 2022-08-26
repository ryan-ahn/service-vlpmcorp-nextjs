/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : verification
 */

// 휴대폰 (011 016 017 018 019는 중간이 3~4자리)
export const MOBILE_REGEX = /^(?:(010-?\d{4})|(01[1|6|7|8|9]-?\d{3,4}))-?\d{4}$/;

// 가격에 원을 붙이고 천단위 쉼표 찍기 + 0원 - 로 표기
export const validatePrice = price => {
  if (price === 0) {
    return '-';
  } else {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '만원';
  }
};
