import Link from "next/link"
import Image from "next/image"

export default function AdBanner(){
return(
<div className="mx-auto max-w-3xl">
      <Link href="https://nettwerk.com/" >
        <Image className="adbanner" priority={true} unoptimized={true} src="/images/NettA2IM_728x120longRev4.gif" alt="Nettwerk banner ad" width={728} height={120}/>
      </Link>
      </div>
)
}