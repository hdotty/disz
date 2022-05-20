package org.disz.demo.service;

import org.disz.demo.entity.Book;
import org.disz.demo.entity.Person;

import java.util.List;
import java.util.Optional;

public interface PersonService {
    Person addPerson(Person person);
    void updatePerson(Person person, String newFirstName, String newLastName, String newEmail);
    void deletePerson(Long id);

    List<Book> myBooks(Person person);

    List<Person> findAllPerson();
    Optional<Person> getById(Long id);
    List<Person> find(String query);
}
