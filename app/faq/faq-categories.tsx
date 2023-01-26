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

  export function AwardCategories() {
    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: "Award Categories & Descriptions"
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
<div id="Award Categories & Descriptions" className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
                      <div className=" pb-3 pt-12">
                      <h3 className="px-5">AWARD CATEGORIES & DESCRIPTIONS</h3>
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

export function AwardCategories2 () {
    return (

<div id="Award Categories & Descriptions" className="max-w-4xl mx-auto LiberaBorder">
                      <div className=" pb-3 pt-12">
                      <h3 className="px-5">AWARD CATEGORIES & DESCRIPTIONS</h3>
              <div>
            <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      Record of the Year
                    </AccordionItemButton>                
                  </AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best record 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Video of the Year
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Most impactful or visually compelling music video. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Label of the Year (15+ employees)
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best independent label with 15 or more worldwide full-time employees. The total number of employees is based on the number of worldwide employees of the parent label.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Label of the Year (6-14 employees)
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best independent label with 6-14 worldwide full-time employees. The total number of employees is based on the number of worldwide employees of the parent label.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Label of the Year (0-5 employees)
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best independent label with 5 or fewer worldwide full-time employees. The total number of employees is based on the number of worldwide employees of the parent label.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
A2IM Humanitarian Award
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Program or work that a person, artist or company has done to better the world at large through or with the independent music community.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                            <AccordionItemHeading>
                      <AccordionItemButton>
Best Live/Livestream Act
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best live/livestream individual performance that took place in the calendar year. If the individual performance took place after the submission process is closed, but within the eligibility period, you must send a link to the performance by December 31, 2022. If you are submitting for an entire series you must choose one individual performance to represent the series.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Outlier Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best record that does not fit other, traditional Libera Awards categories. Recordings nominated for this category cannot be nominated for other categories. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Re-Issue
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                Best re-issue record with at least fifty percent (50%) of the recordings first commercially available prior to January 1, 2018. This includes compilations. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Short-Form Video
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                Best utilization of independent music in a short-form video, or, short-form video created by an independent artist or label. Video must have been made public for the first time within the submission period. All music featured must be independent per Libera Awards guidelines. Length of content must be two minutes or less.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Sync Usage
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Open to any synchronization that has appeared, for the first time, within the US during the eligibility period. The release date of the synced composition does not need to be within the eligibility period.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Breakthrough Artist
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                      Artist or group that have significantly raised their profile and has acheived breakthrough commercial success, in the United States, for the first time, during the eligibility period. &quot;Supergroups&quot; are not eligibile for this category. 
                      </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton>
Creative Packaging
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best or most creative packaging, physical or digital including bundled packages, premium offerings or artwork/design packaging.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Independent Champion
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    The non-label entity or individual that best supported and championed Independent labels and artists this year. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton>
Marketing Genius
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    The most innovative/creative marketing campaign for a record released during the eligibility period.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
Self-Released Record of the Year
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    This category celebrates the entreprenurial spirit of independent self-releasing artists. The submission must be fully self-released by an individual artist or group.  Records co-released with record labels or as a subsidary of a parent company are not eligible. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
            <AccordionItemButton>
Best Alternative Rock Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best alternative rock record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best American Roots Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best American roots record. American roots includes bluegrass, gospel, old time music, jug bands, Appalachian folk, blues, Cajun, and Native American music.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Blues Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                <h4>
                    Best blues record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Classical Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best classical record; this category includes all periods and all sizes of ensemble or solo. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Country Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best country record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Dance Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best dance record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Electronic Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best electronic record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Folk Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best folk record. Characterized as traditional music that originated from an oral tradition which was passed down through generations. This category includes contemporary interpretations of folk music. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Global Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best global record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Heavy Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best heavy record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Hip-Hop/Rap Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best rap/hip-hop record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Jazz Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best jazz record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Latin Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best Latin record. Eligible records contain at least 51% of lyrics in Spanish, Portuguese, or otherwise accepted languages.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Pop Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best pop record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Punk Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best punk record. Includes all iterations and sub-genres of punk and hardcore music.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best R&B Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best R&B record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Remix
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best remix. A qualifying remix is a work that uses material from the original composition to create a new and different recording. 
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Rock Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best rock record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Singer-Songwriter Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best singer/songwriter record. Artist who writes, composes, and performs their own musical material, including lyrics and melodies.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Soul/Funk Record
</AccordionItemButton>
</AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best soul/funk record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem><AccordionItem>
            <AccordionItemHeading>
                      <AccordionItemButton>
Best Spiritual Record
</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h4>
                    Best spiritual record.
                    </h4>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        </div>
        </div>
    )
}

export function LiberaQualifications() {
    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: "General Award Eligibility Rules"
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
        <div id="General Award Eligibility Rules" className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
        <div className="max-w-4xl text-left mx-auto LiberaBorder">
          <div className="mx-auto pb-3 pt-12">
          <h3 className="px-5"> GENERAL ELIGIBILITY RULES</h3>
          <hr className="mt-3 mx-6 mb-3 Hrswap"></hr>
          <h4 className="px-5">Celebrating the best in independent music; All artists / submissions must be independently owned/controlled, and released in the United States and its Territories during the period between January 1, 2022 through December 31, 2022.</h4>
          </div>
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
            <div className="px-5 pb-3 pt-8">
<h4 className="font-bold">**Please keep in mind that if nominated, the content that you submit will be used for video modules, promotional graphics, or advertisement for The Libera Awards.**
          </h4>
          </div>

        </div>
        </div>
    );
}

