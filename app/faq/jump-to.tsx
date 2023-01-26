import Link from "next/link"

export const FAQCategories = [
    {id: 1, title:"Award Categories & Descriptions"},
    {id: 2, title:"General Award Eligibility Rules"},
    {id: 3, title:"Award Attachments Criteria"},
    {id: 4, title:"Tickets"},
    {id: 5, title:"Venue"},
    {id: 6, title:"Voting"},
]

export function JumpTo() {
    return (
        <div className="max-w-2xl mx-auto ">
            <h3 className="text-md text-center">Jump to:</h3>
        <div className='flex flex-wrap mt-10 gap-4 mb-8 text-center justify-center'>
        {FAQCategories.map(Category => (
          <button key={Category.id} id={JSON.stringify(Category.id)} className="p-10 drop-shadow-4xl max-w-64 Borderswap3 mx-auto my-auto hover:bg-libera-pink hover:text-white Borderswap3 hover:scale-105">
<Link href={`/faq#${Category.id}`} prefetch={false} passHref replace legacyBehavior>
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