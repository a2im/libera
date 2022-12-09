import Link from "next/link";
import Image from "next/image";

export default async function Post({params,}: { params: { 
  slug: string
 }}) {
const res = await fetch(`https://cms.a2im.org/api/posts?filters[Slug][$eq]=${params.slug}`)
const thispost = await res.json()
console.log(thispost)
  return <>
  <div className="mx-auto max-w-5xl p-10 gap-10">
            <div key={thispost?.id} className="mx-auto">
              <Link href={`/posts/${thispost.attributes?.Slug}`}>{thispost.attributes?.Title}</Link>
              <Image 
                src={thispost.attributes?.coverImage.data.attributes?.url}
                height={thispost.attributes?.coverImage.data.attributes?.height} 
                width={thispost.attributes?.coverImage.data.attributes?.width} 
                alt={thispost.attributes?.coverImage.data.attributes?.alternativeText} 
                className="mx-auto"
                />
                <p>
                {thispost.attributes?.Excerpt}
                </p>
                <p>
                    {thispost.attributes?.Body}
                </p>
            </div>
        </div>
    </>
}

export async function generateStaticParams() {
  const res = await fetch(`https://cms.a2im.org/api/posts?populate=*`);
  const data = await res.json()
  return data?.data?.map((data) => ({
    slug: data.attributes.Slug,
    id: data.id,
    Title: data.attributes.Title,
    url: data.attributes.coverImage.data.url,
    height: data.attributes.coverImage.data.height,
    width: data.attributes.coverImage.data.width,
    alternativeText: data.attributes.coverImage.data.alternativeText,
    Excerpt: data.attributes.Excerpt,
    Body: data.attributes.Body,
  }))
}
