import React from "react";
import "./App.css";
import Counter from './Counter';
import Info from "./Info";
import Average from "./Average";

// const App = () => <Counter />;
const App = () => <Info />;
// const App = () => <Average />;
// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <>
//       <button
//         onClick={() => setVisible(!visible)}
//       > {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </>
//   )
// };

export default App;
