import { Outlet } from "react-router-dom";
import React from "react";
import ProfileComponent from "./ProfileComponent";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };

    console.log("About - constructor");
  }

  componentDidMount() {
    console.log("About - componentDidMount()");

    // API call
    this.setState({ userInfo: {} });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("About - componentDidUpdate()");
  }

  componentWillUnmount(prevProps, prevState) {
    console.log("About - componentDidUpdate()");
  }

  render() {
    console.log("About - render");
    return (
      <>
        <h1>About Us Class Component</h1>
        <ProfileComponent userInfo={this.state.userInfo} />
      </>
    );
  }
}

export default AboutUs;

/**
 *
 * <Parent
 *    <child
 *        child
 * child
 *        child
 *            child
 * child
 *
 *
 * Parent - constructor
 * Parent - render
 * child - constructor
 * child - render
 * child - componentDidMount
 * parent - componentDidMount
 *
 *
 */
