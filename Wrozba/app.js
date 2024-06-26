class App extends React.Component {
  state = {
    omen: [
      { text: "Wkrótce spotkasz kogoś, kto odmieni Twoje życie." },
      { text: "Twoje wysiłki niedługo zostaną nagrodzone " },
      { text: "Cierpliwość jest kluczem do sukcesu w najbliższej sytuacji." },
      {
        text: "Przyjaźń, która niegdyś wydawała się zakończona, powraca do Twojego życia.",
      },
      {
        text: "Wkrótce odkryjesz nowe pasje lub talenty, które przyniosą Ci wiele radości.",
      },
      {
        text: "Twoje marzenia staną się rzeczywistością wkrótce, trzymaj się swoich celów.",
      },
      {
        text: "Nadszedł czas, aby podjąć ryzyko i postawić wszystko na jedną kartę.",
      },
      { text: "Twoja determinacja przyniesie Ci sukces w trudnych czasach." },
      {
        text: "Bądź otwarty na nowe możliwości, bo szczęście czai się w nieoczekiwanych miejscach.",
      },
      {
        text: "Twoja siła wewnętrzna pomoże Ci przezwyciężyć wszelkie przeszkody.",
      },
      {
        text: "Wkrótce zrozumiesz, dlaczego pewne rzeczy działy się w Twoim życiu.",
      },
      {
        text: "Pamiętaj, że nawet najmniejsze gesty dobroci mogą mieć wielkie znaczenie dla innych.",
      },
      {
        text: "Uważaj na fałszywych przyjaciół, ale miej zaufanie do tych, którzy są z Tobą w najtrudniejszych chwilach.",
      },
      { text: "Twoja wytrwałość wkrótce zostanie nagrodzona. " },
      {
        text: "Czas na odrobinę szaleństwa - zrób coś, czego zawsze chciałeś, ale bałeś się spróbować. ",
      },
      {
        text: "Twoje zdolności komunikacyjne przyniosą Ci sukces w biznesie lub w relacjach osobistych. ",
      },
      {
        text: "Powinieneś przemyśleć swoje cele i dostosować je do zmieniających się okoliczności.",
      },
      {
        text: "Wkrótce spotkasz kogoś, kto będzie miał istotny wpływ na Twoje życie zawodowe lub osobiste.",
      },
      {
        text: "Bądź gotowy na zmiany - czasami są one nieuniknione, ale prowadzą do rozwoju.",
      },
      {
        text: "Twoje wysiłki włożone w rozwój osobisty wkrótce przyniosą owoce.",
      },
    ],
    currentOmen: null,
  };

  handleUserSee = () => {
    const randomIndex = Math.floor(Math.random() * this.state.omen.length);
    const randomOmen = this.state.omen[randomIndex];
    this.setState({ currentOmen: randomOmen });
  };

  handleUserAdd = () => {
    const newOmen = { text: this.state.input };
    this.setState({ omen: [...this.state.omen, newOmen] });
  };

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleUserSee}>Zobacz wróżbę</button>
        <br />
        <input
          input={this.setState.omen}
          onChange={this.handleInputChange}
          value={this.state.input}
        ></input>
        <button onClick={this.handleUserAdd}>Dodaj Wróżbę</button>
        <br />
        {this.state.currentOmen && (
          <h1>
            <strong>{this.state.currentOmen.text}</strong>
          </h1>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
