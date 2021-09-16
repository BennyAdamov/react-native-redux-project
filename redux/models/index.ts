export interface Nba {
  city: string;
  fullName: string;
  logo: string;
  nickname: string;
  shortName: string;
}

export interface League {
  eastTeams: [Nba];
}

export interface LeagueState {
  availability: League;
  availableTeams: [Nba];
}
