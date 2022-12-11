import Head from 'next/head';
import { siteTitle } from '../../lib/constants'

export default function Meta() {
  return (
    <Head>
         <link rel="icon" href="/favicon.ico" />
        <meta
          name="Kaffeparty"
          content="simple test page built with bootstrap and nextjs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={siteTitle} />
    </Head>
  )
}
