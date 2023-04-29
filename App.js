import { render } from "@testing-library/react";
import React, { Component } from "react";

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { value: 'React' };
//   //   this.handleChange = this.handleChange.bind(this);
//   // }

//   // handleChange(e) {
//   //   this.setState({ value: e.target.value });
//   // }


//   // render() {
//   //   return (
//   //     <div>
//   //       <label className="label">Enter text here</label>
//   //       <input className="input is-medium" type='text' id='input' value={this.state.value} onChange={this.handleChange} />
//   //       <p className="input-value">The value of the input is: <span className="highlight">{this.state.value}</span></p>
//   //     </div>
//   //   );
//   // }

// }
// export default App  
ComponentDidCatch(errorString, errorInfo){
  this.setState({
    error: errorString
  })
  ErrorLoggingTool(errorInfo)
}
render(){
  if (this.state.error) return <ShowErrorMessage error={this.state.error} />
}