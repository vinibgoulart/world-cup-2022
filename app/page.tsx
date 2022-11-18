import { Matchs } from '../components/Matchs'
import { Standing } from '../components/Standings'
import { TeamsInformations } from '../components/Standings/TeamsInformations'

function Home() {
  return (
    <div className="my-5">
      <hr />
      {/* @ts-expect-error Server Component */}
      <TeamsInformations />
      <hr />
      {/* @ts-expect-error Server Component */}
      <Standing />
      <hr />
      {/* @ts-expect-error Server Component */}
      <Matchs />
      <hr />
    </div>
  )
}

export default Home
