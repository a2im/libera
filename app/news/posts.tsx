'use client';
import {useRouter} from "next/navigation";
import { GET_ALL_POSTS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";

export function LiberaPostsList() {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ALL_POSTS, { 
    variables: {
      PublicationState: "LIVE"
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
      <>
      <div className="flex flex-col mx-auto max-w-5xl p-10 gap-10">
       {/* Map through the data */}
       {data.posts.data.map(posts => (
                <div key={posts.id} className="mx-auto Borderswap5 p-10">
                  <div className="relative mx-auto max-w-2xl">
                  <Image 
                    src={posts.attributes.coverImage.data.attributes.url}
                    height={posts.attributes.coverImage.data.attributes.height} 
                    width={posts.attributes.coverImage.data.attributes.width} 
                    alt={posts.attributes.coverImage.data.attributes.alternativeText} 
                    className="mx-auto"
                    />
                    </div>
                    <Link href={`/news/${posts.attributes.Slug}`} onClick={() => router.push(`/news/${posts.attributes.Slug}`)}><h2>{posts.attributes?.Title}</h2></Link>
                    <p>
                    {posts.attributes?.Excerpt}
                    </p>
                    
                </div>
                
              )
            )}
            </div>
        </>
    );
}
