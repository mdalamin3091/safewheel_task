import { Toaster } from 'react-hot-toast'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Providers from '../src/redux/Providers'
import Header from '../src/components/header'
import client from '../src/lib/client'
import '../src/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Providers>
				<Header />
				<Toaster
					toastOptions={{
						duration: 2000,
					}}
				/>
				<Component {...pageProps} />
			</Providers>
		</ApolloProvider>

	)
}
