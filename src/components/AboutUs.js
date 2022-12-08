import React from "react";
import { Outlet } from "react-router-dom";
// const AboutUs = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <h2>our Kool food ordering app</h2>
//     </>
//   );
// };

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
        <h1>About Us</h1>
        <h2>our Kool food ordering app</h2>
        <Outlet />
      </>
    );
  }
}

export default AboutUs;
