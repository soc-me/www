import '../components/global.css'
import NextNProgress from 'nextjs-progressbar'
import { GLOBAL } from '@/GLOBAL'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-G227SJ7Q8W" strategy="afterInteractive" />
    <Script id='google-analytics' strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag("config", "G-G227SJ7Q8W");
        `}
    </Script>
    <NextNProgress color={GLOBAL.LOADER_COLOR} startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={false} />
    <Component {...pageProps} />
  </>
  )
}