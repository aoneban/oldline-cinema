import React from 'react';

interface FormProps {
  type: string;
  age: string;
}

interface ExampleComponentState {
  count: number;
}
export default class Header extends React.Component<
  FormProps,
  ExampleComponentState
> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }




  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 5,
    }));
  };




  render() {
    return (
      <>
        <h1>Hello {this.props.type}</h1>


        
        <p>You have {this.props.age} years</p>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Click</button>
        <button onClick={this.decrementCount}>Click</button>
      </>
    );
  }
}
