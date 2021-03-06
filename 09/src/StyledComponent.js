import React from 'react';
import styled, { css } from 'styled-components';
 
const sizes = {
  pc: 1024,
  tablet: 768
};

const media = Object.keys(sizes).reduce((acc, cur) => {
  acc[cur] = (...args) => css`
    @media (max-width: ${sizes[cur] / 16}em) {
      ${css(...args)};
    }
  `
  return acc;
}, {});

console.log(media);

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있다. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  ${media.pc`width: 768px;`};
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 사용도 가능하다. */
  &:hover {
    background: rgba(255, 255, 255, 0.9)
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여한다. */
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);
 
export default StyledComponent;