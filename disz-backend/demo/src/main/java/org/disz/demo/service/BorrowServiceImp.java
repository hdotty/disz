package org.disz.demo.service;

import org.disz.demo.entity.PersonBook;
import org.disz.demo.repository.BorrowRepository;

import java.time.LocalDate;
import java.util.List;

public class BorrowServiceImp implements BorrowService{
    private final BorrowRepository borrowRepository;

    public BorrowServiceImp(final BorrowRepository borrowRepository) {
        this.borrowRepository = borrowRepository;}

    @Override
    public void addBorrow(PersonBook borrow) {
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        borrow.setStartTime(currentDate);
        borrowRepository.save(borrow);
    }

    @Override
    public void returnBook(PersonBook borrow){
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        borrow.setEndTime(currentDate);
    }

    @Override
    public List<PersonBook> findAll() { return borrowRepository.findAll();}

    @Override
    public List<PersonBook> findBorrowByBookId(Long bookId) {  // az adott könyvet kik kölcsönözték ki
        return borrowRepository.findBorrowByBookId(bookId);
    }

    @Override
    public List<PersonBook> findBorrowByPersonId(Long personId) {   // Egy Person kölcsönzéseit írjuk ki, nem a könyveket.
        return borrowRepository.findBorrowByPersonId(personId); // Majd a frontEnd megoldja a többit
    }


    @Override
    public List<PersonBook> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return borrowRepository.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @Override
    public int nowBorrowedBooks() {
        return borrowRepository.findBorrowByStartTimeIsNotNullAndEndTimeIsNull().size();}
    @Override
    public List<PersonBook> findBorrowByStartTimeAndEndTimeIsNotNull() {
        return borrowRepository.findBorrowByStartTimeAndEndTimeIsNotNull() ;
    }
    @Override
    public int returnesBorrowes() {
        return borrowRepository.findBorrowByStartTimeAndEndTimeIsNotNull().size();}
    @Override
    public List<PersonBook> findBorrowByStartTimeAndEndTimeIsNull() {
        return borrowRepository.findBorrowByStartTimeAndEndTimeIsNull();}
    @Override
    public int notBorrowedYet() {
        return borrowRepository.findBorrowByStartTimeAndEndTimeIsNull().size();
    }

    @Override
    public List<PersonBook> findByAuthorOrTitleContaining(String search) {
        return borrowRepository.findByAuthorOrTitleContaining(search);
    }
}
