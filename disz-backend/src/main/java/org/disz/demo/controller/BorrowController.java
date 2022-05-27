package org.disz.demo.controller;


import org.disz.demo.entity.PersonBook;
import org.disz.demo.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BorrowController {
    private final BorrowService borrowService;

    @Autowired
    public BorrowController(final BorrowService borrowService) {
        this.borrowService = borrowService;
    }

    @PostMapping
    public void addBorrow(final @RequestBody PersonBook borrow) {
        borrowService.addBorrow(borrow);
    }

    @PostMapping
    public void returnBook(final @RequestBody PersonBook borrow){borrowService.returnBook(borrow);}


    @GetMapping
    public List<PersonBook> findAll(){return borrowService.findAll();}

    @GetMapping
    public List<PersonBook> findBorrowByBookId(@PathVariable final Long bookId){
        return borrowService.findBorrowByBookId(bookId);}

    @GetMapping
    public List<PersonBook> findBorrowByPersonId(@PathVariable final Long personId) {
        return borrowService.findBorrowByPersonId(personId);}

    @GetMapping
    public List<PersonBook> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping
    public int nowBorrowedBooks(){return nowBorrowedBooks();}

    @GetMapping
    public List<PersonBook> findBorrowByStartTimeAndEndTimeIsNotNull(){
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping
    public int returnesBorrowes(){ return returnesBorrowes();}

    @GetMapping
    public List<PersonBook> findBorrowByStartTimeAndEndTimeIsNull(){
        return borrowService.findBorrowByStartTimeAndEndTimeIsNull();}
    @GetMapping
    public int notBorrowedYet(){return notBorrowedYet();}

    @GetMapping
    public List<PersonBook> findByAuthorOrTitleContaining(@RequestParam String search){
        return borrowService.findByAuthorOrTitleContaining(search);}
}
