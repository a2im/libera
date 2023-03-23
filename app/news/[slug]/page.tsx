import Link from "next/link";
import Image from "next/legacy/image";
import { PostRelationResponseCollection} from "../../../lib/gql/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense } from 'react'
import Loading from '../../loading'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default async function MyPost({params,}: { params: { 
  slug : String,
 }}) {

const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/posts?populate[0]=coverImage&filters[slug][$eq]=${params.slug}`);
const posts: PostRelationResponseCollection = await res.json()
  return (
  <>
  <Suspense fallback={<Loading start={0} end={10}/>}>
    <div className="max-w-5xl mx-auto text-4xl pt-20">
<Link href="/news">
    <FontAwesomeIcon icon="arrow-left-long" className="ml-10 mb-4 hover:scale-105"/>
</Link>
</div>
  <div className=" max-w-5xl px-8 pb-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl">
  {posts?.data.map(posts => (
            <div key={posts.id} className="mx-auto text-black">
             <div className="flex flex-row justify-between px-10 pt-10">
              <Link href={`/news/${posts?.attributes?.slug}`}><h3 className="max-w-xl hover:scale-105">{posts.attributes?.Title}</h3></Link>
              <div className="w-[220px] h-[150px] overflow-hidden rounded-2xl">
              <Image 
                src={posts.attributes?.coverImage?.data?.attributes?.url}
                width={posts.attributes?.coverImage?.data?.attributes?.width}
                height={posts.attributes?.coverImage?.data?.attributes?.height}
                alt={posts.attributes?.coverImage?.data?.attributes?.alternativeText}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className="hover:scale-105"
                /> 
                </div>
                
                </div>
                <hr className="mt-3 mb-8 Hrswap mx-8"></hr>
                <div>
              {posts.attributes.Date >= '2023-03-22T15:00:00.000Z' ? <ReactMarkdown className="line-break max-w-4xl mx-auto" remarkPlugins={[remarkGfm]}>{posts?.attributes?.Body}</ReactMarkdown> : <div className="max-w-4xl mx-auto"> <div dangerouslySetInnerHTML={{ __html: posts?.attributes?.Body }}/></div> }
                </div></div>
  )
  )}
        </div>
        
</Suspense>
    </>
  )
}

