'use client';

import { GET_ALL_POSTS_FORHOME } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Date from "../date";


export function LiberaPostsList() {
    const { loading, error, data } = useQuery(GET_ALL_POSTS_FORHOME, { 
      variables: {
        PublicationState: "LIVE"
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-10 items-center">
        {/* Map through the data */}
        {data.posts.data.map(posts => (
                <div key={data.posts.data.attributes.Slug} className="max-h-5 mygrow p-8">
                    <div className="posttitle">
                        <Link href={`/news/${data.posts.data.attributes.Slug}`}><h3>{posts.data.attributes.Title}</h3></Link>
                        <h4>Posted on:<span><Date dateString={posts.data.attributes.Date}/></span></h4>
                </div>
                    <div className="postexcerpt">
                        <body>
                            {posts.data.attributes.Excerpt}
                        </body>
                </div>
                </div>
              )
            )}
        </div>
    );
}