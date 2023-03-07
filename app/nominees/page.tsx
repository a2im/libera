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
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default async function NomineesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/libera-categories?filters[events][Title][$eq]=2023 Libera Awards&sort=Name&populate=*`, { next: { revalidate: 60 }})
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/events?filters[Title][$eq]=2023 Libera Awards&populate=*`, { next: { revalidate: 60 }})
  const categories = await res.json()
  const events = await res2.json()
  return (
    <>
    <title>Libera Awards - Nominees</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl ">2023 Libera Awards Nominees</h2>
    <div className="flex md:flex-row mx-auto max-w-6xl">
      {/* Map through the data */}
      {events?.data.map(events => (
        <div key={events.id}>
      <ArchiveVideo VideoURL={events.attributes.VideoURL}/>
      </div>
      ))}
        <div className="grid grid-cols-3 grow relative py-5 mx-auto justify-evenly gap-5">
        {/* Map through the data */}
        {categories?.data.map(categories => (
                <div id={categories.attributes.Name} key={categories.id} className="flex flex-col w-full relative grow p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl">
                  <h3 className="text-3xl">{categories?.attributes?.Name}</h3>
                  <hr className="mt-3 mb-5 Hrswap"></hr>
                  <div className="max-w-4xl">
                    <Nominations EName={title} CatName={categories.attributes.Name}/>
                  </div>
                </div>
              )
            )}
        </div>
        </div>
    </Suspense>
    </>
  )
}

export async function Nominations({EName, CatName}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[event][Title][$eq]=${EName}&filters[libera_categories][Name][$eq]=${CatName}&populate=*`, { next: { revalidate: 60 }});
  const nominations = await res.json();
  return(
      <>
        <div className="flex flex-col gap-8">
        {nominations.data.map(nominations => (
                       <div id={nominations.attributes.Name} key={nominations.id} className="flex flex-col-reverse justify-between">
                        <div className="flex flex-col justify-end">
                          <h4 className="font-bold shrink">{nominations.attributes.Name}</h4>
                            {nominations.attributes.record_labels.data.map(record_labels => (
                              <div id={record_labels.attributes.Name} key={record_labels.id}>
                                <Link href={record_labels.attributes.Website}>{record_labels.attributes.Name}</Link>
                                </div>
                            ))}
                        </div>
                        <ImageWithFallback
                        key={nominations.id}
                        layout="fill"
                        src={nominations.attributes.Artwork?.data?.attributes?.url}
                        fallbackSrc={'/images/final-main-poster-1080x1080.jpg'}
                        />
                        </div>
                        )
                        )}
                        </div>
                        </>
  )
}

