
import * as React from 'react';
import './App.css';
//npx install-peerdeps --dev eslint-config-airbnb
//npm install babel-eslint --save-dev
//configure .eslintrc.json
//npm install prettier-eslint --save-dev
//npm install flow-bin babel-preset-flow --save-dev
//https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213


//idonExiest
//str={'techsith'}
//add parent div
//num?: number
//directly using Props as argument inline
//proptypes didnt have way to check state. 
//add TestState message state
//use inline state
//static default
//becase of str deaflt you dont need in type,  whatever is the type of defalut is the type
//add function comp
//add defalt val

//events
//if you add a ref and dont define it it will give erro
//childern 

type FuncProps = {
    str: string, 
    children?: React.Element<any>
  };
const FuncComp = (props:FuncProps) => {
 return (<h1>props.str</h1>)
}
FuncComp.defaultProps = {
    str: 'techsith'
  };


type TestProps = {
    num?: number, 
    str: string, 
    ary: Array<number>
  };

type TestState = {
    message:string
};

class Test extends React.Component<TestProps, TestState > {
    state = {
      message: 'hi'
    }
    static defaultProps = {
        str: 'techsith'
      };

      onClick = (e:SyntheticEvent<HTMLButtonElement>) => {
          console.log(e.currentTarget);

      }
      h1:?HTMLHeadingElement;

    render() {
    return(<div>
        <h1>{this.props.str}</h1>
        <h1>{this.props.num}</h1>
        <h1 ref={h1 => (this.h1 = h1)} >State:{this.state.message}</h1>
        <button onClick={this.onClick} >Click Me</button>
      </div>)
    }
  }

class App extends React.Component<{}> {

  render() {
    return (
      <div className="App">
        <Test 
        ary={[1,2,3]}
        />
        <FuncComp><div>test</div></FuncComp>
       
      </div>
    );
  }
}

export default App;
