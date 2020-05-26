import React from 'react';

const data = {
  wooluck: {
    name: '고우혁',
    description: '?'
  },
  velopert: {
    name: '김민준',
    description: '글쓴이'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        { username }({ profile.name })
      </h3>
      <p>{ profile.description }</p>
    </div>
  );
};

export default Profile;
