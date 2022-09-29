import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


const AllBookingScreen = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate('/login');
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Booking
          </Typography>
          <Button color="inherit" onClick={onClickLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AllBookingScreen;
