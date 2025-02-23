'use client'
import React from 'react'
import { Alert, List, Typography } from '@mui/material'
import { UserCard } from './UserCard'
import { User } from '@/types/User'
import { CheckCircleOutlined } from '@mui/icons-material'

export const UserCards = ({ users }: { users: User[] }) => {
	const [selectedUser, setSelectedUser] = React.useState<User | null>(null)

	const handleUserSelection = (event: React.MouseEvent<HTMLElement, MouseEvent>, user: User) => {
		setSelectedUser(user)
	}

	return (
		<>
			<Typography
				variant='h4'
				component='h1'
				sx={{ mb: 2 }}>
				Usuarios
			</Typography>

			{selectedUser && (
				<Alert
					icon={<CheckCircleOutlined fontSize='inherit' />}
					severity='success'>
					{selectedUser.name}
				</Alert>
			)}

			<List sx={{ width: '100%', maxWidth: 360 }}>
				{users.map((user) => (
					<UserCard
						key={user.id}
						user={user}
						selected={selectedUser?.id === user.id}
						onSelect={handleUserSelection}
					/>
				))}
			</List>
		</>
	)
}
