import { Component } from 'react';
import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { values } from 'mobx';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    count: 0,
    incrementCount: () => {
      store.count++;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
const NumberHit = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <p>First Display: {store.count}</p>);
};

const NumberShow = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <p>Second Display: {store.count}</p>);
};

const Buttons = () => {
  const store = React.useContext(StoreContext);
  return <button onClick={store.incrementCount}>Hit here!</button>;
};
export default function Increment() {
  return (
    <StoreProvider>
      <Buttons />
      <NumberHit />
      <NumberShow />
    </StoreProvider>
  );
}

// class Increment extends Component {
//     state = {
//         count:0,
//       };
//     increaseValue(){
//         this.setState({count:this.state.count+1})};
//     render() {
//       return (
//         <div>
//           <label htmlFor="number">Click here to increment count: </label>
//           <button onClick={()=>this.increaseValue()}>Hit me!</button>
//           <p className="number">You have clicked the button <span> {this.state.count}</span> times.</p>
//         </div>
//       );
//     }
// }

//   export default Increment;
