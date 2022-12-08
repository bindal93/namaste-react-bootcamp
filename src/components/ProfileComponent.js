import { Component } from "react";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Profile - Constructor");
    this.state = {
      loading: true,
      email: "akshay@namastedev.com",
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);
    this.setState({ userInfo: json });
    console.log("Profile - componentDidMount()");
  }

  componentDidUpdate() {
    console.log("Profile - componentDidUpdate()");
  }

  //   componentDidMount() {
  //     console.log("Profile - componentDidMount()");
  //   }
  componentWillUnmount() {
    console.log("Profile - componentWillUnmount");
  }

  render() {
    console.log("Profile - render");
    return (
      <div className="profile">
        <h3>Name: {this.props.name}</h3>
        <h3>Email: {this.state.email}</h3>
        <p>{this.state.userInfo.name}</p>
      </div>
    );
  }
}

export default ProfileComponent;
