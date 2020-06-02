import React from 'react';
import TodoContainer from './containers/TodoContainer';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
}

export default App;
