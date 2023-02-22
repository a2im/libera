import { Suspense } from 'react'
import Loading from '../loading'
import MyNavbar from '../../components/navbar'
import Link from 'next/link'
import { GetArchiveEvents } from '../../components/get-archives'

export default async function ArchivePage({params}: { params: { 
  Name : String,
 }}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/events?filters[Title][$contains]=Libera%20Awards&sort[Title]=desc&populate=*`, { next: { revalidate: 60 }});
  const events = await res.json();
  const title = await JSON.stringify(events.attributes?.Title)
  const cleantitle = await title?.replace("Libera Awards", " ")
  return (
    <>
    <div>
          <title>Libera Awards - Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
      <MyNavbar/>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  Archive
  </h1>
    <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto">
      <div className="invisible md:visible md:display shrink">
    </div>
    <div className="grid grid-cols-2 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 px-5">
        {/* Map through the data */}
        {events?.data.map(events => (
                <button id={events?.attributes?.Title} key={events.id} className=" text-stone-800 border-2 rounded-xl bg-stone-100 p-10 border-black">
                  <h2 >{cleantitle}</h2>
                  <Link href={`/archive/${events?.attributes?.Title}`}><h3 className="text-xl hover:scale-[1.01] px-3 -mt-3">{events?.attributes?.Title}</h3></Link>
                </button>
              )
            )}
        </div>
        </div>
        </div></Suspense></div>
    </>
  )
}
