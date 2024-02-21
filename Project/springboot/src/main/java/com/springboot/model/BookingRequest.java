package com.springboot.model;

import java.time.LocalDate;

public class BookingRequest {

    private String roomNumber;
    private String bookingDate;
    private int numberOfGuests;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;

    // Constructors, getters, and setters

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

	@Override
	public String toString() {
		return "BookingRequest [roomNumber=" + roomNumber + ", bookingDate=" + bookingDate + ", numberOfGuests="
				+ numberOfGuests + "]";
	}
    
}

