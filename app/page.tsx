import 'server-only'
import { Suspense } from 'react'
import Loading from './loading'
import Header from './header'
import InfoCard from './info-card'
import { getHomeInfo, getHomeHeader } from './get-data'
import LiberaButton from './button'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
  
export default async function Home() {
  const header = await getHomeHeader()
  const info = await getHomeInfo()
  return (
    <div className="pt-20">
      <title>Libera Awards - Home</title>
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
