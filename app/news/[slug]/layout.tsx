import '../../globals.css'
import MyNavbar from '../../navbar'
import MyModal from "../../modal"
import { Providers } from '../../providers';
import MyHead from '../../head';
import Head from 'next/head';

export const dynamic = 'auto',
  dynamicParams = true,
  runtime = 'nodejs',
  preferredRegion = 'auto'


export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) { 

  return (
    <>
      {children}
</>
  )
}
