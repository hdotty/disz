package org.disz.demo.service;

import org.disz.demo.entity.Book;
import org.disz.demo.dto.BookDto;
import org.disz.demo.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookServiceImp implements BookService {
    public final BookRepository bookRepository;

    public BookServiceImp(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }
    @Override
    public void addBook(BookDto book) {bookRepository.save(toEntity(book));}
    @Override
    public void updateBook(BookDto bookDto, String author, String title){
        Book book = toEntity(bookDto);
        book.setAuthor(author);
        book.setTitle(title);
        bookRepository.save(book);
    }
    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
    @Override
    public List<BookDto> findAllBooks() {return toDtos(bookRepository.findAll());}
    @Override
    public BookDto getById(Long id) {return bookRepository.findById(id).map(this::toDto).orElse(null);}
    @Override
    public List<BookDto> find(String query) {return toDtos(bookRepository.findAllByAuthorContainsOrTitleContains(query, query));}

    @Override
    public List<BookDto> findBorrowedBooks() {
        return bookRepository.findAllBorrowed().stream().map(this::toDto).collect(Collectors.toList());
    }

    private Book toEntity(BookDto book) {
        return new Book(book.getBookId(), book.getAuthor(), book.getTitle());
    }

    public <S extends BookDto> BookDto toDto(Book book) {
        return new BookDto(book.getId(), book.getAuthor(), book.getTitle());
    }



    public List<BookDto> toDtos(List<Book> books) {
        return books.stream().map(this::toDto).collect(Collectors.toList());
    }
}
