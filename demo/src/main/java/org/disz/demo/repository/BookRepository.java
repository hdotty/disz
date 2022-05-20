package org.disz.demo.repository;

import org.disz.demo.entity.Book;
import org.disz.demo.dto.BookDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAll();
    List<BookDto> findBookById(Long id);
    Book getById(Long bookId);
    List<BookDto> findAllByAuthorContainsOrTitleContains(String query, String query1);
    List<BookDto> findBooksWherePersonIdIsNotNull(); // azok a könyvek, amik ki vannak adva






}
