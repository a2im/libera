import Footer from '../../footer'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import MyNavbar from '../../../components/navbar'

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
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/libera-categories?filters[events][Title][$eq]=${params.Name}&populate=*`, { next: { revalidate: 60 }}) 
  const categories = await res2.json();  
  
  return (
    <>
    <MyNavbar/>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle}</h2>
    <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto">
      <div className="invisible md:visible md:display shrink">
    </div>
        <div className="grid grid-cols-3 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 overflow-hidden px-5">
        {/* Map through the data */}
        {categories?.data.map(categories => (
                <button id={categories.attributes.Name} key={categories.id} className="articlesection text-stone-800 border-2 rounded-xl bg-stone-100 p-10 border-black">
                  <h2 >{categories?.attributes?.Name}</h2>
                  <div className="max-w-4xl">
                    <MyCategories Name={title} CatName={categories.attributes.Name}/>
                  <span className="kbarticle"><ReactMarkdown className="line-break list-inside" remarkPlugins={[remarkGfm]}>{categories.attributes.nominations?.attributes?.Name}</ReactMarkdown></span>
                  </div>
                  <p>{categories.attributes.Name}</p>
                </button>
              )
            )}
        </div>
        </div>
    <Footer/>
    </>
  )
}

export async function MyCategories({Name, CatName}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[event][Title][$eq]=${Name}&filters[libera_categories][Name][$eq]=${CatName}`, { next: { revalidate: 60 }});
  const nominations = await res.json();
  return(
<>
<div>
  {/* Map through the data */}
        {nominations.data.map(nominations => (
                       <div id={nominations.attributes.Name} key={nominations.id}>{nominations.attributes.Name}</div>)
                        )}
                        </div>
                        </>
  )
}