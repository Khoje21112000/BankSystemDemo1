import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingRoom = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    // Fetch available rooms based on check-in and check-out dates
    const fetchAvailableRooms = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/available-rooms`, {
          params: {
            checkInDate,
            checkOutDate,
          },
        });
        setAvailableRooms(response.data);
      } catch (error) {
        console.error('Error fetching available rooms:', error);
      }
    };

    if (checkInDate && checkOutDate) {
      fetchAvailableRooms();
    }
  }, [checkInDate, checkOutDate]);

  const handleBooking = async () => {
    try {
      // Validate input data (you may add more validation)
      if (!roomNumber || !bookingDate || !numberOfGuests || !checkInDate || !checkOutDate) {
        alert('Please fill in all fields');
        return;
      }

      // Make API call to Spring Controller to book the room
      const response = await axios.post('http://localhost:8080/api/book-room', {
        roomNumber,
        bookingDate,
        numberOfGuests,
        checkInDate,
        checkOutDate,
      });

      // Handle response accordingly
      alert('Room booked successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error booking room:', error);
      alert('Error booking room. Please try again.');
    }
  };

  return (
    <div>
      <label>
        Room Number:
        <input
          type="text"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Booking Date:
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Number of Guests:
        <input
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </label>
      <br />
      <label>
        Check-In Date:
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Check-Out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Available Rooms:
        <select
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        >
          <option value="" disabled>Select Room</option>
          {availableRooms.map((room) => (
            <option key={room.id} value={room.roomNumber}>
              {room.roomNumber}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleBooking}>Book Room</button>
    </div>
  );
};

export default BookingRoom;
