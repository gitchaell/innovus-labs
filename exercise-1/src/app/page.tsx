import React from 'react'
import { Box, Container } from '@mui/material'
import { UserCards } from '@/components/UserCards'
import { User } from '@/types/User'

async function getUsers(): Promise<User[]> {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	if (!res.ok) throw new Error('Failed to fetch users')
	return res.json()
}

export default async function Home() {
	const users = await getUsers()

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
				<UserCards users={users} />
			</Box>
		</Container>
	)
}
