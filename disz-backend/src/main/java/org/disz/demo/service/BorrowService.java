package org.disz.demo.service;

import org.disz.demo.entity.PersonBook;

import java.time.LocalDate;
import java.util.List;

public interface  BorrowService {
    void addBorrow(PersonBook borrow);
    void returnBook(PersonBook borrow);

    List<PersonBook> findAll();
    List<PersonBook> findBorrowByBookId(Long bookId); // WhoBorrowedTheBook
    List<PersonBook> findBorrowByPersonId(Long personId); // WhatAPersonBorrowed
    List<PersonBook> findBorrowByStartTimeIsNotNullAndEndTimeIsNull();
    int nowBorrowedBooks();
    List<PersonBook> findBorrowByStartTimeAndEndTimeIsNotNull();
    int returnesBorrowes();
    List<PersonBook> findBorrowByStartTimeAndEndTimeIsNull();
    int notBorrowedYet();

    List<PersonBook> findByAuthorOrTitleContaining(String search);






//    public default void borrow(long bookId, long personId) {
//        final Book book = bookRepository.getById(bookId);
//        book.setPerson(null);
//        bookRepository.save(book);
//    }




}
