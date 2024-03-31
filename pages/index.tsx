/**
 * Author : Ryan
 * Date : 2022-03-03
 * Desc : index page
 */

import { useEffect, useState } from 'react';
import { META_COMMON } from '@constants/meta';
import SEO from '@components/SEO';
import Desktop from '@components/Desktop';
import Mobile from '@components/Mobile';

export default function index() {
  const [device, setDevice] = useState('mobile');
  const meta = {
    page_title: META_COMMON.site_name,
    page_description: META_COMMON.site_description,
    page_cannonical_link: META_COMMON.site_url,
    page_image: META_COMMON.site_image,
  };

  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth < 1024) {
        setDevice('mobile');
      } else {
        setDevice('desktop');
      }
    }
  }, [device]);

  if (device === 'mobile') {
    return (
      <SEO meta={meta}>
        <Mobile />
      </SEO>
    );
  } else {
    return (
      <SEO meta={meta}>
        <Desktop />
      </SEO>
    );
  }
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
