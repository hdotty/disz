package org.disz.demo.repository;
import org.disz.demo.dto.PersonDto;
import org.disz.demo.entity.Book;
import org.disz.demo.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository <Person, Long> {
    void addPerson(Person person);
    void updatePerson(Person person, String newFirstNAme, String newLastName, String newEmail);
    void deletePerson(Long id);
    List<Person> findPersonById(Long id);
    List<Person> findAllPerson();
    List<Person> findPersonByFirstNameOrLastNameOrEmail(String name);
    List<Book> personsBooks(Person person);



}
