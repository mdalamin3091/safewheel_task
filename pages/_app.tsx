import { Toaster } from 'react-hot-toast'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Providers from '../src/redux/Providers'
import client from '../src/lib/client'
import Layout from '../src/layout/layout'
import '../src/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Providers>
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
