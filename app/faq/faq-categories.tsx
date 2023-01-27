'use client';

import Link from 'next/link';
import { GET_ALL_FAQ } from "../../lib/gql/queries";
import { useQuery } from '@apollo/client';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';

  export default function GetFAQ({Category}) {

    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: Category,
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
<div id={Category} className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
                      <div className=" pb-3 pt-12">
                      <h3 className="px-5">{Category}</h3>
                      <hr className="mt-3 mx-6 mb-3 Hrswap"></hr>
        <Accordion>
        {data?.faqItems.data.map(faqItems => (
                    <AccordionItem key={faqItems.id}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      {faqItems.attributes.Question}
                    </AccordionItemButton>                
                  </AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>
                    {faqItems.attributes.Answer}
                    </ReactMarkdown>
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
              )
            )}
            </Accordion>
        </div>
        </div>
    );
}

export const FAQCategories = [
    {id: 1, title:"GENERAL"},
    {id: 2, title:"TICKETING"},
    {id: 3, title:"ACCESSIBILITY"},
    {id: 4, title:"ACCOMODATIONS"},
    {id: 5, title:"PRESS"},
    {id: 6, title:"AWARDS & CATEGORIES"},
]

export function JumpTo() {
    return (
        <div className="max-w-xl mx-auto p-5">
            <h3 className="text-md text-center">Jump to:</h3>
        <div className='flex flex-wrap mt-10 gap-2 mb-8 text-center justify-between'>
        {FAQCategories.map(Category => (
          <button key={Category.id} className="p-10 drop-shadow-4xl max-w-64 Borderswap3 mx-auto my-auto hover:bg-libera-pink hover:text-white Borderswap3 hover:scale-105">
<Link href={`/faq#${Category.title}`} prefetch={false} passHref replace legacyBehavior>
                <h3 className="align-middle text-xl font-normal px-4 text-white truncate tracking-tighter leading-tight">
                {Category.title}
                </h3>
            </Link>
          </button>
        ))}
          </div>
          </div>
    );
}