'use client'
import { useState } from 'react'
import { Camera, CameraResultType } from '@capacitor/camera'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

export default function Home() {
	const [photo, setPhoto] = useState<string | null>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const handleTakePhoto = async (): Promise<void> => {
		setErrorMessage(null)

		Camera.getPhoto({
			resultType: CameraResultType.DataUrl,
			allowEditing: true,
			correctOrientation: true,
			webUseInput: false,
		})
			.then((image) => {
				setPhoto(image.dataUrl || null)
			})
			.catch((error) => {
				setErrorMessage('Camera not supported in this environment')
				console.error('Camera not supported in this environment', error)
			})
	}

	const handleCloseMessage = () => {
		setErrorMessage(null)
	}

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
				<Typography variant='h5'>Capacitor Camera</Typography>

				<Button
					variant='contained'
					onClick={handleTakePhoto}>
					Tomar Foto
				</Button>

				{photo && (
					<Card>
						<CardMedia
							component='img'
							image={photo}
							alt='Foto'
						/>
					</Card>
				)}

				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={errorMessage !== null}
					onClose={handleCloseMessage}
					message={errorMessage || ''}
					key='top-center'
				/>
			</Box>
		</Container>
	)
}
