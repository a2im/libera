import { Suspense } from 'react'
import Loading from '../../loading'
import Footer from '../../footer'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import MyNavbar from '../../../components/navbar'
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

export default async function ArchiveSinglePage({params}: { params: { 
  Name : string,
 }}) {
  var title = params.Name
  var cleantitle = decodeURI(title)
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/libera-categories?filters[events][Title][$eq]=${params.Name}&sort=Name&populate=*`, { next: { revalidate: 60 }})
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/events?filters[Title][$eq]=${params.Name}&populate=*`, { next: { revalidate: 60 }})
  const categories = await res.json()
  const events = await res2.json()

  return (
    <>
    <MyNavbar/>
    <title>Libera Awards - Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle}</h2>
    {events?.data.map(events => (
        <div key={events.id} className="Youtubebox max-w-5xl mx-auto pb-10">
      <ArchiveVideo VideoURL={events.attributes.VideoURL}/>
      </div>
      ))}
    <div className="flex md:flex-row mx-auto max-w-6xl items-center stretch">
      
        <div className="flex flex-row flex-wrap relative mx-auto gap-5 justify-center ">
        {/* Map through the data */}
        {categories?.data.map(categories => (
                <div id={categories.attributes.Name} key={categories.id} className="flex flex-col self-center relative p-8 w-80 bg-sky-50 shadow-2xl rounded-2xl mb-auto hover:scale-105 ">
                  <h3 className="text-3xl font-bold">{categories?.attributes?.Name}</h3>
                  <hr className="mt-3 mb-5 Hrswap"></hr>
                  <div>
                    <Nominations EName={title} CatName={categories.attributes.Name}/>
                  </div>
                </div>
              )
            )}
        </div>
        </div>
    <Footer/>
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
                        <div className="flex flex-col justify-end py-3">
                          <h4 className="font-bold shrink">{nominations.attributes.Name}</h4>
                            {nominations.attributes.record_labels.data.map(record_labels => (
                              <div id={record_labels.attributes.Name} key={record_labels.id}>
                                <Link href={record_labels.attributes.Website}>{record_labels.attributes.Name}</Link>
                                </div>
                            ))}
                        </div>
                        <ImageWithFallback
                        width={300}
                        height={300}
                        key={nominations.id}
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

