import React, { useState, useEffect, useReducer } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  //useEffect 실행: 마운트, 업데이트
  /*
  useEffect(() => {
    console.log(
      `렌더링이 완료되었습니다.
      이름: ${name}
      닉네임: ${nickname}`
    );
  // }, []); // 두 번째 파라미터에 빈 배열을 추가하면 마운트 시에만 실행.
  }, [name]); // 두 번째 파라미터에 특정 객체를 추가하면 해당 값이 수정될 때 실행.
  */

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      // 렌더링 될 때 실행 (뒷정리 함수)
      // 업데이트 직전의 값을 출력
      console.log('cleanup');
      console.log(name);
    }
  }, []); // 두 번째 파라미터에 빈 배열을 추가하면 마운트 시에만 실행.

  useReducer

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </>
  );
};

export default Info;