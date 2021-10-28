import React from 'react';
import Loadable from 'react-loadable';

const SubBanner = Loadable({
  loader: () => import('../components/Common/SubBanner'),
  loading: () => <div>loading...</div>
});

const Blog = () => {
  return (
    <>
      <SubBanner tittle={'Blog'} />
    </>
  );
}

export default Blog;