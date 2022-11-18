import { api } from '../../lib/api'

type Team = {
  _id: string
  name_en: string
  name_fa: string
  flag: string
  fifa_code: string
  iso2: string
  groups: string
  id: string
}

type TeamsApi = {
  status: string
  data: Team[]
}

async function getTeams() {
  const res = await api('/team', { cache: 'force-cache' })
  const teams: TeamsApi = await res.json()

  return teams
}

export { getTeams }
export type { Team, TeamsApi }
