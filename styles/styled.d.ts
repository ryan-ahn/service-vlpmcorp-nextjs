/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : style Type Set
 */

import 'styled-components';
import { minMedia, maxMedia } from './theme';
import { backgroundSet, flexSet, fontSet } from './mixin';
import { colors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    medias: {
      mobile: any;
      pad: any;
      desktop: any;
    };
    flexSet: typeof flexSet;
    fontSet: typeof fontSet;
    minMedia: typeof minMedia;
    maxMedia: typeof maxMedia;
    backgroundSet: typeof backgroundSet;
  }
}
