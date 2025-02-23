'use client'
import { User } from '@/types/User'
import { ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export const UserCard = ({
	user,
	selected,
	onSelect,
}: {
	user: User
	selected: boolean
	onSelect: (event: React.MouseEvent<HTMLElement, MouseEvent>, user: User) => void
}) => {
	return (
		<ListItemButton
			alignItems='flex-start'
			sx={{ py: 2 }}
			className='border-b'
			selected={selected}
			onClick={(event) => onSelect(event, user)}>
			<ListItemAvatar>
				<Avatar
					alt={user.name}
					src={`https://avatar.iran.liara.run/username?username=${user.name.replace(' ', '+')}`}
				/>
			</ListItemAvatar>

			<ListItemText
				primary={user.name}
				secondary={
					<React.Fragment>
						<Typography
							component='span'
							variant='body2'
							sx={{ color: 'text.primary', display: 'inline' }}>
							{user.email + ' — ' + user.website}
						</Typography>
					</React.Fragment>
				}
			/>
		</ListItemButton>
	)
}
