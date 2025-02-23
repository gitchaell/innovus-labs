import './globals.css'
import type { Metadata } from 'next'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import ModeSwitch from '@/components/ModeSwitch'

export const metadata: Metadata = {
	title: 'Exercise 1',
	description: 'Innovus Labs Exercise 1',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body>
				<InitColorSchemeScript attribute='class' />
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<ModeSwitch />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
