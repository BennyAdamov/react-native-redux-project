import { NbaAction, TeamsAction } from "../actions";
import { Nba, League, LeagueState } from "../models";

const initialState = {
  availability: {} as League,
  availableTeams: {} as [Nba],
};

const LeagueReducer = (
  state: LeagueState = initialState,
  action: NbaAction
) => {
  switch (action.type) {
    case "ON_NBA_AVAILABILITY":
      return { ...state, availability: action.payload };

    default:
      return state;
  }
};

export { LeagueReducer };
