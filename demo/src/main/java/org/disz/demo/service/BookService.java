package org.disz.demo.service;

import org.disz.demo.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    Book addBook(Book book);
    void updateBook(Book book, String newAuthor, String newTitle);

    void deleteBook(Long id);

    List<Book> findAllBooks();
    Optional<Book> getById(Long id);
    List<Book> find(String query);
}
