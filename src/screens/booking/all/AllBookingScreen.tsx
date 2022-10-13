import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { getAllBooking } from "../../../Services/BookingService";
import { useEffect, useState } from "react";
import Booking from "../../../models/Booking";
import BookingCard from "../../../components/BookingCard";

const AllBookingScreen = () => {
  const navigate = useNavigate();

  const [Bookings, setBookings] = useState<Booking[]>([]);

  const onClickLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    getAllBooking().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Booking
          </Typography>
          <Button color="inherit" onClick={onClickLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Print All Bookings here */}
      {Bookings.map((b) => (
        <BookingCard key={b.id} booking={b}></BookingCard>
      ))}
    </div>
  );
};

export default AllBookingScreen;
