package org.disz.demo.service;

import org.disz.demo.entity.Borrow;
import org.disz.demo.repository.BorrowRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BorrowServiceImp implements BorrowService{
    private final BorrowRepository borrowRepository;

    public BorrowServiceImp(final BorrowRepository borrowRepository) {
        this.borrowRepository = borrowRepository;}

    @Override
    public void addBorrow(Borrow borrow) {
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        borrow.setStartTime(currentDate);
        borrowRepository.save(borrow);
    }

    @Override
    public void returnBook(Borrow borrow){
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        borrow.setEndTime(currentDate);
    }

    @Override
    public List<Borrow> findAll() { return borrowRepository.findAll();}

    @Override
    public List<Borrow> findBorrowByBookId(Long bookId) {  // az adott könyvet kik kölcsönözték ki
        return borrowRepository.findAllByBookId(bookId);
    }

    @Override
    public List<Borrow> findBorrowByPersonId(Long personId) {   // Egy Person kölcsönzéseit írjuk ki, nem a könyveket.
        return borrowRepository.findAllByPersonId(personId); // Majd a frontEnd megoldja a többit
    }


    @Override
    public List<Borrow> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return borrowRepository.findAllByEndTimeIsNull();}
    @Override
    public long nowBorrowedBooks() {
        return borrowRepository.countByEndTimeIsNull();}
    @Override
    public List<Borrow> findBorrowByStartTimeAndEndTimeIsNotNull() {
        return borrowRepository.findAllByEndTimeIsNotNull() ;
    }
    @Override
    public long returnesBorrowes() {
        return borrowRepository.countByEndTimeIsNotNull();}
    @Override
    public List<Borrow> findBorrowByStartTimeAndEndTimeIsNull() {
        return borrowRepository.findAllByEndTimeIsNull();}
    @Override
    public long notBorrowedYet() {
        return borrowRepository.countByEndTimeIsNull();
    }

    @Override
    public List<Borrow> findByAuthorOrTitleContaining(String search) {
        return borrowRepository.findByBookAuthorContainingOrBookTitleContaining(search, search);
    }
}
