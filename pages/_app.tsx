import { Toaster } from 'react-hot-toast'
import type { AppProps } from 'next/app'
import Providers from '../redux/Providers'
import Header from '../components/header'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Header />
      {/* <body className="bg-primary_bg h-screen font-Inter"> */}
      <Toaster
            toastOptions={{
              duration: 2000,
            }}
          />
        <Component {...pageProps} />
      {/* </body> */}
    </Providers>
  )
}
