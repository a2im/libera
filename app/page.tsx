
import Head from './head'
import { Intro, Intro2, Intro3 } from './intro'


export default function Home() {
  return (
    <div>
          <Head>Libera Awards</Head>
          <div className="pt-20">
          <Intro />
          <div className="py-8 md:hidden" />
          <Intro2 />
          <div className="py-8 md:hidden" />
          <Intro3 />
        </div>
    </div>
  )
}
