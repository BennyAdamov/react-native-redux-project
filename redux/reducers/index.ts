import { combineReducers } from "redux";
import { LeagueReducer } from "./teamsReducer";

const rootReducer = combineReducers({
  leagueReducer: LeagueReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
