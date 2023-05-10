import Image from "next/image";
import LiberaButton from "./button"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function InfoCard({Info}) {

  if (Info.Type === "A") 
  return (<div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
    <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
          <div>
            <Image
            src={Info.Image.data.attributes.url} 
            alt={Info.Image.data.attributes.alternativeText}
            width={Info.Image.data.attributes.width}
            height={Info.Image.data.attributes.height}
            />
                  <div className="p-8">
          <InfoButton Button={Info.Button}/>
          </div>
        </div>
        <div className="px-8 md:px-20 mx-auto">
            <h2 className="grow align-middle mb-9 max-w-2xl">
            {Info.Title}
              </h2>
              <ReactMarkdown className="paragraph line-break " remarkPlugins={[remarkGfm, remarkBreaks]}>{Info.Text}</ReactMarkdown>
        </div>
  </div>
  </div>
  </div>
  );
  else if (Info.Type === "B")
  return (
<div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <h3>{Info.Title}</h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
      <div className="grid grid-cols-0 md:grid-cols-2 items-center md:justify-around mx-auto gap-10 p-5">
        <div className="relative order-last md:order-first">
        <ReactMarkdown className="paragraph line-break " remarkPlugins={[remarkGfm, remarkBreaks]}>{Info.Text}</ReactMarkdown>
          <div className="p-8">
          <InfoButton Button={Info.Button}/>
          </div>
        </div>
        <div className="image-cropper">
          <Image className="roundedimage" 
            src={Info.Image.data.attributes.url} 
            alt={Info.Image.data.attributes.alternativeText}
            width={Info.Image.data.attributes.width}
            height={Info.Image.data.attributes.height}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"/>
        </div>
      </div>      
    </div>
  </div>
  );
  else return (
    <div className='p-8 mx-auto'>
    <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl rounded-2xl'>
      <h3>
      {Info.Title}
      </h3>
      <hr className="mt-3 mb-8 Hrswap"></hr>
      <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center gap-3">
        <div className="flex flex-col justify-between max-w-sm">
        <ReactMarkdown className="paragraph line-break " remarkPlugins={[remarkGfm, remarkBreaks]}>{Info.Text}</ReactMarkdown>
          <div className="p-8">
          <InfoButton Button={Info.Button}/>
          </div>
        </div>
        <div className="relative mx-auto rounded-lg overflow-hidden">
        <Image
            src={Info.Image.data.attributes.url} 
            alt={Info.Image.data.attributes.alternativeText}
            width={Info.Image.data.attributes.width}
            height={Info.Image.data.attributes.height}
            />
          </div>
      </div>
      </div>
    </div>
  );
}


export function InfoButton({Button}){
  if (Button == null) return (<></>);
  else return (
            <LiberaButton 
            href={Button.URL} 
            type={Button.NavType}
            >
              {Button.Text}
              </LiberaButton>
  )
}