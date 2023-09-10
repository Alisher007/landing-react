import { Paper, Grid } from '@mui/material';

const FullScreenImage = ({children}) => {
  return (
    <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper elevation={0} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <img
          src="https://source.unsplash.com/random/1500x2500?sig=4"  // Replace with your image URL
          alt="Full Screen"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative' }}
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          {children}
        </div>
      </Paper>
    </Grid>
  );
};

export default FullScreenImage;
