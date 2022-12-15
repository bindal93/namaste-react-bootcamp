import React from "react";
import ProfileComponent from "./ProfileComponent";
import UserContext from "./UserContext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("About - constructor");
  }
  componentDidUpdate() {
    console.log("About - component Did update");
  }
  componentDidMount() {
    console.log("About - component DiD Mount");
  }
  componentWillUnmount() {
    console.log("About - component will unmount");
  }
  render() {
    console.log("About - render");
    return (
      <>
        <h1>About Us Class Component</h1>
        <UserContext.Consumer>
          {(obj) => {
            return (
              <>
                <span>{obj.name}</span>
                <button
                  onClick={() => obj.updateName(" Update from About Akshay")}
                >
                  Update from About
                </button>
              </>
            );
          }}
        </UserContext.Consumer>
        <ProfileComponent userInfo={this.state.userInfo} />
      </>
    );
  }
}

export default AboutUs;
