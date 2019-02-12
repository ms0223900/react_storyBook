import React from 'react';
import '../css/main.css';


const NotPure = () => {
  console.log('notPure Function render');
  return (
    <h2>Not Pure Function Components</h2>
  );
};

function PureFunc() {
  console.log('Pure Function render');
  return (
    <h2>Pure Function Components!</h2>
  );
}
const PureFuncCom = React.memo(PureFunc);

export default class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  _incre = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));

  }
  render() {
    console.log('render');
    const { counter } = this.state;
    return (
      <React.Fragment>
        <Pure2 />
        <NotPure />
        <PureFuncCom />
        <div>
          {counter} <button onClick={this._incre}>+1</button>
        </div>
      </React.Fragment>
      
    );
  }
}

class Pure2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('Pure2 render');
    return (
      <h1>A Pure Component here</h1>
    );
  }
}
