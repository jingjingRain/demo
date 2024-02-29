
import React, { Component, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
const theme = createTheme({
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Click me
      </Button>
    </div>
  );
};

// 函数组件 CompA 
const CompA = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>CompA</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <CompB count={count} />
    </div>
  );
};

// function CompB(props: any) {
//   return <div>
//     <h2>CompB</h2>
//     <p>Count from CompA: {props.count}</p>
//   </div>
// }
// 类组件 CompB 
interface IProps {
  count: number
}
class CompB extends Component<IProps, any> {
  render() {
    return <h1>hello world{this.props.count}</h1>
  }
}
// class CompB extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>CompB</h2>
//         <p>Count from CompA: {this.props.count}</p>
//       </div>
//     );
//   }
// }
export default CompA

// export default Demo;
