import Image from 'next/image'
import { getStandings } from './hooks'

async function TeamsInformations() {
  const standings = await getStandings()

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-center">Teams</h2>
      <div className="grid grid-cols-4 gap-5">
        {standings.data.map(standings =>
          standings.teams.map(team => (
            <div className="flex justify-center items-center">
              <div className="w-52">
                <div className="flex items-center text-start gap-2">
                  <Image src={team.flag} alt={`${team.name_en} flag`} width={50} height={50} />
                  <p className={`text-start text-2xl ${Number(team.l) ? 'text-red-600' : 'text-green-600'}`}>
                    {team.name_en}
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="text-sm">Matches Played: {team.mp}</li>
                    <li className="text-sm">Matches Won: {team.w}</li>
                    <li className="text-sm">Matches Lost: {team.l}</li>
                    <li className="text-sm">Points: {team.pts}</li>
                    <li className="text-sm">Goals For: {team.gf}</li>
                    <li className="text-sm">Goals Against: {team.ga}</li>
                    <li className="text-sm">Goals Difference: {team.gd}</li>
                    <li className="text-sm">Drawn: {team.d}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export { TeamsInformations }
