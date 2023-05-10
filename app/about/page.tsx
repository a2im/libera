import { Suspense } from 'react'
import Loading from '../loading'
import { getAbout } from '../get-data'
import InfoCard from '../info-card'
import { ImageGallery } from '../../components/gallery'
export const metadata = { 
  title: 'Libera Awards - About Us',
  description: 'The Libera Awards is the Largest Independent Music Awards show in the World.'}
export default async function About() {
  const data = await getAbout();
  return (
    <div>
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
