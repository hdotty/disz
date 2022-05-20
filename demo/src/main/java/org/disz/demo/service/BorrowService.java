package org.disz.demo.service;

import org.disz.demo.entity.Book;
import org.disz.demo.entity.Person;
import org.disz.demo.entity.PersonBook;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface  BorrowService {
    void addBorrow(Long personId, Long bookId);
    void returnBook(Long personId, Long bookId, LocalDate startDate);

    List<PersonBook> findAllBorrows();
    Optional<Person> getWhoBorrowedTheBook(Long bookId);
    Optional<Book> getWhatThePersonBorrowed(Long personId);







//    public default void borrow(long bookId, long personId) {
//        final Book book = bookRepository.getById(bookId);
//        book.setPerson(null);
//        bookRepository.save(book);
//    }




}
