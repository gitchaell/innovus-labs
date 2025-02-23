import './globals.css'
import type { Metadata } from 'next'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import ModeSwitch from '@/components/ModeSwitch'
import theme from '@/theme'

export const metadata: Metadata = {
	title: 'Exercise 2',
	description: 'Innovus Labs Exercise 2',
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
