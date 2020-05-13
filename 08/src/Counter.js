import React, { useState, useReducer } from 'react';

/*
  reducer를 사용하면 컴포넌트 안에 위치했던 업데이트 로직을 
  컴포넌트 바깥으로 꺼낼 수 있다.
*/
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, { value: 0 }); // reducer 함수, 기본값(해당 reducer) | return [현재 상태, 액션을 발생시키는 함수]

  return (
    <>
      <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
      <button onClick={ () => dispatch({ type: 'INCREMENT' }) }>+1</button>
      <button onClick={ () => dispatch({ type: 'DECREMENT' }) }>+1</button>
    </>
  )
};

export default Counter;