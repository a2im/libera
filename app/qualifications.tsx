'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


export default function LiberaQualifications () {
    return (
      <div className="bg-sky-50 mx-auto">
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

