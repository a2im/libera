import Link from "next/link";
import Image from "next/image";
import { PostRelationResponseCollection, PostEntityResponseCollection } from "../../../lib/gql/types";
import Footer from '../../footer'

export default async function MyPost({params,}: { params: { 
  slug : String,
 }}) {

const res = await fetch(`https://cms.a2im.org/api/posts?populate[0]=coverImage&filters[Slug][$eq]=${params.slug}`);
const posts: PostRelationResponseCollection = await res.json()
  return <div className="pt-20">
  <div className="mx-auto Borderswap5 max-w-5xl p-10 gap-10">
  {posts?.data.map(posts => (
            <div key={posts.id} className="mx-auto">
             
              <Image 
                src={posts.attributes?.coverImage?.data?.attributes?.url}
                height={posts.attributes?.coverImage?.data?.attributes?.height}
                width={posts.attributes?.coverImage?.data?.attributes?.width}
                alt={posts.attributes?.coverImage?.data?.attributes?.alternativeText}
                className="mx-auto"
                /> 
                <Link href={`/news/${posts?.attributes?.Slug}`}><h2>{posts.attributes?.Title}</h2></Link>
                <p>
                {posts.attributes?.Excerpt}
                </p>
                <div dangerouslySetInnerHTML={{__html: `${posts?.attributes?.Body}`}}>
                </div>
            </div>
  )
  )}
        </div>
        <Footer />
    </div>
}

export async function generateStaticParams() {
  const res = await fetch(`https://cms.a2im.org/api/posts?populate=*`);
  const data: PostEntityResponseCollection = await res.json();
  return data?.data?.map((data) => ({
    slug: data.attributes.Slug,
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
