//@flow
import React, { Component } from 'react';
import './App.css';

// create-react-app my-app && cd my-app
// yarn add --dev flow-bin
// yarn run flow init
// "flow":"flow"
// add //@flow at the top of the file
// npm run flow

//directly entering props to Component



type Props = {
  message: ?string // means string or null
};

type State = {
  count: number  // foo is required.
}

type FuncProps = {
  someBool: boolean
}

const FuncComp = (props: FuncProps) => {
  return(<div>Me Function Component </div>)
};
FuncComp.defaultProps = {
  someBool: true
}

class SaySomething extends React.Component<Props, State> {
  
 //  static defaultProps = {
 //   message: "Hey i am a default message" //message is optional
 // };
  state = {
    count: 0
  }
  
  render() {
    return <div>{this.props.message}</div>;
  }
}

class App extends Component <{some:string}> {
  
  clickHandle = (event:SyntheticEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget)
    
  }
  
  render() {
    return (
      <div className="App">
        <SaySomething message={null}/>
        <FuncComp someBool/>
        <div onClick={this.clickHandle}> Click Me </div>
      </div>
    );
  }
}

export default App;
