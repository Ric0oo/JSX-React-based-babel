class App extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    // console.log("Aplication is mounted");
  }

  componentDidUpdate() {
    // console.log("Aplication is updated");
  }

  render() {
    // console.log("Aplication is rendered");
    return (
      <div>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          Przełącz
        </button>
        <Child status={this.state.status} />
        {this.state.status && <Child2 />}
      </div>
    );
  }
}

class Child extends React.Component {
  componentDidMount() {
    // console.log("Child is mounted");
  }

  componentDidUpdate() {
    // console.log("Child is updated");
  }
  render() {
    // console.log("Child is rendered");
    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log("Child2 is mounted");
  }

  componentDidUpdate() {
    console.log("Child2 is updated");
  }

  componentWillUnmount() {
    console.log("Child2 is unmounted");
  }

  render() {
    console.log("Child2 is rendered");
    return <div>Komponent Child2 Zamontowany</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