export function LiberaQualifications2 () {
    return (
      <div id="General Award Eligibility Rules" className="bg-sky-50 mx-auto">
                  <div className="max-w-4xl text-left mx-auto LiberaBorder">
                    <div className="mx-auto pb-3 pt-12 px-5">
                    <h3> GENERAL ELIGIBILITY RULES</h3>
                    <h4>Celebrating the best in independent music; All artists / submissions must be independently owned/controlled, and released in the United States and its Territories during the period between January 1, 2022 through December 31, 2022.</h4>
                    </div>
                  <Accordion>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  GENRE CATEGORY ELIGIBILITY
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>

<h4>Single Tracks, EPs, and Albums can qualify for all categories listed as &quot;Best XXX Record.&quot;
<br></br><br></br>View all categories on our <Link href="/faq" className="font-bold invert">FAQ page.</Link> 
</h4>
</AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  CAN I EDIT MY ENTRY AFTER I SUBMIT?
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>

<h4>You may edit your entry after submitting, up until the entry deadline.</h4>
</AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  FIELDS
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
<h4>Please make sure all your personal details are entered accurately, including contact details, as this will be used in the awards presentation if selected as a finalist.  If selected as a finalist, submitted materials may be used for event promo purposes.</h4>
</AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  CAN I SUBMIT FOR MORE THAN ONE CATEGORY?
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
<h4>You may enter a submission for more than one category as long as the work submitted meets the criteria.
<br></br>
You can use the ‘copy’ feature to create a copy of your entry and change the category as required.</h4>
</AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  HOW MUCH DOES IT COST TO SUBMIT?
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
<h4>
Entry fees may be paid by credit card only and must be paid online at time of completing submissions.
<br></br>
<br></br>
If you are submitting for the&nbsp;
<span className="font-bold invert">Self-Released Record of the Year</span> 
&nbsp;Category, you can save $20 per submission in this category by registering as an&nbsp;
<span>
<Link
  href="https://a2im.org/artist/"
  target="_blank"
  className="hover:font-medium invert"
  rel="noopener noreferrer">
  
      A2IM:Artist Member.</Link></span> 
      &nbsp;Membership is <span className="font-bold invert hover:font-normal hover:italic active:text-[300px] active:font-normal">FREE.</span>
<br></br>
<br></br>
If your submissions have not been paid for at close of entry they will not be included for judging.**</h4>
              </AccordionItemPanel>
          </AccordionItem>
          </Accordion>
          <div className="px-5 pb-3 pt-12">
<h4 className="font-bold">**Please keep in mind that if nominated, the content that you submit will be used for video modules, promotional graphics, or advertisement for The Libera Awards.**
          </h4>
          </div>

        </div>
        </div>
    );
 }

 export function AttachmentsCriteria() {
    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: "Award Attachments Criteria"
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
        <div id="Award Attachments Criteria" className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
        <div className="max-w-4xl text-left mx-auto LiberaBorder">
          <div className="mx-auto pb-3 pt-12">
        <h3 className="px-5">ATTACHMENTS CRITERIA</h3>
        <hr className="mt-3 mx-6 mb-3 Hrswap"></hr>
        <h4 className="px-5">The following attachments are required in order to complete submission</h4>
          </div>
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
            <div className="px-5 pb-3 pt-8">
<h4 className="font-bold">**Please keep in mind that if nominated, the content that you submit will be used for video modules, promotional graphics, or advertisement for The Libera Awards.**
          </h4>
          </div>
        </div>
        </div>
    );
}
 export function AttachmentsCriteria2(){
    return (
        <div id="Award Attachments Criteria" className="mx-auto">
                  <div className="max-w-4xl text-left mx-auto LiberaBorder">
                    <div className="mx-auto pb-3 pt-12 px-5">
        <h3>ATTACHMENTS CRITERIA</h3>
        <h4>The following attachments are required in order to complete submission</h4>
          </div>
          <Accordion>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  GENERAL UPLOAD LIMITS
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h4>A maximum of ten uploads/links will be accepted for each submission. </h4>
                  </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  COVER ART
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
<h4>Cover Art: Please submit Hi-Res JPEG or PNG files, and label the image “ALBUM TITLE_LABEL_COVER”</h4>
</AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  LINKS
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h4>URLs: Provide website URL’s to the publicly accessible campaign or active URL of a landing page if applicable. Please ensure any applicable usernames and passwords (for access) are provided and active.</h4>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <div className="px-5 pb-3 pt-12">
            <h3>WE ALSO ENCOURAGE YOU TO ATTACH THE FOLLOWING ADDITIONAL ASSETS:</h3>
            </div>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  ADDITIONAL ARTWORK
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
                <h4>Supporting images outside of Cover Art such as press images are encouraged. Please label them as “Artwork”.</h4>
                </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  VIDEO
                  </AccordionItemButton>                
                </AccordionItemHeading>
                <AccordionItemPanel>
<h4>Attachments can be uploaded directly to this award platform or may be hosted on a video platform such as YouTube or Vimeo.</h4>
</AccordionItemPanel>
              </AccordionItem>
          </Accordion>
          <div className="px-5 pb-3 pt-12">
<h4 className="font-bold">**Please keep in mind that if nominated, the content that you submit will be used for video modules, promotional graphics, or advertisement for The Libera Awards.**
          </h4>
          </div>
        </div>
        </div>
    );
 }

 export function TicketsFAQ() {
    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: "Tickets"
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
<div id="Tickets" className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
                      <div className="max-w-4xl mx-auto pb-3 pt-12">
                      <h3 className="px-5">Tickets FAQ</h3>
                      <hr className="mt-3 mx-6 mb-3 Hrswap"></hr>
              <div>
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
        </div>
    );
}

