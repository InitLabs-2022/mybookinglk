import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";
import Booking from "../models/Booking";

const BookingCard: FC<{ booking: Booking }> = ({ booking }) => {
  return (
    <Card style={{ margin: 10 }} key={booking.id}>
      <CardContent>
        <Typography variant="h5">{booking.customerName}</Typography>
        <Typography variant="subtitle1">
          {booking.date.toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Cancel Booking</Button>
      </CardActions>
    </Card>
  );
};

export default BookingCard;
