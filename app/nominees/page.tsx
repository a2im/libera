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
 // const cleantitle = "2023 Libera Awards"
  // const events = await getEvent({cleantitle})
  return (
    <>
    <title>Libera Awards - Nominees</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">Nominees</h2>
   
    {/* @ts-expect-error Async Server Component */}
      <CategoryCards cleantitle={cleantitle}/>
    </Suspense>
    </>
  )
}

export async function CategoryCards({cleantitle}){
 // const categories = await getCategories({cleantitle})
  return(
      <>
      <div className="grid grid-cols-0 gap-8 max-w-4xl mx-auto">
      
                      </div>
      </>
  )
}


export async function NomineeCards({cleantitle, catname}){
 // const nominations = await getNominees({cleantitle, catname})
  
  return(
            <div className="flex flex-wrap justify-evenly gap-5 p-3 pb-10 pt-5 ">
            
        </div>
  )
}

export async function Artwork({id}){
 // const data = await getArtwork({id})
  return (
      <>

      </>
  )
}