const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={() => props.delete(props.name)}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      {
        id: 1,
        name: "Marta W.",
      },
      {
        id: 2,
        name: "Stasia P.",
      },
      {
        id: 3,
        name: "Karol B.",
      },
      {
        id: 4,
        name: "Arek T.",
      },
      {
        id: 5,
        name: "Anna S.",
      },
    ],
  };

  handleDelete = (name) => {
    let people = this.state.people.slice();
    people = people.filter((person) => name !== person.name);
    this.setState({ people });
  };

  render() {
    const people = this.state.people.map((person) => (
      <Person key={person.id} name={person.name} delete={this.handleDelete} />
    ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
