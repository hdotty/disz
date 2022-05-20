package org.disz.demo.service;

import org.disz.demo.entity.Book;
import org.disz.demo.dto.BookDto;
import org.disz.demo.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class BookServiceImp implements BookService {
    public final BookRepository bookRepository;

    public BookServiceImp(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }
    @Override
    public BookDto addBook(BookDto book) {
        return toDto(bookRepository.save(toEntity(book)));
    } //TODO
    @Override
    public BookDto updateBook(BookDto book){
        return book;
    } // TODO
    @Override
    public void deleteBook(Long id) {bookRepository.deleteById(id);}
    @Override
    public List<BookDto> findAllBooks() {return Collections.singletonList((BookDto) (bookRepository.findAll()));}
    @Override
    public BookDto getById(Long id) {return (BookDto) bookRepository.findBookById(id);}
    @Override
    public List<BookDto> find(String query) {return bookRepository.findAllByAuthorContainsOrTitleContains(query, query);}
    @Override
    public Long getCounter() {return Book.counter;} // Book's counter


    private Book toEntity(BookDto book) {
        return new Book(book.getBookId(), book.getAuthor(), book.getTitle());
    }

    private <S extends BookDto> BookDto toDto(Book book) {
        Long personId = book.getPersonDto() == null ? null : book.getPersonDto().getPersonId();
        return new BookDto(book.getBookId(), book.getAuthor(), book.getTitle(), personId);
    }
}
