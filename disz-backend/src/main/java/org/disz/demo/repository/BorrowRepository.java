package org.disz.demo.repository;

import org.disz.demo.entity.Borrow;
import org.disz.demo.entity.Borrow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRepository extends JpaRepository {
    void addBorrow(Borrow borrow);
    void updateBoroow(Borrow  borrow);
    List<Borrow> findAllBorrows();
    List<Borrow> findBorrowByBookId(Long bookId);
    List<Borrow> findBorrowByPersonId(Long personId);

    //hány könyv van épp kölcsönözve
    List<Borrow> findBorrowByStartTimeIsNotNullAndEndTimeIsNull();
    Long nowBorrowedBooks();


    //hány kölcsönzés volt/van összesen
    List<Borrow> findBorrowByStartTimeAndEndTimeIsNotNull();
    Long returnesBorrowes();


    // könyvek, amik nincsenek kikölcsönözve
    List<Borrow> findBorrowByStartTimeAndEndTimeIsNull();
    Long notBorrowedYet();

    List<Borrow> findByAuthorOrTitleContaining(String search);


}
