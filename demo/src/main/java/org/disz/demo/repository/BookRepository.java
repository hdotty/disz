package org.disz.demo.repository;

import org.disz.demo.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


// TODO Hogy kell QUERY-ket csinálni?
// Hogy kell hozzáadni a elemeket az adatbázishoz?

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAllBooks();  //kilistázom az összes könyvet
    List<Book> findBookById(Long id); // ID alapján keresek könyveket
    List<Book> findBookByAuthorOrTitle(String search);
    List<Book> findByAuthorOrTitleContaining(String infix);
}
