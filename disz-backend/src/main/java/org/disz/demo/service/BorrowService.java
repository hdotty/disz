package org.disz.demo.service;

import org.disz.demo.entity.Borrow;

import java.time.LocalDate;
import java.util.List;

public interface  BorrowService {
    void addBorrow(Borrow borrow);
    void returnBook(Borrow borrow);

    List<Borrow> findAll();
    List<Borrow> findBorrowByBookId(Long bookId); // WhoBorrowedTheBook
    List<Borrow> findBorrowByPersonId(Long personId); // WhatAPersonBorrowed
    List<Borrow> findBorrowByStartTimeIsNotNullAndEndTimeIsNull();
    long nowBorrowedBooks();
    List<Borrow> findBorrowByStartTimeAndEndTimeIsNotNull();
    long returnesBorrowes();
    List<Borrow> findBorrowByStartTimeAndEndTimeIsNull();
    long notBorrowedYet();

    List<Borrow> findByAuthorOrTitleContaining(String search);






//    public default void borrow(long bookId, long personId) {
//        final Book book = bookRepository.getById(bookId);
//        book.setPerson(null);
//        bookRepository.save(book);
//    }




}
