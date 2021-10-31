import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { theme } from './theme';
export const StylingConstants = {
  maxWidth: 445,
  media: {
    mobile: 375,
    xs: 414,
    sm: 576,
    md: 768,
    lg: 1068,
    xl: 1250,
  },
};

export const DarkTheme = {
  background: theme.colors.black,
  boxBackground: theme.secondaryColors.lightGrey30,
  transparentBoxBackground: theme.secondaryColors.lightGrey40,
  pageBackground: theme.secondaryColors.lightGrey30,
  phoneMenuBackground: theme.secondaryColors.darkTransparent10,
  announcementBoxBackground: theme.secondaryColors.lightGreyTransparent,
};

export const LightTheme = {
  background: theme.colors.navy,
  boxBackground: theme.colors.black,
  transparentBoxBackground: theme.colors.spaceBlack,
  pageBackground: theme.colors.black,
  phoneMenuBackground: theme.secondaryColors.lightGrey50,
  announcementBoxBackground: theme.colors.footerTransparent,
};

export const GlobalStyle = createGlobalStyle`
${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Raleway' ;
  }
  *:focus {
    outline: none;
  }

`;
