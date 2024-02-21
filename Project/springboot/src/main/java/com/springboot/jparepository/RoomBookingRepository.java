package com.springboot.jparepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.model.RoomBooking;

import java.time.LocalDate;
import java.util.List;

public interface RoomBookingRepository extends JpaRepository<RoomBooking, Long> {
    List<RoomBooking> findByCheckOutDateAfterAndCheckInDateBefore(LocalDate checkInDate, LocalDate checkOutDate);
}




