import { useState } from "react"

export default function Team(){
  const [team,setTeam] = useState(11);

  const addPlayer = () =>{
    if(team <= 10){
      const newTeamMember = team + 1;
      setTeam(newTeamMember);
    }
    return team;
  }
  const removePlayer = () =>{
    if(team >= 1){
      const newTeamMember = team - 1;
      setTeam(newTeamMember);
    }
  }
  const teamStyle = {
    border:'2px solid purple',
    borderRadius:'15px',
    margin: '10px 0',
    padding: '10px '
  }
  return(
    <div style={teamStyle}>
    <h3>Players: {team}</h3>
    <button onClick={addPlayer}>Add Player</button>
    <button onClick={removePlayer}>Remove Player</button>
    </div>
  )
}