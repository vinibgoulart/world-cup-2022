import Image from 'next/image'
import { getStandings } from './hooks'

async function Standing() {
  const standings = await getStandings()

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-center">Groups</h2>
      <div className="grid grid-cols-2 gap-5">
        {standings.data.map(standing => (
          <div className="flex justify-center items-center">
            <div className="w-52">
              <p className="text-2xl font-semibold">Group {standing.group}</p>
              {standing.teams.map(team => (
                <div className="flex items-center text-start gap-2">
                  <Image src={team.flag} alt={`${team.name_en} flag`} width={30} height={30} />
                  <p className={`text-start text-xl ${Number(team.l) ? 'text-red-600' : 'text-green-600'}`}>
                    {team.name_en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Standing }
