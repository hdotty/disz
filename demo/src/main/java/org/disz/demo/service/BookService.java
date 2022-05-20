package org.disz.demo.service;

import org.disz.demo.dto.BookDto;

import java.util.List;

public interface BookService {
    BookDto addBook(BookDto book);
    BookDto updateBook(BookDto book); // TODO

    void deleteBook(Long id);

    List<BookDto> findAllBooks();
    BookDto getById(Long id);
    List<BookDto> find(String query);
    Long getCounter();

}
