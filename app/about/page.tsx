import 'server-only'
import { Suspense } from 'react'
import Loading from '../loading'
import { getAbout } from '../get-data'
import InfoCard from '../info-card'
import { ImageGallery } from '../../components/gallery'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'

export default async function About() {
  const data = await getAbout();
  return (
    <div>
      <title>Libera Awards - About Us</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  About
  </h1>
  </div>
  <InfoCard Info={data.data.attributes.TopInfo}/>
<ImageGallery Gallery={data.data.attributes.Gallery}/>
{data.data.attributes.Info.map(Info => (
        <InfoCard key={Info.id} Info={Info}/>
      ))}
</Suspense>
    </div>
  )
}
