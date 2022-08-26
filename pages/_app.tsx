/**
 * Author : Ryan
 * Date : 2022-08-20
 * Desc : _app
 */

import App, { AppContext, AppProps } from 'next/app';
import { GlobalStyle } from '@styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  //pathName
  const pathName = appContext.ctx.pathname;
  appProps.pageProps.pathName = pathName;

  //userAgent
  const userAgent = appContext.ctx.req
    ? appContext.ctx.req?.headers['user-agent']
    : navigator.userAgent;

  //Check Device
  const mobile = userAgent?.indexOf('Mobi');
  appProps.pageProps.userDevice = userAgent;

  return { ...appProps };
};

export default MyApp;
