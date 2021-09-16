import axios from "axios";
import { Dispatch } from "react";
import { League, Nba } from "../models";

export interface LeagueAction {
  readonly type: "ON_AVAILABILITY";
  payload: League;
}

export interface NbaAction {
  readonly type: "ON_NBA_AVAILABILITY";
  payload: [Nba];
}

export interface NbaErrorAction {
  readonly type: "ON_NBA_ERROR";
  payload: any;
}

export type TeamsAction = LeagueAction | NbaAction | NbaErrorAction;

export const onAvailability = () => {
  return async (dispatch: Dispatch<NbaAction>) => {
    try {
      axios({
        method: "GET",
        url: "https://api-nba-v1.p.rapidapi.com/teams/league/standard",
        headers: {
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "b01bd4cd67msh344f56e864cfcf7p1b0207jsn9d938ccf0efd",
        },
      }).then((response) => {
        const teams = response.data.api.teams;
        const nba = teams.filter(
          (team: { nbaFranchise: string; teamId: string }) => {
            return team.teamId !== "37" && team.nbaFranchise === "1";
          }
        );

        dispatch({
          type: "ON_NBA_AVAILABILITY",
          payload: nba,
        });
      });
    } catch (error) {}
  };
};
