import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World!",
    };
  }
  componentDidMount() {
    console.log("É EXECUTADO QUANDO O USUARIO ACESSA PELA PRIMEIRA VEZ");
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
