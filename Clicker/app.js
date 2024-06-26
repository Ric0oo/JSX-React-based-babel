class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
  };

  handleClick = () => {
    this.setState({
      number1: this.state.number1 + 1,
    });
  };

  handleClick2 = () => {
    this.setState((state) => {
      return {
        number2: state.number2 + 5,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Podbij o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick2}>Podbij o 5</button>
        <h1>{this.state.number2}</h1>
      </div>
    );
  }
}
ReactDOM.render(<Clicker />, document.getElementById("root"));
