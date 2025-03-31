import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { CentralDeAcessoProvider } from '../data/context/CentralDeAcessoContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={{
			colorScheme: 'dark',
		}}>
			<CentralDeAcessoProvider>
				<Component {...pageProps} />
			</CentralDeAcessoProvider>
		</MantineProvider>
	)
}
