/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : index page
 */

import { META_COMMON } from '@containers/meta';
import SEO from '@components/SEO';
import Main from '@components/Main';

export default function index() {
  const meta = {
    page_title: META_COMMON.site_name,
    page_description: META_COMMON.site_description,
    page_cannonical_link: META_COMMON.site_url,
    page_image: META_COMMON.site_image,
  };

  return (
    <SEO meta={meta}>
      <Main />
    </SEO>
  );
}

export const getServerSideProps = async (context: any) => {
  const location = context.resolvedUrl;
  if (context.query.tab) {
    return {
      props: {
        tab: context.query.tab,
        location: location,
      },
    };
  } else {
    return {
      props: {
        location: location,
      },
    };
  }
};
