const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  currencies = [
    {
      id: 1,
      name: "dolar",
      ratio: 3.6,
      title: "Wartość w dolarach: ",
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.2,
      title: "Wartość w euro: ",
    },
    {
      id: 3,
      name: "frank",
      ratio: 4.41,
      title: "Wartość w frankach szwajcarskich: ",
    },
    {
      id: 4,
      name: "funt",
      ratio: 5.0,
      title: "Wartość w funtach brytyjskich: ",
    },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;

    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        cash={amount}
        ratio={currency.ratio}
        title={currency.title}
      />
    ));

    return (
      <div className="app">
        <h1>Exchange Counter</h1>
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>

        {calculators}

        {/* <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
        <Cash cash={amount} ratio={ratioEuro} title="Wartość w euro: " /> */}
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
