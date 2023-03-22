import Link from "next/link";
import Image from "next/legacy/image";
import { PostRelationResponseCollection, PostEntityResponseCollection } from "../../../lib/gql/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense } from 'react'
import Loading from '../../loading'
import MyNavbar from '../../../components/navbar'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


export default async function MyPost({params,}: { params: { 
  slug : String,
 }}) {

const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/posts?populate[0]=coverImage&filters[slug][$eq]=${params.slug}`);
const posts: PostRelationResponseCollection = await res.json()

  return <>
  <Suspense fallback={<Loading start={0} end={10}/>}>
  <MyNavbar/>
    <div className="max-w-5xl mx-auto text-4xl pt-20">
<Link href="/news">
    <FontAwesomeIcon icon="arrow-left-long" className="ml-10 mb-2 hover:scale-105"/>
</Link>
</div>
  <div className=" max-w-5xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl">
  {posts?.data.map(posts => (
            <div key={posts.id} className="mx-auto text-black">
             <div className="flex flex-row justify-content-evenly">
              <Link href={`/news/${posts?.attributes?.slug}`}><h3 className="max-w-xl hover:scale-105">{posts.attributes?.Title}</h3></Link>
              <div className="relative w-1/2">
              <Image 
                src={posts.attributes?.coverImage?.data?.attributes?.url}
                layout="fill"
                objectFit="contain"
                alt={posts.attributes?.coverImage?.data?.attributes?.alternativeText}
                className="mx-auto hover:scale-105"
                /> 
                </div>
                
                </div>
                <hr className="mt-3 mb-8 Hrswap"></hr>
                <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{posts?.attributes?.Body}</ReactMarkdown>
            </div>
  )
  )}
        </div>
</Suspense>
    </>
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/posts?populate=*`);
  const data: PostEntityResponseCollection = await res.json();
  return data?.data?.map((data) => ({
    slug: data.attributes.slug,
    id: data.id,
    Title: data.attributes.Title,
    url: data.attributes.coverImage.data.attributes.url,
    height: data.attributes.coverImage.data.attributes.height,
    width: data.attributes.coverImage.data.attributes.width,
    alternativeText: data.attributes.coverImage.data.attributes.alternativeText,
    Excerpt: data.attributes.Excerpt,
    Body: data.attributes.Body,
  }))
}
