import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '눈강아지' },
    { id: 3, text: '눈고양이' },
    { id: 4, text: '눈토끼' }
  ]);
  const [text, setText] = useState('');
  const [id, setId] = useState(5);

  const onChange = e => setText(e.target.value);
  const onClick = e => {
    setNames([
      ...names,
      { id, text}
    ]);
    setId(id + 1);
    setText('');
  };
  const onRemove = id => {
    setNames(
      names.filter(name => name.id !== id)
    );
    setId(id - 1);
  }
 
  const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
  return (
    <>
      <input value={text} onChange={onChange} />
      <button onClick={onClick}>추가하기</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;