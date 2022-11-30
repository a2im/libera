import Head from '../head'
import Header from '../header'
import AwardCategories from '../award-categories'
import LiberaQualifications from '../qualifications'
import { LiberaButtonExternal } from '../button'

export default function FAQ() {
  return (
    <div>
          <Head />
          <Header>FAQ</Header>
          <AwardCategories/>
          <LiberaQualifications/>
          <LiberaButtonExternal href='http://libera.awardsplatform.com' variant="Borderswap3">CLICK HERE<br></br>TO SUBMIT</LiberaButtonExternal>
    </div>
  )
}
