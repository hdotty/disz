package org.disz.demo.repository;

import org.disz.demo.entity.PersonBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRepository extends JpaRepository {
    void addBorrow(PersonBook borrow);
    void updateBoroow(PersonBook borrow);
    List<PersonBook> findAllBorrows();
    List<PersonBook> findBorrowByBookId(Long bookId);
    List<PersonBook> findBorrowByPersonId(Long personId);

    //hány könyv van épp kölcsönözve
    List<PersonBook> findBorrowByStartTimeIsNotNullAndEndTimeIsNull();
    Long nowBorrowedBooks();


    //hány kölcsönzés volt/van összesen
    List<PersonBook> findBorrowByStartTimeAndEndTimeIsNotNull();
    Long returnesBorrowes();


    // könyvek, amik nincsenek kikölcsönözve
    List<PersonBook> findBorrowByStartTimeAndEndTimeIsNull();
    Long notBorrowedYet();

    List<PersonBook> findByAuthorOrTitleContaining(String search);


}
