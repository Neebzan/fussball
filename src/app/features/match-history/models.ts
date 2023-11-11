export interface Match {
  Played: Date;
  TeamBlue: Team;
  TeamRed: Team;
}

export interface Team {
  Score: number;
  PlayerA: MatchPlayer;
  PlayerB: MatchPlayer;
}

export interface MatchPlayer {
  Initials: string;
  RatingModifier: number;
}
