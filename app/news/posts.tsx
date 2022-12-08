'use client';

import { GET_ALL_POSTS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";

export function LiberaPostsList() {
    const { loading, error, data } = useQuery(GET_ALL_POSTS, { 
      variables: {
        PublicationState: "LIVE"
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div className="max-w-5xl flex flex-col mx-auto justify-center gap-10 items-center">
        {/* Map through the data */}
        {data?.posts?.data.map(post => (
                <div key={post.id} className="mygrow p-8 Borderswap5 mx-auto">
                    <div className="relative postcoverimage">
                      <Image 
                      src={post.attributes.coverImage.data.attributes?.url} 
                      alt={post.attributes.coverImage.data.attributes?.alternativeText} 
                      height={post.attributes.coverImage.data.attributes?.height}
                      width={post.attributes.coverImage.data.attributes?.width}
                      />
                    </div>
                    <div className="posttitle">
                        <Link href={`/news/${encodeURIComponent(post.attributes?.Slug)}`}>
                            <h3>{post.attributes?.Title}</h3>
                            </Link>
                </div>
                    <p>
                    {post.attributes?.Excerpt}
                    </p>
                </div>
              )
            )}
        </div>
    );
}