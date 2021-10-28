import React from 'react';
import Loadable from 'react-loadable';

const SubBanner = Loadable({
  loader: () => import('../components/Common/SubBanner'),
  loading: () => <div>loading...</div>
});

const About = () => {
  return (
    <>
      <SubBanner tittle={'About Us'} />
    </>
  );
}

export default About;