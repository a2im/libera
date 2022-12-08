import Header from '../header'
import AwardCategories from '../award-categories'
import LiberaQualifications from '../qualifications'
import { LiberaButtonExternal } from '../button'

export default function FAQ() {
  return (
    <>
          <title>Libera Awards - Frequently Asked Questions</title>
          <Header>FAQ</Header>
          <AwardCategories/>
          <LiberaQualifications/>
          <LiberaButtonExternal href='http://libera.awardsplatform.com'>CLICK HERE TO SUBMIT</LiberaButtonExternal>
    </>
  )
}
