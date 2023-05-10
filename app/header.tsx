import Image from "next/image";
import LiberaButton from "./button"

export default function Header({Header}) {
  if (Header.Type === "A") return (
    <>
      <div className="max-w-2xl flex flex-col justify-center gap-0 md:mx-auto relative mb-20">
        <div className="mx-auto relative">
          <Image priority={true} 
            src={Header.Image.data.attributes.url} 
            alt={Header.Image.data.attributes.alternativeText}
            width={Header.Image.data.attributes.width}
            height={Header.Image.data.attributes.height}/>
        </div>
      </div>
    </>
  ); else return (
    <>
          <div className="flex flex-col md:flex-row justify-center text-center mx-auto items-center content-center">
            {Header.Button.map(Button =>(
              <LiberaButton key={Button?.id} type={Button?.NavType} href={Button?.URL}>{Button.Text}</LiberaButton>
            ))}
        </div>
        <div className="max-w-3xl mx-auto">
            <h4 className="p-8">{Header.Text}</h4>
            </div>
            <div className="mx-auto justify-center items-center">
                  <Image 
                    src={Header.Ad.data.attributes.url}
                    height={Header.Ad.data.attributes.height}
                    width={Header.Ad.data.attributes.width}
                    alt={Header.Ad.data.attributes.alternativeText}
                    className="mx-auto"
                    />
        </div>
    </>
  )
}

