package org.disz.demo.service;

import org.disz.demo.dto.BorrowDto;
import org.disz.demo.dto.PersonDto;
import org.disz.demo.entity.Borrow;

import java.time.LocalDate;
import java.util.List;

public interface  BorrowService {
    void addBorrow(BorrowDto borrowDto);
    void returnBook(BorrowDto borrowDto);
    void deleteBorrowByPerson(Long personId);

    List<BorrowDto> findAll();
    List<BorrowDto> findBorrowByBookId(Long bookId); // WhoBorrowedTheBook
    List<BorrowDto> findBorrowByPersonId(Long personId); // WhatAPersonBorrowed
    List<BorrowDto> findBorrowByStartTimeIsNotNullAndEndTimeIsNull();
    long nowBorrowedBooks();
    List<BorrowDto> findBorrowByStartTimeAndEndTimeIsNotNull();
    long returnedBorrowes();
    List<BorrowDto> findBorrowByStartTimeAndEndTimeIsNull();
    long notBorrowedYet();

    List<BorrowDto> findByAuthorOrTitleContaining(String search);






//    public default void borrow(long bookId, long personId) {
//        final Book book = bookRepository.getById(bookId);
//        book.setPerson(null);
//        bookRepository.save(book);
//    }




}
