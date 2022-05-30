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
    public BookDto addBook(BookDto book) {bookRepository.save(toEntity(book));
        return book;
    }
    @Override
    public BookDto updateBook(BookDto bookDto, String author, String title){
        Book book = toEntity(bookDto);
        book.setAuthor(author);
        book.setTitle(title);
        return bookDto;
    }
    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
    @Override
    public List<BookDto> findAllBooks() {return bookRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());}
    @Override
    public BookDto getById(Long id) {return (BookDto) bookRepository.findBookById(id);}
    @Override
    public List<BookDto> find(String query) {return bookRepository.findAllByAuthorContainsOrTitleContains(query, query);}

    @Override
    public List<BookDto> findByPersonIdIsNotNull() {
        return bookRepository.findByPersonIdIsNotNull();
    }



    private Book toEntity(BookDto book) {
        return new Book(book.getBookId(), book.getAuthor(), book.getTitle());
    }

    public <S extends BookDto> BookDto toDto(Book book) {
        return new BookDto(book.getId(), book.getAuthor(), book.getTitle()); //todo
    }
}
