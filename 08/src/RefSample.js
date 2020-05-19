import React, { useRef, Component } from 'react';

/* 클래스형
class RefSample extends Component {
  id = 1;
  setId = n => {
    this.id = n;
  }
  printId = () => {
    console.log(this.id);
  }

  render() {
    return (
      <>
        refSample
      </>
    )
  };
}
*/

const RefSample = () => {
  const id = useRef(1);
  const setId = n => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }

  return (
    <>
      refsample
    </>
  );
};

export default RefSample;
