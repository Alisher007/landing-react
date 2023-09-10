import Base from '../templates/Base'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const About = () =>  {
	const pstyle = 
	{
		color:"white", 
		textDecoration: 'none', 
		textShadow: '2px 2px 9px rgba(0, 0, 0, 0.9), 2px 2px 9px rgba(0, 0, 0, 1)' 
	}
	return (
		<Base>
			<Box m={4} p={4}></Box>
			<Box>
				<Typography variant="h5" component="div" align="center" sx={pstyle} >
					About Us
				</Typography>
			</Box>
			<Box m={3} p={3}></Box> 

			<Container maxWidth="lg" >
				
				<Grid container spacing={0}>
					<Grid item xs={12} sm={12} md={5} lg={4} container justify="center" align="center">
						<Card sx={{ minWidth:350}}>
							<CardMedia
								sx={{ height: 450 }}
								image="https://source.unsplash.com/random/350x450?sig=1"
								title="green iguana"
							/>
							<CardContent align="center">
								<Typography gutterBottom variant="h5" component="div">
								Alisher Khalikulov
								</Typography>
								<Typography variant="body2" color="text.secondary">
								Founder
								</Typography>
							</CardContent>
						</Card>
						
					</Grid>
					<Grid item xs={12} sm={12} md={7} lg={8}>
						<Typography variant="body2" component="div">
							Message from the founder
						</Typography>
						<Typography variant="h6" component="div" mt={2}>
							"Cleanliness is not just our profession; it's our passion. We believe that a clean environment is the foundation of a happy and healthy life. At wurgut.com, we're dedicated to transforming spaces, one clean at a time."
						</Typography>
						<Typography variant="subtitle1" component="div" mt={2}>
						Welcome to wurgut.com, where cleanliness meets comfort. Founded with a passion for transforming spaces, we take pride in providing top-notch cleaning services tailored to your specific needs.
						</Typography>

					</Grid>
				</Grid>

				<Box m={2} p={2}></Box> 
				<Grid container spacing={3} my={2}>
					<Grid item xs={12} sm={12} md={4} lg={4}>
						<Paper elevation={3}> 
							<Typography variant="h6" component="div" align="center" p={2}>
								Our Mission
							</Typography>
							<Typography variant="body2" component="div" p={2}>
								At wurgut.com, we understand that a clean environment is essential for your well-being and peace of mind. Our dedicated team of professionals is committed to delivering meticulous cleaning solutions, leaving no corner untouched. We believe that a tidy space fosters positivity and creates a welcoming atmosphere for you and your loved ones.
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={4} >
						<Paper elevation={3}> 
							<Typography variant="h6" component="div" align="center" p={2}>
								Our Values
							</Typography>
							<Typography variant="body2" component="div" p={2}>
								Quality: We adhere to the highest industry standards and use eco-friendly products to ensure a clean and safe environment for you and your family.

								Reliability: You can count on us to be punctual and consistent in providing our services. Your satisfaction is our priority.

								Customized Approach: Every home is unique, and so are its cleaning needs. We offer personalized cleaning plans to address your specific requirements.

								Trustworthiness: Our team members are thoroughly vetted and trained to maintain the highest level of professionalism and integrity.
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12} md={4} lg={4} >
						<Paper elevation={3}> 
							<Typography variant="h6" component="div" align="center" p={2}>
								Founder's Vision
							</Typography>
							<Typography variant="body2" component="div" p={2}>
								"When I started wurgut.com, my vision was simple - to make a positive difference in the lives of our clients. A clean space not only enhances physical well-being but also contributes to mental clarity and tranquility. We take pride in being part of that transformation for our clients, and we look forward to making your space shine."
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Box m={5} p={5}></Box> 

			</Container>
		</Base>
	);
}

export default About;
