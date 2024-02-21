package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.model.BookingRequest;
import com.springboot.model.RoomBooking;
import com.springboot.service.RoomService;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/book-room")
    public ResponseEntity<String> bookRoom(@RequestBody BookingRequest bookingRequest) {
        try {
            roomService.bookRoom(
                    bookingRequest.getRoomNumber(),
                    bookingRequest.getBookingDate(),
                    bookingRequest.getNumberOfGuests(),
                    bookingRequest.getCheckInDate(),
                    bookingRequest.getCheckOutDate()
            );

            return new ResponseEntity<>("Room booked successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error booking room. Please try again.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/available-rooms")
    public List<RoomBooking> getAvailableRooms(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkInDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOutDate) {
        return roomService.getAvailableRooms(checkInDate, checkOutDate);
    }
}



