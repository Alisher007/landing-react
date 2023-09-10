import Base from '../templates/Base'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import {FormControl} from '@mui/base/FormControl';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import { red } from '@mui/material/colors';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ForumIcon from '@mui/icons-material/Forum';

const Contact = () =>  {
	const pstyle = 
	{
		color:"white", 
		textDecoration: 'none', 
		textShadow: '2px 2px 9px rgba(0, 0, 0, 0.9), 2px 2px 9px rgba(0, 0, 0, 1)' 
	}
	const paperstyle = 
	{
		maxWidth:250, 
		padding: 1,
		marginBottom:2,
	}
	const iconstyle = 
	{
		color: red[500],
		marginBottom:1,
		fontSize:40
	}
	return (
		<Base>
			<Box m={4} p={4}></Box>
			<Box>
				<Typography variant="h5" component="div" align="center" sx={pstyle}>
					Contact Us
				</Typography>
			</Box>
			<Container maxWidth="lg" >
				<Box m={3} p={3}></Box> 
				<Grid container spacing={0}>
					<Grid item xs={12} sm={12} md={6} lg={6} container justify="center" align="center">
						
						<FormControl>
							<Card style={{maxWidth:450, margin:"0 auto", padding: "20px 5px"}}>
								<CardContent>
								<Typography variant="h6" gutterBottom align="center">
									Schedule a call
								</Typography>
								<Typography variant="body2" gutterBottom color="textSecondary" align="center" component="p">
									we will get back to you soon
								</Typography>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<TextField
											required
											id="outlined-required"
											label="Name"
											fullWidth
											/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											id="outlined-required"
											label="Email"
											fullWidth
											/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											required
											id="outlined-required"
											label="Message"
											fullWidth
											multiline rows={4}
											/>
									</Grid>
									<Grid item xs={12}>
										<Button type='submit' variant='contained' color="primary" fullWidth>Submit</Button>
									</Grid>
								</Grid>
								</CardContent>
							</Card>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6} align="center">
						<Paper align="center" sx={paperstyle}>
							<AccessTimeIcon gutterBottom sx={iconstyle} />
							<Typography variant="h6" gutterBottom align="center" component="p">
								Saves Your Time
							</Typography>
							<Typography variant="body2" gutterBottom align="center" component="p">
								Per sagittis faucibus aad cupidatat, fermentum vivamus turpis eleifend.
							</Typography>
						</Paper>
						<Paper align="center" sx={paperstyle}>
							<CreditCardIcon gutterBottom sx={iconstyle} />
							<Typography variant="h6" gutterBottom align="center" component="p">
								Cashless Payment
							</Typography>
							<Typography variant="body2" gutterBottom align="center" component="p">
								Per sagittis faucibus aad cupidatat, fermentum vivamus turpis eleifend.
							</Typography>
						</Paper>
						<Paper align="center" sx={paperstyle}>
							<ForumIcon gutterBottom sx={iconstyle} />
							<Typography variant="h6" gutterBottom align="center" component="p">
								Seamless Communication
							</Typography>
							<Typography variant="body2" gutterBottom align="center" component="p">
								Per sagittis faucibus aad cupidatat, fermentum vivamus turpis eleifend.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Box m={5} p={5}></Box> 

			</Container>
		</Base>
	);
}

export default Contact;
