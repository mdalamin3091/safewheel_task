import { Toaster } from 'react-hot-toast'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import Providers from '../src/redux/Providers'
import client from '../src/lib/client'
import Layout from '../src/layout/layout'
import '../src/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Providers>
			<Head>
				<title>Safewheel - Login</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon.png"
				/>
			</Head>
				<Layout>
					<Toaster
						toastOptions={{
							duration: 2000,
						}}
					/>
					<Component {...pageProps} />
				</Layout>
			</Providers>
		</ApolloProvider>

	)
}
