import React, { Component } from "react"
import axios from "axios"
import moment from "moment"

class Player extends Component {
  state = {
    player: null,
    playerId: "493316"
  }
  componentDidMount() {
    axios
      .get(
        `https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id=${this.props.match.params.playerId}`
      )
      .then(resp => {
        this.setState({
          player: resp.data.player_info.queryResults.row
        })
        console.log(this.state.result)
      })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <ul>
          <li>
            {this.state.player && (
              <div>
                <h1>{this.state.player.name_display_first_last}</h1>
                <h2>
                  Date of Birth:
                  {this.state.player.birth_date &&
                    moment(this.state.player.birth_date).format("MMMM Do YYYY")}
                </h2>
                <h2>Team: {this.state.player.team_name}, </h2>
                <h2>
                  Position:
                  {this.state.player.primary_position_txt}
                </h2>
                <h2>Batting Hand: {this.state.player.bats}</h2>
                <h2>Throwing Hand: {this.state.player.throws}</h2>
                <h2>
                  Height: {this.state.player.height_feet}'
                  {this.state.player.height_inches}"
                </h2>
                <h2>Weight: {this.state.player.weight}lbs</h2>
                <h2>
                  Birth Place: {this.state.player.birth_city},{" "}
                  {this.state.player.birth_country}
                </h2>
                <h2>
                  Start Date:{" "}
                  {this.state.player.start_date &&
                    moment(this.state.player.start_date).format("MMMM Do YYYY")}
                </h2>
              </div>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

export default Player