export function VenueFAQ() {
    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: "Venue"
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
<div id="Venue" className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
                      <div className=" pb-3 pt-12">
                      <h3 className="px-5">Venue FAQ</h3>
                      <hr className="mt-3 mx-6 mb-3 Hrswap"></hr>
              <div>
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
        </div>
    );
}

export function VotingFAQ() {
    const { loading, error, data } = useQuery(GET_ALL_FAQ, { 
      variables: {
        PublicationState: "LIVE",
        Name: "Libera Awards",
        Category: "Voting"
      }});
      if (loading) return <div className="animate-pulse h-[50px] w-[300px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
      if (error) return <p>Error</p>
    return (
<div id="Voting" className="max-w-4xl bg-sky-50 rounded-2xl shadow-2xl mx-auto LiberaBorder my-5">
                      <div className=" pb-3 pt-12">
                      <h3 className="px-5">Voting FAQ</h3>
                      <hr className="mt-3 mx-6 mb-3 Hrswap"></hr>
              <div>
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
        </div>
    );
}

export default function FAQCategories(){
    return(
        <>
        <AwardCategories/>
        <LiberaQualifications/>
        <AttachmentsCriteria/>
        <TicketsFAQ/>
        <VenueFAQ/>
        <VotingFAQ/>
        </>
    )
}

