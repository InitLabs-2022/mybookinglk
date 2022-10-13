import Booking from "../models/Booking";

export const getAllBooking = async (): Promise<Booking[]> => {
  return [
    {
      id: "1",
      customerName: "John",
      date: new Date("2021-01-01"),
      amount: 100,
    },
    {
      id: "2",
      customerName: "Jane",
      date: new Date("2021-01-02"),
      amount: 200,
    },
    {
      id: "3",
      customerName: "Jack",
      date: new Date("2021-01-03"),
      amount: 300,
    },
  ];
};
