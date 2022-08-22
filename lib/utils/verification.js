/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : verification
 */

// 휴대폰 (011 016 017 018 019는 중간이 3~4자리)
export const MOBILE_REGEX = /^(?:(010-?\d{4})|(01[1|6|7|8|9]-?\d{3,4}))-?\d{4}$/;
