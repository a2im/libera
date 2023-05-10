import 'server-only'
import { Suspense } from 'react'
import Loading from '../loading'
import { getTickets } from '../get-data'
import InfoCard from '../info-card'
import Image from 'next/image'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const metadata = { 
  title: 'Libera Awards - Tickets',
  description: 'The Libera Awards is the Largest Independent Music Awards show in the World.'}
export default async function Tickets() {
  const data = await getTickets();
  return (
    <div>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
Tickets
  </h1>
  </div>
  {data.data.attributes.Info.map(Info => (
        <InfoCard key={Info.id} Info={Info}/>
      ))}
          </Suspense>
    </div>
  )
}
