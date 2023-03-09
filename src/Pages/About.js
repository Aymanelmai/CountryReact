import React from "react";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1> About </h1>
      <br />

      <div className="text-wrapper">
        <LoremIpsum p={4} />
      </div>
    </div>
  );
};

export default About;
