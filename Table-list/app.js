const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      gender: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      gender: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      gender: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      gender: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>
      Wiek użytkownika: <strong>{user.age}</strong>
    </p>
    <p>Płeć użytkownika: {user.gender}</p>
  </div>
);
class ListItems extends React.Component {
  state = {
    select: "all",
  };

  handleUsersFilter(option) {
    this.setState({
      select: option,
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map((user) => <Item key={user.id} user={user} />);
      case "female":
        users = users.filter((user) => user.gender === "female");
        return users.map((user) => <Item key={user.id} user={user} />);
      case "female":
        users = users.filter((user) => user.gender === "male");
        return users.map((user) => <Item key={user.id} user={user} />);
      default:
        return "Coś nie działa";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>
          Wszyscy
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Kobiety
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Mężczyźni
        </button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
