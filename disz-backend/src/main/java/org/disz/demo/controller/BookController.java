package org.disz.demo.controller;

import org.disz.demo.dto.BookDto;
import org.disz.demo.entity.Book;
import org.disz.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(final BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping("/books")
    public void addBook(final @RequestBody BookDto book){bookService.addBook(book);
    }

    @PostMapping("/books")
    public BookDto updateBook(final @RequestBody BookDto book, String author, String title) {return bookService.updateBook(book, author, title);}


    @GetMapping("/books")
    public void deleteBook(final @PathVariable Long id) {bookService.deleteBook(id);}
    @GetMapping("/books")
    public List<BookDto> getBooks() {return bookService.findAllBooks();} //összes könyv kilistázása
    @GetMapping("/books/{id}")
    public Optional<BookDto> getBook(final @PathVariable Long id) { return Optional.ofNullable((BookDto) bookService.getById(id));} // egy könyv

    // GET /books/search?q=Hemingway
    @GetMapping("/books/search")
    public List<BookDto> findBooks(final @RequestParam String query) {
        return bookService.find(query);
    }

    @GetMapping("/books")
    public List<BookDto> findByPersonIdIsNotNull(){return bookService.findByPersonIdIsNotNull();}






}
