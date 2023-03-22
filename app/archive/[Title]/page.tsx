import { Suspense } from 'react'
import Loading from '../../loading'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Image from 'next/image'
import ArchiveVideo from '../../../components/video-archive'
import ImageWithFallback from '../../../components/image-handler'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

  export async function getEvent(cleantitle){
    const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/events?filters[Title][$eq]=${cleantitle}&populate=*`, { next: { revalidate: 60 }})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch Events');
    }
    return res.json()
  }

  export async function getWinners({cleantitle}){
    const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[events][Title][$eq]=${cleantitle}&filters[isWinner][$eq]=true&sort[0]=[libera_categories][Name]%3Aasc&populate=*`, { next: { revalidate: 60 }});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch Winners');
    }
    return res.json();
  }


export async function WinnerCards({cleantitle}){
  const nominations = await getWinners({cleantitle})
  return(
      <>
        <div className="flex flex-row flex-wrap mx-auto gap-8 max-w-6xl">
        {nominations.data.map(nominations => (
              <div id={nominations.attributes.Name} key={nominations.id} className="hover:scale-105 flex w-64 justify-between bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5 relative whitespace-normal">
                <div className="flex flex-col relative">
                    <ImageWithFallback
                      width={300}
                      height={300}
                      key={nominations.id}
                      src={nominations.attributes.Artwork?.data?.attributes?.url}
                      fallbackSrc={'/images/final-main-poster-1080x1080.jpg'}
                      />
                      {nominations.attributes.libera_categories.data.map(libera_categories => (
                          <div id={libera_categories.attributes.Name} key={libera_categories.id} className="flex-shrink">
                              <h4 className="font-bold py-2">{libera_categories.attributes.Name}</h4>
                          </div>
                      ))}
                      <hr className="mb-3 Hrswap"></hr>
                      <div className="flex stretch grow flex-col justify-between">
                    <p className="font-bold">{nominations.attributes.Name}</p>
                      {nominations.attributes.record_labels.data.map(record_labels => (
                        <div id={record_labels.attributes.Name} key={record_labels.id} className="archivecard bottom-0">
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
  Title : string,
 }}) {
  const title = params.Title
  const cleantitle = decodeURI(title.replace("&", "+"))
  const events = await getEvent(params.Title)

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
      <WinnerCards cleantitle={cleantitle} />
    </Suspense>
    </>
  )
}