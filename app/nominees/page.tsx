import { Suspense } from 'react'
import Loading from '../loading'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Image from 'next/image'
import ArchiveVideo from '../../components/video-archive'
import ImageWithFallback from '../../components/image-handler'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = true,
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

  export async function getCategories({cleantitle}){
    const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/libera-categories?filters[events][Title][$eq]=${cleantitle}&sort[0]=[Name]%3Aasc&populate=*`, { next: { revalidate: 60 }})
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch Events');
    }
    return res.json()
  }

  export async function getNominees({cleantitle, catname}){
    const cleancatname = decodeURI(catname.replace('&','%26'))
    const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[events][Title][$eq]=${cleantitle}&filters[libera_categories][Name][$eq]=${cleancatname}&filters[isWinner][$ne]=true&sort[0]=[Name]%3Aasc&populate=*`, { next: { revalidate: 60 }});
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch Nominees');
    }
    return res.json();
  }
  
  export async function CategoryCards({cleantitle}){
    const categories = await getCategories({cleantitle})
    const cleanertitle = categories?.attributes?.Name.replace('"',"__")
    return(
        <>
        <div className="flex flex-col w-full gap-8 max-w-5xl mx-auto">
        {categories.data.map(categories => (
          <div id={cleanertitle} key={categories.id} className="flex flex-col justify-between bg-sky-50 rounded-2xl shadow-2xl LiberaBorder my-5 relative whitespace-normal p-3">
            <div className="px-3 pt-3">
            <h3>{categories.attributes.Name}</h3>
            <hr className="mb-3 mt-3 Hrswap"></hr>
            </div>
              <NomineeCards cleantitle={cleantitle} catname={categories.attributes.Name}/>
          </div>
                        ))}
                        </div>
        </>
    )
  }

  export async function NomineeCards({cleantitle, catname}){
    const nominations = await getNominees({cleantitle, catname})
    return(
        <>
              <div className="flex flex-row flex-wrap justify-evenly mx-auto gap-8 max-w-6xl p-3 pb-10 pt-5">
              {nominations.data.map(nominations => (
                <div id={nominations.attributes.Name} key={nominations.id} className="flex w-64 justify-between hover:scale-105 drop-shadow-lg">
                  <div className="flex flex-col  relative ">
                    <div className="w-[300px] h-[300px] overflow-hidden rounded-xl ">
                      <ImageWithFallback
                        width={300}
                        height={300}
                        key={nominations.id}
                        src={nominations.attributes.Artwork?.data?.attributes?.url}
                        fallbackSrc={'/images/final-main-poster-1080x1080.jpg'}
                        />
                        </div>
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

export default async function NomineesPage() {
  const cleantitle = "2023 Libera Awards"
  const events = await getEvent(cleantitle)
  return (
    <>
    <title>Libera Awards - Nominees</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle} Nominees</h2>
    {events?.data.map(events => (
        <div key={events.id} className="Youtubebox max-w-5xl mx-auto pb-10">
      <ArchiveVideo VideoURL={events.attributes.VideoURL}/>
      </div>
      ))}
      <CategoryCards cleantitle={cleantitle} />
    </Suspense>
    </>
  )
}