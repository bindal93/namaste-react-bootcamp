import { Component } from "react";
import { useEffect } from "react/cjs/react.production.min";

const ProfileComponent2 = () => {
  const [email, setEmail] = useState("aksahbchd");

  useEffect(() => {
    //fetch data here
    //update state

    // subscrription
    return () => {
      //clean up
    };
  }, []);

  async function fetchData() {
    //fetch
  }

  return (
    <div>
      <h3>Name: Akshay Saini</h3>
    </div>
  );
};

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log("Profile - constructor");
  }

  async componentDidMount() {
    console.log("Profile - componentDidMount()");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Profile - componentDidUpdate()");
  }

  render() {
    console.log("Profile - render");
    // huge component 1000 state variables
    const { login, company, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h3>Name: {this.props.name}</h3>
        <h3>username: {login}</h3>
        <h3>Company: {company}</h3>
        <h3>XYZ: {this.props.xyz}</h3>
      </div>
    );
  }
}

export default ProfileComponent;
