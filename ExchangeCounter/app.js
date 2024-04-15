const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "gas",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  static defaultProps = {
    currencies: [
      {
        id: 1,
        name: "zloty",
        ratio: 1.0,
        title: "Wartość w złotych: ",
      },
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
    ],
    prices: {
      gas: 6.73,
      electricity: 1,
      oranges: 4.5,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSelect = (event) => {
    this.setState({
      product: event.target.value,
      amount: "",
    });
  };

  insertSuffix(select) {
    if (select === "electricity") {
      return <em>kWh</em>;
    } else if (select === "gas") {
      return <em>litrów</em>;
    } else if (select === "oranges") {
      return <em>kilogramów</em>;
    } else return null;
  }
  selectPrice(select) {
    const price = this.props.prices[select];
    return price;
  }

  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);

    const calculators = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        cash={amount}
        price={price}
        ratio={currency.ratio}
        title={currency.title}
      />
    ));

    return (
      <div className="app">
        <h1>Exchange Counter</h1>
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">Prąd</option>
            <option value="gas">Benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
          <br />
        </label>
        <br />
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        <br />

        {calculators}

        {/* <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
        <Cash cash={amount} ratio={ratioEuro} title="Wartość w euro: " /> */}
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
