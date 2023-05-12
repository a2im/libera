'use client';

import { GET_ALL_SPONSORS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";

export function SponsorTitle() {
  const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
    variables: {
      Level: "Title Sponsor", 
      Title: "2023 Libera Awards"
    }});
    if (loading) return <div className="animate-pulse h-[300px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
    if (error) return <p>Error</p>
  return (
      <div className="max-w-xl relative py-5 flex mx-auto justify-evenly gap-10">
      {/* Map through the data */}
      {data?.sponsors.data.map(sponsors => (
              <div key={sponsors.id} className="flex relative hover:scale-105 justify-evenly">
                <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[300px] h-[200px] mx-auto justify-evenly">
                <Image 
                  src={sponsors.attributes.Logo.data.attributes.url}
                  fill={true}
                  alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                  style={{ objectFit: 'contain'}}
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                  />
                  </div>
                  </Link>
              </div>
            )
          )}
      </div>
  );
}

export function SponsorTier1() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 1", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <div className="animate-pulse h-[300px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
        <div className="relative py-5 grid grid-cols-0 md:grid-cols-2 mx-auto justify-evenly gap-10">
        {/* Map through the data */}
        {data?.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="flex relative hover:scale-105 justify-evenly">
                  <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-[300px] h-[200px] mx-auto justify-evenly">
                  <Image 
                    src={sponsors.attributes.Logo.data.attributes.url}
                    fill={true}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    style={{ objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                    />
                    </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export function SponsorTier2() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 2", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <div className="animate-pulse h-[300px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
        <div className="px-10 relative flex flex-col md:flex-row mx-auto gap-5">
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="relative hover:scale-105 p-4 grow shrink mx-auto">
                  <Link className="relative" href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[300px] h-[200px] mx-auto justify-evenly">
                  <Image
                    src={sponsors.attributes.Logo.data.attributes.url}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText}
                    fill={true}
                    style={{ objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/>
              </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export function SponsorTier3() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 3", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <div className="animate-pulse h-[128px] w-[128px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
        <div className="relative pb-20 py-5  flex flex-col md:flex-row  gap-20 mx-auto">
        {/* Map through the data */}
        {data?.sponsors?.data.map(sponsors => (
                <div key={sponsors.id} className="mx-auto relative hover:scale-105 w-[128px] h-[128px]">
                  <Link className="relative" href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-[128px] h-[128px] mx-auto justify-evenly">
                  <Image
                    src={sponsors.attributes.Logo.data.attributes.url}
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    fill={true}
                    style={{ objectFit: 'contain'}}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" 
                    />
                    </div>
                    </Link>
                </div>
              )
            )}
        </div>
    );
}

export default function SponsorFooter () {
  return (
    <div className="relative">
    <div className="relative z-40 flex flex-col mx-auto py-20">
      <div className="absolute h-[190px] w-[640px] bottom-0 right-10">
  <Image fill={true} sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
  src="/images/stairs.png" alt="Libera Awards stairs" priority={true} />
  </div>
    <div className="flex flex-col max-w-6xl mx-auto p-8 bg-sky-50 shadow-2xl rounded-2xl text-center">
      <h3 className="max-w-xl text-center mx-auto">Our Sponsors</h3>
      <hr className="mt-3 mb-5 Hrswap"></hr>
        <SponsorTitle/>
        <hr className="mb-8 Hrswap"></hr>
        <SponsorTier1/>
        <hr className="mb-8 Hrswap"></hr>
        <SponsorTier2/>
        <hr className="mb-8 Hrswap"></hr>
        <SponsorTier3/>
    </div>
    </div>
    </div>
  )
}