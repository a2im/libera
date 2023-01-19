'use client';
import {useRouter} from "next/navigation";
import { GET_ALL_POSTS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";

export function LiberaPostsList() {
  const router = useRouter()
  const dummydata = [1,2,3,4,5,6,7,8,9,10]
  const { loading, error, data } = useQuery(GET_ALL_POSTS, { 
    variables: {
      PublicationState: "LIVE",
      Name: "Libera Awards"
    }});
    if (loading) return (
      <>
      <div className="relative animate-pulse grid grid-cols-1 mx-auto p-10 gap-10 z-0 max-w-3xl">
      {dummydata.map(data => (
          <div key={data} className="animate-pulse bg-gray-200 rounded-2xl dark:bg-gray-700 w-full h-[600px]">
          </div>
            )
          )}
          </div>
          </>
  )
    if (error) return <p>Error</p>
    return (
      <div className="bg-sky-50 mb-20">
      <div className="relative flex flex-col mx-auto max-w-3xl p-10 gap-10 z-0">
       {/* Map through the data */}
       {data.posts.data.map(posts => (
                <div key={posts.id} className="mx-auto Borderswap5 rounded-2xl p-10 hover:scale-105 shadow-2xl">
                  <div className="relative LiberaBorder2 bg-white mx-auto p-5 h-[300] overflow-hidden">
                  <Image 
                    src={posts.attributes.coverImage.data.attributes.url}
                    fill
                    style={{objectFit: "cover"}}
                    alt={posts.attributes.coverImage.data.attributes.alternativeText} 
                    className="mx-auto"
                    />
                    </div>
                    <div className="p-10">
                    <Link href={`/news/${posts.attributes.slug}`} onClick={() => router.push(`/news/${posts.attributes.slug}`)}><h3>{posts.attributes?.Title}</h3></Link>
                    <p>
                    {posts.attributes?.Excerpt}
                    </p>
                    </div>
                </div>
              )
            )}
            </div>
        </div>
    );
}
