'use client'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useAnalytics } from '@/context/AnalyticsContext'

export default function Home() {
	const { state, dispatch } = useAnalytics()

	return (
		<Container maxWidth='lg'>
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Typography variant='h5'>App</Typography>

				<List>
					{['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
						<ListItem
							key={index}
							onMouseOver={() => dispatch({ type: 'HOVER' })}>
							{item}
						</ListItem>
					))}
				</List>

				<Button
					variant='contained'
					onClick={() => dispatch({ type: 'CLICK' })}>
					Click Me
				</Button>

				<Typography variant='h5'>Analytics Dashboard</Typography>

				<div>
					<Typography>Hovers: {state.hoverEvents}</Typography>
					<Typography>Clicks: {state.clickEvents}</Typography>
				</div>
			</Box>
		</Container>
	)
}
