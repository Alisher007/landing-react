import React from 'react';
import Base from '../templates/Base'
import Fullscreenimage from '../templates/Fullscreenimage'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

const Home = () =>  {
	const jumbotron = 
	{
		backdropFilter:"blur(3px)", 
    	backgroundColor: 'rgba(0, 0, 0, 0.1)', 
		borderRadius: '50px',
		padding: '18px'
	}
	return (
		<Base>
			<Fullscreenimage>
				<Box sx={jumbotron}>
				<Typography variant="h2" gutterBottom align="center" >
					Welcome to Cleaing Service
				</Typography>
				<Typography variant="h5" gutterBottom align="center" >
					Where Cleanliness Meets Comfort
				</Typography>
				<Button type='submit' variant='contained'>Book a Cleaning</Button>
				</Box>
			</Fullscreenimage>

			<Box m={5} p={5}></Box> 

			<Container maxWidth="lg">
				<Grid container spacing={10}>
					<Grid item xs={12} md={6} lg={6}>
						<Paper elevation={10} sx={{padding:2, minHeight:100}}>
							<List dense={true}>
								<ListItem >
									<ListItemIcon>
										<CheckCircleOutlineIcon color='error' />
									</ListItemIcon>
									<ListItemText primary="Move In/Outs & Deep Cleaning services only $59" />
								</ListItem>
								<ListItem >
									<ListItemIcon>
										<CheckCircleOutlineIcon color='error' />
									</ListItemIcon>
									<ListItemText primary="Recurring discounts (monthly 5% off)" />
								</ListItem>
								<ListItem >
									<ListItemIcon>
										<CheckCircleOutlineIcon color='error' />
									</ListItemIcon>
									<ListItemText primary="Simple flat rate pricing for you & your family!" />
								</ListItem>
								<ListItem >
									<ListItemIcon>
										<CheckCircleOutlineIcon color='error' />
									</ListItemIcon>
									<ListItemText primary="Easy online booking" />
								</ListItem>
							</List>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<Paper elevation={10} sx={{padding:2, minHeight:200, margin: "auto"}} > 
							<Typography variant="h6"  align="center" >
								Get Your Place Cleaned and Healthy
							</Typography>
							<Typography variant="body2"  align="center">
								Where Cleanliness Meets Comfort
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Box m={5} p={5}></Box> 
			<Container maxWidth="lg">
				<Typography variant="h5" gutterBottom color="primary" align="center" my={6}>
					Our Happy Clients
				</Typography>
				<Grid container spacing={1}>
					<Grid container spacing={2} xs={12} md={6} lg={6}>
						<Grid  xs={4}>
							<Avatar alt="Miranda Snyder" src="https://source.unsplash.com/random/50x50?sig=1" sx={{ width: 85, height: 85 }} />
						</Grid>
						<Grid  xs={6} >
							<div>
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<br />
							<Typography variant="h6" gutterBottom>
								Miranda Snyder
							</Typography>
							<Typography variant="body2" >
								Eiusmod repellat, nascetur? Ex dicta? Tenetur, sociis senectus quidem vestibulum purus omnis sem gravida nam, similique beatae, cras!
							</Typography>
							</div>
						</Grid>
						<Grid  xs={4}>
							<Avatar alt="Debra Reyes" src="https://source.unsplash.com/random/50x50?sig=2" sx={{ width: 85, height: 85 }} />
						</Grid>
						<Grid  xs={6} >
							<div>
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<br />
							<Typography variant="h6" gutterBottom>
								Debra Reyes
							</Typography>
							<Typography variant="body2" >
								Eiusmod repellat, nascetur? Ex dicta? Tenetur, sociis senectus quidem vestibulum purus omnis sem gravida nam, similique beatae, cras!
							</Typography>
							</div>
						</Grid>
					</Grid>
					<Grid container spacing={2} xs={12} md={6} lg={6}>
						<Grid xs={4}>
							<Avatar alt="Harold Harrison" src="https://source.unsplash.com/random/50x50?sig=3" sx={{ width: 85, height: 85 }} />
						</Grid>
						<Grid xs={6} >
							<div>
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<br />
							<Typography variant="h6" gutterBottom>
								Harold Harrison
							</Typography>
							<Typography variant="body2" >
								Eiusmod repellat, nascetur? Ex dicta? Tenetur, sociis senectus quidem vestibulum purus omnis sem gravida nam, similique beatae, cras!
							</Typography>
							</div>
						</Grid>
						<Grid xs={4}>
							<Avatar alt="Kyle Romero" src="https://source.unsplash.com/random/50x50?sig=4" sx={{ width: 85, height: 85 }} />
						</Grid>
						<Grid xs={6} >
							<div>
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<StarIcon color='error' />
							<br />
							<Typography variant="h6" gutterBottom>
								Kyle Romero
							</Typography>
							<Typography variant="body2" >
								Eiusmod repellat, nascetur? Ex dicta? Tenetur, sociis senectus quidem vestibulum purus omnis sem gravida nam, similique beatae, cras!
							</Typography>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Box m={5} p={5}></Box> 

		</Base>
	);
}

export default Home;
