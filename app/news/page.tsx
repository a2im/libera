import { LiberaPostsList } from './posts'
import Footer from '../footer'

export default function News() {
  return (
    <div>
          <title>Libera Awards - NEWS</title>
          <div className="relative grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  NEWS
  </h1>
  </div>
          <LiberaPostsList/>
          <Footer />
    </div>
  )
}
