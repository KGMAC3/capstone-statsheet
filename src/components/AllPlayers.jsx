import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class AllPlayers extends Component {
  state = {
    allPlayers: []
  }

  componentDidMount() {
    axios
      .get(
        `http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=%27${this.props.match.params.teamId}%27`
      )
      .then(resp => {
        console.log(resp.data)
        this.setState({
          allPlayers: resp.data.roster_40.queryResults.row
        })
      })
  }
  render() {
    console.log(this.state.allPlayers)
    return (
      <div id='container'>
        <ul>
          {this.state.allPlayers.map((player, i) => {
            return (
              <li key={i}>
                <h1>
                  <Link to={`/player/${this.state.allPlayers[i].player_id}`}>
                    Player Name: {player.name_display_first_last}
                  </Link>
                </h1>
                <h2>
                  Jersey Number:
                  {this.state.allPlayers[i].jersey_number}
                </h2>
                <h2>
                  Team:
                  {this.state.allPlayers[i].team_name}
                </h2>
                <h2>
                  Position:
                  {this.state.allPlayers[i].position_txt}
                </h2>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AllPlayers
