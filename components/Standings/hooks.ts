import { api } from '../../lib/api'

type TeamStanding = {
  team_id: string
  mp: string //matches played
  w: string //matches won
  l: string //matches lost
  pts: string //point / score
  gf: string //goals for
  ga: string //goals against
  gd: string //goals difference
  d: string //drawn
  name_fa: string
  name_en: string
  flag: string
}

type Standings = {
  _id: string
  group: string
  teams: TeamStanding[]
}

type StandingsApi = {
  status: string
  data: Standings[]
}

async function getStandings() {
  const res = await api('/standings', { next: { revalidate: 60 } })
  const standings: StandingsApi = await res.json()

  return standings
}

export { getStandings }
export type { TeamStanding, Standings, StandingsApi }
