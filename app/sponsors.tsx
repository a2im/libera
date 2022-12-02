'use client';

import { GET_ALL_SPONSORS } from "../lib/queries";
import { useQuery } from '@apollo/client';
import Link from "next/link";
import Image from "next/image";


export function SponsorTier1() {
    const { loading, error, data } = useQuery(GET_ALL_SPONSORS, { 
      variables: {
        Level: "Tier 1", 
        Title: "2023 Libera Awards"
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      console.log(data)
    return (
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-10 items-center">
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="max-h-5 mygrow p-8">
                  <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={sponsors.attributes.Logo.data.attributes.url}
                    height={sponsors.attributes.Logo.data.attributes.height} 
                    width={sponsors.attributes.Logo.data.attributes.width} 
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    />
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
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      console.log(data)
    return (
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-10 items-center">
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="mygrow px-20">
                  <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={sponsors.attributes.Logo.data.attributes.url}
                    height={sponsors.attributes.Logo.data.attributes.height} 
                    width={sponsors.attributes.Logo.data.attributes.width} 
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    />
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
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      console.log(data)
    return (
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-10 items-center">
        {/* Map through the data */}
        {data.sponsors.data.map(sponsors => (
                <div key={sponsors.id} className="mygrow px-20">
                  <Link href={sponsors.attributes?.URL} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={sponsors.attributes.Logo.data.attributes.url}
                    height={sponsors.attributes.Logo.data.attributes.height} 
                    width={sponsors.attributes.Logo.data.attributes.width} 
                    alt={sponsors.attributes.Logo.data.attributes.alternativeText} 
                    />
                    </Link>
                </div>
              )
            )}
        </div>
    );
}