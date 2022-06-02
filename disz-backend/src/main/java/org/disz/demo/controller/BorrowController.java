package org.disz.demo.controller;


import org.disz.demo.entity.Borrow;
import org.disz.demo.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/borrows")
public class BorrowController {
    private final BorrowService borrowService;

    @Autowired
    public BorrowController(final BorrowService borrowService) {
        this.borrowService = borrowService;
    }

    @PostMapping
    public void addBorrow(final @RequestBody Borrow borrow) {
        borrowService.addBorrow(borrow);
    }

    @PutMapping("/{id}/return")
    public void returnBook(final @RequestBody Borrow borrow, final @PathVariable long id){borrowService.returnBook(borrow);}


    @GetMapping
    public List<Borrow> findAll(){return borrowService.findAll();}

    @GetMapping("/books/{bookId}")
    public List<Borrow> findBorrowByBookId(@PathVariable final Long bookId){
        return borrowService.findBorrowByBookId(bookId);}

    @GetMapping("/person/{personId}")
    public List<Borrow> findBorrowByPersonId(@PathVariable final Long personId) {
        return borrowService.findBorrowByPersonId(personId);}

    @GetMapping("/borrowed")
    public List<Borrow> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping("/borrowed/count")
    public int nowBorrowedBooks(){return nowBorrowedBooks();}

    @GetMapping("/returned")
    public List<Borrow> findBorrowByStartTimeAndEndTimeIsNotNull(){
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping("/returned/count")
    public int returnesBorrowes(){ return returnesBorrowes();}

    @GetMapping("/search")
    public List<Borrow> findByAuthorOrTitleContaining(@RequestParam String search){
        return borrowService.findByAuthorOrTitleContaining(search);}
}
