package org.disz.demo.service;

import org.disz.demo.Book;
import org.disz.demo.Person;
import org.disz.demo.repository.BorrowRepository;
import org.disz.demo.repository.PersonRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

public class PersonServiceImp implements PersonService{
    public final PersonRepository personRepository;
    public final BorrowRepository borrowRepository;

    public PersonServiceImp(PersonRepository personRepository, BorrowRepository borrowRepository) {
        this.personRepository = personRepository;
        this.borrowRepository = borrowRepository;
    }


    @Override
    public Person addPerson(Person person) {
        return personRepository.save(person);
    }

    @Override
    public void updatePerson(Person person, String newFirstName, String newLastName, String newEmail) {
        person.setFirstName(newFirstName);
        person.setLastName(newFirstName);
        person.setEmail(newEmail);
    }

    //megnézni milyen könyveket kolcsonzott ki a szemely: person.getBook()

    @Override
    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }

    @Override
    public List<Book> myBooks(Person person){ // EZ jó-e?
        return borrowRepository.findAllById(Collections.singleton(person.getPersonID()));
    }
    @Override
    public List<Person> findAllPerson() {
        return personRepository.findAll();
    }

    @Override
    public Optional<Person> getById(Long id) {
        return personRepository.findById(id);
    }

    @Override
    public List<Person> find(String query) {
        return null; // TODO
    }
}
