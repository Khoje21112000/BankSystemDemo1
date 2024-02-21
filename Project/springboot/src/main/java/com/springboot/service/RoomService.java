package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.jparepository.RoomBookingRepository;
import com.springboot.model.RoomBooking;

import java.time.LocalDate;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomBookingRepository roomBookingRepository;

    public void bookRoom(String roomNumber, String bookingDate, int numberOfGuests,
                         LocalDate checkInDate, LocalDate checkOutDate) {
        RoomBooking roomBooking = new RoomBooking();
        roomBooking.setRoomNumber(roomNumber);
        roomBooking.setBookingDate(bookingDate);
        roomBooking.setNumberOfGuests(numberOfGuests);
        roomBooking.setCheckInDate(checkInDate);
        roomBooking.setCheckOutDate(checkOutDate);

        // Save to the database using the repository
        roomBookingRepository.save(roomBooking);
    }

    public List<RoomBooking> getAvailableRooms(LocalDate checkInDate, LocalDate checkOutDate) {
        // Implement logic to get available rooms for the specified dates
        // Example: Fetch rooms where the check-out date is after the specified check-in date
        // and the check-in date is before the specified check-out date
        return roomBookingRepository.findByCheckOutDateAfterAndCheckInDateBefore(checkInDate, checkOutDate);
    }
}

