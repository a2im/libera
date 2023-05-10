import { Suspense } from 'react'
import Loading from './loading'
import Header from './header'
import InfoCard from './info-card'
import { getHomeInfo, getHomeHeader } from './get-data'
import LiberaButton from './button'
export const metadata = { 
  title: 'Libera Awards - Home',
  description: 'The Libera Awards is the Largest Independent Music Awards show in the World.'}
export default async function Home() {
  const header = await getHomeHeader()
  const info = await getHomeInfo()
  return (
    <div className="pt-20">
      <Suspense fallback={<Loading start={0} end={10}/>}>
      <Header Header={header.data.attributes.Header}/>
      <LiberaButton type={header.data.attributes.Button.NavType} href={header.data.attributes.Button.URL}>{header.data.attributes.Button.Text}</LiberaButton>
      {info.data.attributes.Info.map(Info => (
        <InfoCard key={Info.id} Info={Info}/>
      ))}
          </Suspense>
    </div>
  )
}
