import '../styles/globals.css'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="red"
        startPosition="0.1"
        stopDelayMs="100"
        height="4"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
