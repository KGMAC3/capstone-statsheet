import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class AllTeams extends Component {
  state = {
    allteams: []
  }
  componentDidMount() {
    axios
      .get(
        `http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2019'`
      )
      .then(resp => {
        console.log(resp.data)
        this.setState({
          allteams: resp.data.team_all_season.queryResults.row
        })
      })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.allteams.map((team, i) => {
            return (
              <li key={i}>
                <h1>
                  <Link to={`/${this.state.allteams[i].team_id}`}>
                    Team Name:
                    {team.name_display_full}
                  </Link>
                </h1>
                <h2>Address: {team.address_line1}</h2>
                <h2>State: {team.state}</h2>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AllTeams
