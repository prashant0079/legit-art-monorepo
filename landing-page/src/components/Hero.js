import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import img1 from '../assets/Nfts/nft1.jpg';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped"
};

const INITIAL_COUNT = 3600 * 8;

export default function Hero() {

  const [secondsRemaining, setSecondsRemaining] = React.useState(INITIAL_COUNT);
  const [status, setStatus] = React.useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

  return (
    <Card sx={{ maxWidth: 345 }} elevation={15}>
      <CardMedia
        component="img"
        sx={{ height: 340 }}
        image={img1}
        alt="nft showcase"
      />
      <CardContent>
        <Box
          mt={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
            <Typography color="text.secondary">
              Current Bid
            </Typography>
            <Typography color="text.secondary">
              Auction End
            </Typography>
        </Box>
        <Box
          mt={2}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
            <Typography color="text.primary">
              2.432 ETH
            </Typography>
            <Typography color="text.primary">
            {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
            </Typography>
        </Box>
      </CardContent>
      <CardActions>
      <ColorButton variant="contained">Place a bid</ColorButton>
      </CardActions>
    </Card>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#FFF',
  backgroundColor: '#6734FF',
  '&:hover': {
    backgroundColor: '#6734FF',
  },
}));

function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, "0");
