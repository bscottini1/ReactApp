import React, { Component } from "react";
import './App.css';
import teams from "teams.json/";
import TeamCard from "./Components/TeamCard/index";
import Title from "./Components/Title/index";
import Wrapper from "./Components/Wrapper/index";

class App extends Component {
  state = {
    teams : teams
  }

render (){
  return (
    <Wrapper>
      <Title>National League Teams</Title>
      {this.state.teams.map(teams => (
        <TeamCard
          id = {teams.id}
          key = {teams.id}
          name = {teams.team}
          logo = {teams.logo}
        />
      ))}
    </Wrapper>
  );
}
}




export default App;
