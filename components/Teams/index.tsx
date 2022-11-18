import Image from 'next/image'
import { getTeams } from './hooks'

async function Team() {
  const teams = await getTeams()

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-center">Teams</h2>
      <div className="grid grid-cols-4 gap-5">
        {teams.data.map(team => (
          <div className="flex justify-center items-center">
            <div className="w-52">
              <div className="flex items-center text-start gap-2">
                <Image src={team.flag} alt={`${team.name_en} flag`} width={20} height={20} />
                <p className="text-start text-2xl">{team.name_en}</p>
              </div>
              <div>{}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Team }
