'use client';

import { GET_VOTING_STEPS } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export default function VoterGuidelines() {
    const { loading, error, data } = useQuery(GET_VOTING_STEPS,{});
      if (loading) return <div className="animate-pulse h-[300px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
        <div className="max-w-4xl relative py-5 flex flex-col mx-auto justify-evenly gap-10">
        {/* Map through the data */}
        {data?.liberaVotingSteps?.data.map(steps => (
                <div key={steps.id} className='p-8 mx-auto'>
                <div className='max-w-4xl p-8 mx-auto bg-sky-50 shadow-2xl'>
                  <h3>
                    {steps.attributes.Title}
                  </h3>
                  <hr className="mt-3 mb-8 Hrswap"></hr>
                  <div className="grid grid-cols-0 md:grid-cols-2 mx-auto justify-center gap-3">
                    <div>
                  <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{steps.attributes.Description}</ReactMarkdown>
                  </div>
                    <div className="relative mx-auto">
                      <Image src={steps.attributes.image.data.attributes.url} 
                      alt={steps.attributes.image.data.attributes.alternativeText} 
                      width={steps.attributes.image.data.attributes.width}
                      height={steps.attributes.image.data.attributes.height}
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" />
                      </div>
                  </div>
                  </div>
                </div>
              )
            )}
        </div>
    );
}
