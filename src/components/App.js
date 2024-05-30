import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


function App(props) {
  props = user
  return (
    <div>
      <NavBar />
      <Home name={props.name} city={props.city} color={props.color}>
      </Home>
      <About bio={props.bio} github={props.links.github} linkedin={props.links.linkedin} >
      </About>
      <Links github={props.links.github} linkedin={props.links.linkedin}>
      </Links>
      
    </div>
  );
}

export default App;
