package org.disz.demo.service;

import org.disz.demo.dto.BookDto;
import org.disz.demo.dto.PersonDto;
import org.disz.demo.entity.Person;
import org.disz.demo.repository.BorrowRepository;
import org.disz.demo.repository.PersonRepository;

import java.util.List;
import java.util.stream.Collectors;

public class PersonServiceImp implements PersonService{
    public final PersonRepository personRepository;
    public final BorrowRepository borrowRepository;

    public PersonServiceImp(PersonRepository personRepository, BorrowRepository borrowRepository) {
        this.personRepository = personRepository;
        this.borrowRepository = borrowRepository;
    }


    @Override
    public void addPerson(PersonDto personDto) {personRepository.save(toEntity(personDto));
    }
    @Override
    public void updatePerson(PersonDto personDto, String newFirstName, String newLastName, String newEmail) {
        Person person = toEntity(personDto);
        person.setFirstName(newFirstName);
        person.setLastName(newFirstName);
        person.setEmail(newEmail);
    }
    @Override
    public void deletePerson(Long id) {
        personRepository.deleteById(id);
        Person.setCounter();
    }
    @Override
    public List<PersonDto> findAllPerson() {
        return personRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }
    @Override
    public PersonDto getById(Long id) {
        return (PersonDto)(personRepository.findPersonById(id));
    }
    @Override
    public List<PersonDto> findPersonByFirstNameOrLastNameOrEmail(String query) {
        return personRepository.findPersonByFirstNameOrLastNameOrEmail(query).stream().map(this::toDto).collect(Collectors.toList());
    }
    @Override
    public void changePsw(PersonDto personDto, String newPsw){
        Person person = toEntity(personDto);
        person.setPassword(newPsw);
    }
    @Override
    public List<BookDto> personsBooks(PersonDto personDto) {return personDto.getBookDtos();}



    private Person toEntity(PersonDto personDto) {
        return new Person(personDto.getPersonId(), personDto.getFirstName(), personDto.getLastName(), personDto.getEmail(), personDto.getPassword());
    }

    private <S extends PersonDto> PersonDto toDto(Person person) {
        return new PersonDto(person.getPersonId(), person.getFirstName(), person.getLastName(),person.getEmail(),person.isAdmin(),person.getPassword(), person.getBook());
    }

}
