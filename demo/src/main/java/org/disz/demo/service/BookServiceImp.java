package org.disz.demo.service;

import org.disz.demo.Book;
import org.disz.demo.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImp implements BookService {
    public final BookRepository bookRepository;

    public BookServiceImp(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    @Override
    public Book addBook(Book book) {
        bookRepository.save(book);
        return book;
    }


    @Override
    public void updateBook(Book book, String newAuthor, String newTitle) {
        book.setAuthor(newAuthor);
        book.setTitle(newTitle);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> getById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public List<Book> find(String query) {
     // forral kéne végig menni??
        return null;
    }
}
