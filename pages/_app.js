import '../components/global.css'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
  return (
  <>
    <NextNProgress color="blue" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    <Component {...pageProps} />
  </>
  )
}