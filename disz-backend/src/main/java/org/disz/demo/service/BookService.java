package org.disz.demo.service;

import org.disz.demo.dto.BookDto;

import java.util.List;

public interface BookService {
    BookDto addBook(BookDto book);
    BookDto updateBook(BookDto bookDto, String author, String title);

    void deleteBook(Long id);

    List<BookDto> findAllBooks();
    BookDto getById(Long id);
    List<BookDto> find(String query);
    List<BookDto> findBorrowedBooks(); // azok a könyvek, amik ki vannak adva

}
