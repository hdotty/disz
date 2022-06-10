package org.disz.demo.service;

import org.disz.demo.dto.BorrowDto;
import org.disz.demo.entity.Borrow;
import org.disz.demo.repository.BorrowRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BorrowServiceImp implements BorrowService{
    private final BorrowRepository borrowRepository;

    public BorrowServiceImp(final BorrowRepository borrowRepository) {
        this.borrowRepository = borrowRepository;}

    @Override
    public void addBorrow(BorrowDto borrowDto) {
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        borrowDto.setStartTime(currentDate);
        borrowRepository.save(toEntity(borrowDto));
    }

    @Override
    public void returnBook(BorrowDto borrowDto){
        LocalDate currentDate = LocalDate.ofEpochDay(System.currentTimeMillis());
        borrowDto.setEndTime(currentDate);
    }

    @Override
    public List<BorrowDto> findAll() { return toDtos(borrowRepository.findAll());}

    @Override
    public List<BorrowDto> findBorrowByBookId(Long bookId) {  // az adott könyvet kik kölcsönözték ki
        return toDtos(borrowRepository.findAllByBookId(bookId));
    }

    @Override
    public List<BorrowDto> findBorrowByPersonId(Long personId) {
        return toDtos(borrowRepository.findAllByPersonId(personId)); }

    @Override
    public List<BorrowDto> findBorrowByStartTimeIsNotNullAndEndTimeIsNull() {
        return toDtos(borrowRepository.findAllByEndTimeIsNull());}
    @Override
    public long nowBorrowedBooks() {
        return borrowRepository.countByEndTimeIsNull();}
    @Override
    public List<BorrowDto> findBorrowByStartTimeAndEndTimeIsNotNull() {
        return toDtos(borrowRepository.findAllByEndTimeIsNotNull()) ;
    }
    @Override
    public long returnedBorrowes() {
        return borrowRepository.countByEndTimeIsNotNull();}
    @Override
    public List<BorrowDto> findBorrowByStartTimeAndEndTimeIsNull() {
        return toDtos(borrowRepository.findAllByEndTimeIsNull());}
    @Override
    public long notBorrowedYet() {
        return borrowRepository.countByEndTimeIsNull();
    }

    @Override
    public List<BorrowDto> findByAuthorOrTitleContaining(String search) {
        return toDtos(borrowRepository.findByBookAuthorContainingOrBookTitleContaining(search, search));
    }


    public Borrow toEntity(BorrowDto borrow){
        return new Borrow(borrow.getPerson(), borrow.getBook(), borrow.getStartTime(),borrow.getEndTime());}
    public BorrowDto toDto(Borrow borrow){
        return new BorrowDto(borrow.getPerson(), borrow.getBook(), borrow.getStartTime(),borrow.getEndTime());}
    public List<BorrowDto> toDtos(List<Borrow> borrows){
        return borrows.stream().map(this::toDto).collect(Collectors.toList());
    }
}

