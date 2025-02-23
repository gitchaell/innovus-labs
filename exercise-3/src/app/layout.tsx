import './globals.css'
import type { Metadata } from 'next'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import ModeSwitch from '@/components/ModeSwitch'
import theme from '@/theme'
import { AnalyticsProvider } from '@/context/AnalyticsContext'

export const metadata: Metadata = {
	title: 'Exercise 3',
	description: 'Innovus Labs Exercise 3',
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
						<AnalyticsProvider>{children}</AnalyticsProvider>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
