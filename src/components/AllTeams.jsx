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
                  <Link
                    className='player-name'
                    to={`/${this.state.allteams[i].team_id}`}
                  >
                    {team.name_display_full}
                  </Link>
                </h1>
                <h2>Division: {team.division_full}</h2>
                <h2>Field Name:{team.venue_name}</h2>
                <h2>
                  Location: {team.city}, {team.state}
                </h2>
                <h2>Address: {team.address_line1}</h2>
                <h2>Website:{team.website_url}</h2>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default AllTeams
