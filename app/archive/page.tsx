
import { Suspense } from 'react'
import Loading from '../loading'
import Link from 'next/link'
import { GetArchiveEvents } from '../../components/get-archives'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = true,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default async function ArchivePage({params}: { params: { 
  Name : string,
 }}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/events?filters[Title][$contains]=Libera%20Awards&sort[Title]=asc&populate=*`, { next: { revalidate: 60 }});
  const events = await res.json();
  const cleantitle = await events?.attributes?.Title.replace("Libera Awards", " ");
  return (
    <>
    <div>
          <title>Libera Awards - Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
          <div className="grow shrink content-center">
<h1 className="py-20 grow font-bold align-middle text-center leading-tight">
  Archive
  </h1>
    <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto">
      <div className="invisible md:visible md:display shrink">
    </div>
    <div className="max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'">
        <h3>Libera Awards nominees & winners.</h3>
        <hr className="mt-3 mb-5 Hrswap"></hr>
    <div className="grid grid-cols-4 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 px-5">
        {/* Map through the data */}
        {events?.data.map(events => (
                <button id={events?.attributes?.Title} key={events.id} className="Borderswap1 text-white relative grow p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl hover:scale-105">
                  <Link href={`/archive/${events?.attributes?.Title}`}><h3 className="text-4xl  px-3">{events.attributes.Title.replace("Libera Awards", " ")}</h3></Link>
                </button>
              )
            )}
        </div>
        </div>
        </div>
        </div>
        </Suspense>
        </div>
    </>
  )
}
