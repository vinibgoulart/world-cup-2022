import Image from 'next/image'
import { getMatchs } from './hooks'

async function Matchs() {
  const matchs = await getMatchs()

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold text-center">
        Matchs<span className="text-base font-light">(local date)</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {matchs.data.map(match => (
          <div className="shadow-xl px-2 py-4 bg-white min-w-full text-center">
            <div className="flex items-center justify-center">
              <div className="flex items-center text-start gap-2">
                <Image src={match.home_flag} alt={`${match.home_team_en} flag`} width={30} height={30} />

                <span className={'text-sm font-semibold lg:font-bold lg:text-lg'}>{match.home_team_en} </span>
                <span>{!match.finished ? match.home_score : ''}</span>
              </div>
              <span>x</span>
              <div className="flex items-center text-start gap-2">
                <span>{!match.finished ? match.away_score : ''} </span>
                <span className={'text-sm font-semibold lg:font-bold lg:text-lg'}>{match.away_team_en}</span>
                <Image src={match.away_flag} alt={`${match.away_team_en} flag`} width={30} height={30} />
              </div>
            </div>
            <div className={`${!match.finished ? 'text-blue-600' : 'text-green-600'}`}>{match.local_date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Matchs }
