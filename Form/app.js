class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLiked: true,
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  handleIsLikedChange = (event) => {
    this.setState({
      isLiked: event.target.checked,
    });
  };

  render() {
    return (
      <div className="form">
        <label>
          Podaj miasto:
          <input
            value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o nim:
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange}
          ></textarea>
        </label>
        <label>
          Czy lubisz to miasto ?
          <input
            type="checkbox"
            checked={this.state.isLiked}
            onChange={this.handleIsLikedChange}
          />
        </label>
        <br />
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
