package org.disz.demo.repository;

import org.disz.demo.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAllBooks();  //kilistázom az összes könyvet
    List<Book> findBookById(Long id); // ID alapján keresek könyveket
    List<Book> findBookByAuthorOrTitle(String search); // keresek egy konyvet a keresoben
    List<Book> findByAuthorOrTitleContaining(String infix); // detto

}
