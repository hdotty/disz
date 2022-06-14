package org.disz.demo.controller;

import org.disz.demo.dto.BookDto;
import org.disz.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(final BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public void addBook(final @RequestBody BookDto book){bookService.addBook(book);
    }

    @PutMapping
    public void updateBook(final @RequestBody BookDto bookDto, String author, String title) {bookService.updateBook(bookDto, author, title);}


    @DeleteMapping("/{id}")
    public void deleteBook(final @PathVariable Long id) {bookService.deleteBook(id);}
    @GetMapping
    public List<BookDto> getBooks() {return bookService.findAllBooks();} //összes könyv kilistázása
    @GetMapping("/{id}")
    public BookDto getBook(final @PathVariable Long id) { return bookService.getById(id);} // egy könyv

    // GET /books/search?q=Hemingway
    @GetMapping("/search")
    public List<BookDto> findBooks(final @RequestParam String query) {
        return bookService.find(query);
    }

    @GetMapping("/borrowed")
    public List<BookDto> findByPersonIdIsNotNull(){return bookService.findBorrowedBooks();}






}
