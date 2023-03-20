import '../components/global.css'
import NextNProgress from 'nextjs-progressbar'
// light blue color: #2e9cca

export default function App({ Component, pageProps }) {
  return (
  <>
    <NextNProgress color="#2e9cca" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    <Component {...pageProps} />
  </>
  )
}