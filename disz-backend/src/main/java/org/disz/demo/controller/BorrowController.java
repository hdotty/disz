package org.disz.demo.controller;


import org.disz.demo.entity.Borrow;
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
    public void addBorrow(final @RequestBody Borrow borrow) {
        borrowService.addBorrow(borrow);
    }

    @PostMapping
    public void returnBook(final @RequestBody Borrow borrow){borrowService.returnBook(borrow);}


    @GetMapping
    public List<Borrow> findAll(){return borrowService.findAll();}

    @GetMapping
    public List<Borrow> findBorrowByBookId(@PathVariable final Long bookId){
        return borrowService.findBorrowByBookId(bookId);}

    @GetMapping
    public List<Borrow> findBorrowByPersonId(@PathVariable final Long personId) {
        return borrowService.findBorrowByPersonId(personId);}

    @GetMapping
    public List<Borrow> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping
    public int nowBorrowedBooks(){return nowBorrowedBooks();}

    @GetMapping
    public List<Borrow> findBorrowByStartTimeAndEndTimeIsNotNull(){
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping
    public int returnesBorrowes(){ return returnesBorrowes();}

    @GetMapping
    public List<Borrow> findBorrowByStartTimeAndEndTimeIsNull(){
        return borrowService.findBorrowByStartTimeAndEndTimeIsNull();}
    @GetMapping
    public int notBorrowedYet(){return notBorrowedYet();}

    @GetMapping
    public List<Borrow> findByAuthorOrTitleContaining(@RequestParam String search){
        return borrowService.findByAuthorOrTitleContaining(search);}
}
