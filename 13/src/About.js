import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 프리픽스인 ?를 생략 시 사용
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>리액트 라우터소개</h1>
      <p>라우터에요!</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};
 
export default About;