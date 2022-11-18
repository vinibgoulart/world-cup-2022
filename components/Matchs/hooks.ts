import { api } from '../../lib/api'

type Match = {
  _id: string
  away_score: number
  away_scorers: string[]
  away_team_id: string
  finished: string
  group: string
  home_score: number
  home_scorers: string[]
  home_team_id: string
  id: string
  local_date: string
  matchday: string
  persian_date: string
  stadium_id: string
  time_elapsed: string
  type: string
  home_team_fa: string
  away_team_fa: string
  home_team_en: string
  away_team_en: string
  home_flag: string
  away_flag: string
}

type MatchsApi = {
  status: string
  data: Match[]
}

async function getMatchs() {
  const res = await api('/match', {})
  const matchs: MatchsApi = await res.json()

  return matchs
}

export { getMatchs }
export type { Match, MatchsApi }
