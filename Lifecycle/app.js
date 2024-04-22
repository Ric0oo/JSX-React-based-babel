class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("wywołać metodę constructor");
  }

  ComponentWillMount() {
    console.log("wywołać metodę ComponentWillMount");
  }

  ComponentDidMount() {
    console.log("wywołać metodę ComponentDidMount");
    this.setState({
      number: 1,
    });
  }

  componentDidUpdate() {
    console.log("wywołać metodę componentDidUpdate");
  }

  render() {
    console.log("wywołać metodę render");
    return (
      <div>
        <p>lifecycle</p>
        <Child />
      </div>
    );
  }
}
class Child extends React.Component {
  ComponentDidMount() {
    console.log("wywołana ComponentDidMount w komponencie Child");
    // this.setState({
    //   number: 1,
    // });
  }
  render() {
    return <h1>dziecko</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
