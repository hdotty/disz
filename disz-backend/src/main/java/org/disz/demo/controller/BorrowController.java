package org.disz.demo.controller;


import org.apache.tomcat.jni.Local;
import org.disz.demo.dto.BorrowDto;
import org.disz.demo.service.BorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
    public void addBorrow(final @RequestBody BorrowDto borrowDto) {
        borrowService.addBorrow(borrowDto);
    }

    @PutMapping("/return")
    public void returnBook(final @RequestBody BorrowDto borrowDto){
        borrowService.returnBook(borrowDto);}


    @GetMapping
    public List<BorrowDto> findAll(){return borrowService.findAll();}

    @GetMapping("/books/{bookId}")
    public List<BorrowDto> findBorrowByBookId(@PathVariable final Long bookId){
        return borrowService.findBorrowByBookId(bookId);}

    @GetMapping("/person/{personId}")
    public List<BorrowDto> findBorrowByPersonId(@PathVariable final Long personId) {
        return borrowService.findBorrowByPersonId(personId);}

    @GetMapping("/borrowed")
    public List<BorrowDto> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return borrowService.findBorrowByStartTimeIsNotNullAndEndTimeIsNull();}
    @GetMapping("/borrowed/count")
    public int nowBorrowedBooks(){return nowBorrowedBooks();}

    @GetMapping("/returned")
    public List<BorrowDto> findBorrowByStartTimeAndEndTimeIsNotNull(){
        return borrowService.findBorrowByStartTimeAndEndTimeIsNotNull();}
    @GetMapping("/returned/count")
    public int returnesBorrowes(){ return returnesBorrowes();}

    @GetMapping("/search")
    public List<BorrowDto> findByAuthorOrTitleContaining(@RequestParam String search){
        return borrowService.findByAuthorOrTitleContaining(search);}
}
