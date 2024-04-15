const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      {
        id: 1,
        name: "Marta",
      },
      {
        id: 2,
        name: "Stasia",
      },
      {
        id: 3,
        name: "Karol",
      },
      {
        id: 4,
        name: "Arek",
      },
      {
        id: 5,
        name: "Agata",
      },
    ],
  };

  handleDelete = (id) => {
    const people = [...this.state.people];
    const index = people.findIndex((person) => person.id === id);
    people.splice(index, 1);
    this.setState({ people });
  };

  render() {
    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.id)}
      />
    ));

    return (
      <div>
        <ul>{people}</ul>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
