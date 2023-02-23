import { Suspense } from 'react'
import Loading from '../../loading'
import Footer from '../../footer'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import MyNavbar from '../../../components/navbar'
import Link from 'next/link'
import Image from 'next/image'

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
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/libera-categories?filters[events][Title][$eq]=${params.Name}&sort=Name&populate=*`, { next: { revalidate: 60 }}) 
  const categories = await res2.json();  
  
  return (
    <>
    <MyNavbar/>
    <title>Libera Awards - Archive</title>
          <Suspense fallback={<Loading start={0} end={10}/>}>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle}</h2>
    <div className="flex md:flex-row max-w-5xl mx-auto">
      <div className="invisible md:visible md:display shrink">
    </div>
        <div className="flex flex-col grow max-w-3xl relative py-5 mx-auto justify-evenly gap-10 px-5">
        {/* Map through the data */}
        {categories?.data.map(categories => (
                <div id={categories.attributes.Name} key={categories.id} className="flex flex-col w-full relative grow p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl">
                  <h3>{categories?.attributes?.Name}</h3>
                  <hr className="mt-3 mb-5 Hrswap"></hr>
                  <div className="max-w-4xl">
                    <MyCategories EName={title} CatName={categories.attributes.Name}/>
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

export async function MyCategories({EName, CatName}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[event][Title][$eq]=${EName}&filters[libera_categories][Name][$eq]=${CatName}&populate=*`, { next: { revalidate: 60 }});
  const nominations = await res.json();
  
  return(
<>
<div>
        {nominations.data.map(nominations => (
                       <div id={nominations.attributes.Name} key={nominations.id} className="flex flex-row mx-auto">
                        <div className="flex flex-col grow">
                          <h4 className="font-bold">{nominations.attributes.Name}</h4>
                            {nominations.attributes.record_labels.data.map(record_labels => (
                              <div id={record_labels.attributes.Name} key={record_labels.id}>
                                <Link href={record_labels.attributes.Website}>{record_labels.attributes.Name}</Link>
                                </div>
                            ))}
                        </div>
                        <div className="relative mx-auto rounded-lg overflow-hidden w-1/2">
                        <Image src={nominations.attributes.Artwork?.data?.attributes?.url} alt={nominations.attributes.Artwork?.data?.attributes?.alternativeText} width={nominations.attributes.Artwork?.data?.attributes?.width} height={nominations.attributes.Artwork?.data?.attributes?.height}></Image>
                        </div>
                        </div>
                        )
                        )}
                        </div>
                        </>
  )
}

