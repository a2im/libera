'use client';

import Header from "../../header";
import { GET_POST_AND_MOREPOSTS } from "../../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Image from "next/image";
import Link from "next/link";




export default function Page(params) {
  const { Title, url, alternativeText, height, width, slug, Excerpt, Body } = params;
  console.log(params)
  return (
    <div>
          <title>Libera Awards - {Title}</title>
          <Header>{Title}</Header>
          <div>
      <div className="mygrow p-8 Borderswap5 mx-auto">
      <div className="relative postcoverimage">
        <Image 
        src={url} 
        alt={alternativeText} 
        height={height}
        width={width}
        />
      </div>
      <div className="posttitle">
          <Link href={`/news/${slug}`}><h3>{Title}</h3></Link>
  </div>
      <p>
      {Excerpt}
      </p>
      <p>
        {Body}
      </p>
  </div>
  </div>
    </div>
    
    )
};

export async function NewsPosts() {
  const { loading, error, data } = useQuery(GET_POST_AND_MOREPOSTS, { 
    variables: {
      slug: location.pathname
    }});
    
  return data
}

export async function generateStaticParams() {
  const postParams = await NewsPosts();

  return postParams.data.map((post) => ({
    slug: post.attributes.Slug,
    Title: post.attributes.Title,
    url: post.attributes.coverImage.attributes.url,
    height: post.attributes.coverImage.attributes.height,
    width: post.attributes.coverImage.attributes.width,
    alternativeText: post.attributes.coverImage.attributes.alternativeText,
    Body: post.attributes.Body,
    Excerpt: post.attributes.Excerpt,
  }));
}

