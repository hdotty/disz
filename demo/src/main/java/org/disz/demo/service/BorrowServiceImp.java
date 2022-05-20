package org.disz.demo.service;

import org.disz.demo.entity.Book;
import org.disz.demo.entity.Person;
import org.disz.demo.entity.PersonBook;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public class BorrowServiceImp implements BorrowService{
    private final PersonService personService;
    private final BookService bookSevice;

    public BorrowServiceImp(final PersonService personService, BookService bookSevice) {
        this.personService = personService;
        this.bookSevice = bookSevice;
    }

    @Override
    public void addBorrow(Long personId, Long bookId) {
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        PersonBook borrow = new PersonBook(personId, bookId, currentDate, null); //TODO jo e?
    }

    @Override
    public void returnBook(Long personId, Long bookId, LocalDate startDate){
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        PersonBook returned = new PersonBook(personId, bookId, startDate, currentDate); // TODO jo e?
    }

    @Override
    public List<PersonBook> findAllBorrows() {
        // TODO legyen borrow repository?
        return null;
    }

    @Override
    public Optional<Person> getWhoBorrowedTheBook(Long bookId) {

        return Optional.empty();
    } // TODO

    @Override
    public Optional<Book> getWhatThePersonBorrowed(Long personId) {
        return Optional.empty();
    } // TODO
}



//Select * FROM PersonRepository, BookRepository
//WHERE