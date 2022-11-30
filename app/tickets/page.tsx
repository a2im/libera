import Head from '../head'
import Header from '../header'
import { SocialFollowBlack } from '../SocialFollow'

export default function Tickets() {
  return (
    <div>
          <Head />
          <Header>Tickets</Header>
          <div className="max-w-4xl mx-auto mb-8"> 
            <div className='flex max-w-4xl mb-10 mx-auto gap-10 justify-center'> 
              <div className='LiberaBorder mx-auto pb-10 p-4'>
                <h3 className="mb-6 text-center">
                  COMING SOON 
                </h3>
                <h4 className="text-center">Follow us on social media for the latest updates and subscribe
to the Libera Awards mailing list to hear first about ticket availability!</h4>
              <div className="max-w-lg pt-20 mx-auto">
              <SocialFollowBlack />
              </div>
              </div>
              </div>
          </div>
    </div>
  )
}
