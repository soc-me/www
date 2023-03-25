import '../components/global.css'
import NextNProgress from 'nextjs-progressbar'
import { GLOBAL } from '@/GLOBAL'
// light blue color: #2e9cca

export default function App({ Component, pageProps }) {
  return (
  <>
    <NextNProgress color={GLOBAL.LOADER_COLOR} startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={false} />
    <Component {...pageProps} />
  </>
  )
}