package org.disz.demo.repository;

import org.disz.demo.Book;
import org.disz.demo.PersonBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRepository extends JpaRepository {
    List<PersonBook> findAllBorrows();
    List<PersonBook> findBorrowByBookId(Long bookId);
    List<PersonBook> findBorrowByPersonId(Long personId);
    List<PersonBook> findBookByAuthorOrTitle(String search);
    List<PersonBook> findByAuthorOrTitleContaining(String infix);


}
