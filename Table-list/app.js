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
  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.gender === "male");
    const Items = users.map((user) => <Item key={user.id} user={user} />);

    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
