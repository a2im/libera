import { Suspense } from 'react'
import Loading from '../loading'
import ArchiveVideo from '../../components/video-archive'
import { getEvent, getNominees, getArtwork, getCategories } from './rest-archives'
import Link from "next/link"
import Image from 'next/image'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'






export default async function NomineesPage() {
  const cleantitle = "2023 Libera Awards"
  const events = await getEvent({cleantitle})
  return (
    <>
    <title>Libera Awards - Nominees</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle} Nominees</h2>
    {events?.data.map(events => (
        <div key={events.id} className="Youtubebox max-w-4xl mx-auto pb-10">
      <ArchiveVideo VideoURL={events.attributes.VideoURL}/>
      </div>
      ))}
    {/* @ts-expect-error Async Server Component */}
      <CategoryCards cleantitle={cleantitle}/>
    </Suspense>
    </>
  )
}

export async function CategoryCards({cleantitle}){
  const categories = await getCategories({cleantitle})
  return(
      <>
      <div className="grid grid-cols-0 gap-8 max-w-4xl mx-auto">
      {categories.data.map(categories => (
        <div id={categories?.attributes?.Name} key={categories.id} className="flex flex-col justify-start LiberaBorder my-5 relative p-3">
          <div className="px-3 pt-3">
          <h3>{categories?.attributes?.Name}</h3>
          <hr className="mb-3 mt-3 Hrswap"></hr>
          </div>
          {/* @ts-expect-error Async Server Component */}
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
            <div className="flex flex-wrap justify-evenly gap-5 p-3 pb-10 pt-5 ">
            {nominations.data.map(nominations => (
              <div id={decodeURI(nominations?.attributes?.Name.replace(/"/g,"__"))} key={nominations.id} className="flex shadow-2xl rounded-xl my-auto justify-start shrink w-56 bg-sky-50 mx-auto hover:scale-[1.01]">
                <div className="flex relative justify-start align-top mx-auto">
                      <div className="flex stretch grow flex-col justify-start gap-2 p-2 ">
                      <div className="w-[150px] h-[150px] overflow-hidden rounded-2xl relative">
                        <Image
                            src={nominations.attributes?.Artwork?.data?.attributes?.url} 
                            width={nominations.attributes?.Artwork?.data?.attributes?.width}
                            height={nominations.attributes?.Artwork?.data?.attributes?.height}
                            alt={nominations.attributes?.Artwork?.data?.attributes?.alternativeText}
                            />
                            </div>
                        <h4 className="font-bold text-2xl px-2">{nominations?.attributes?.Name}</h4>
                          {nominations?.attributes?.record_labels?.data.map(record_labels => (
                            <div id={record_labels?.attributes?.Name} key={record_labels?.id} className="archivecard bottom-0 labelbutton mr-auto px-2 rounded-full text-white hover:scale-105">
                              <Link href={record_labels?.attributes?.Website} className="hover:scale-[1.01] text-center mx-auto"><span className="text-center mx-auto">{record_labels?.attributes?.Name}</span></Link>
                            </div>
                          ))}
                      </div>
                </div>
              </div>
              )
              )}
        </div>
  )
}

export async function Artwork({id}){
  const data = await getArtwork({id})
  return (
      <>

      </>
  )
}