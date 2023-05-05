import { Suspense } from 'react'
import Loading from '../../loading'
import Link from 'next/link'
import ArchiveVideo from '../../../components/video-archive'
import { getEvent, getWinners } from '../../nominees/rest-archives'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

export async function WinnerCards({cleantitle}){
  const nominations = await getWinners({cleantitle})
  return(
      <>
        <div className="flex flex-row flex-wrap mx-auto gap-8 max-w-6xl">
        {nominations.data.map(nominations => (
              <div id={nominations.attributes.Name} key={nominations.id} className=" flex w-64 justify-between bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5 relative whitespace-normal">
                <div className="flex flex-col relative">
                
                      {nominations.attributes.libera_categories.data.map(libera_categories => (
                          <div id={libera_categories.attributes.Name} key={libera_categories.id} className="flex-shrink">
                              <h4 className="font-bold py-2">{libera_categories.attributes.Name}</h4>
                          </div>
                      ))}
                      <hr className="mb-3 Hrswap"></hr>
                      <div className="flex stretch grow flex-col justify-between">
                    <p className="font-bold">{nominations.attributes.Name}</p>
                      {nominations.attributes.record_labels.data.map(record_labels => (
                        <div id={record_labels.attributes.Name} key={record_labels.id} className="archivecard bottom-0 labelbutton mr-auto text-white mt-5 hover:scale-105">
                          <Link href={record_labels.attributes.Website} className="hover:scale-[1.01] text-center mx-auto"><span className="text-center mx-auto">{record_labels.attributes.Name}</span></Link>
                        </div>
                      ))}
                      </div>
                </div>
              </div>
              )
              )}
        </div>
      </>
  )
}

export default async function ArchiveSinglePage({params}: { params: { 
  Title : String,
 }}) {
  const cleantitle = await decodeURI(params.Title.replace("&", "+"))
  const events = await getEvent({cleantitle})

  return (
    <>
    <title>Libera Awards - Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle}</h2>
    {events?.data.map(events => (
        <div key={events.id} className="Youtubebox max-w-5xl mx-auto pb-10">
      <ArchiveVideo VideoURL={events.attributes.VideoURL}/>
      </div>
      ))}
      {/* @ts-expect-error Async Server Component */}
      <WinnerCards cleantitle={cleantitle} />
    </Suspense>
    </>
  )
}