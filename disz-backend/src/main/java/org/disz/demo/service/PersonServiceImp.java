package org.disz.demo.service;

import org.disz.demo.dto.BorrowDto;
import org.disz.demo.dto.PersonDto;
import org.disz.demo.entity.Person;
import org.disz.demo.repository.BorrowRepository;
import org.disz.demo.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PersonServiceImp implements PersonService{
    public final PersonRepository personRepository;
    public final BorrowRepository borrowRepository;
    public final BorrowServiceImp borrowServiceImp; //TODO ez itt nagyon csúnya?

    public PersonServiceImp(PersonRepository personRepository, BorrowRepository borrowRepository, BorrowServiceImp borrowServiceImp) {
        this.personRepository = personRepository;
        this.borrowRepository = borrowRepository;
        this.borrowServiceImp = borrowServiceImp;
    }


    @Override
    public void addPerson(PersonDto personDto) {personRepository.save(toEntity(personDto));
    }
    @Override
    public void updatePerson(PersonDto personDto){ toEntity(personDto); }
    @Override
    public void deletePerson(Long id) {
        personRepository.deleteById(id);
    }
    @Override
    public List<PersonDto> findAllPerson() {
        return personRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }
    @Override
    public PersonDto getById(Long id) {
        return personRepository.findById(id).map(this::toDto).orElse(null);
    }
    @Override
    public List<PersonDto> findPersonByFirstNameOrLastNameOrEmail(String query) {
        return personRepository.findPersonByFirstNameOrLastNameOrEmail(query, query, query).stream().map(this::toDto).collect(Collectors.toList());
    }
    @Override
    public void changePsw(PersonDto personDto, String newPsw){
        Person person = toEntity(personDto);
        person.setPassword(newPsw);
    }
    @Override
    public List<BorrowDto> personsBooks(PersonDto personDto) {return personDto.getBookDtos();}



    private Person toEntity(PersonDto personDto) {
        return new Person(personDto.getPersonId(), personDto.getFirstName(), personDto.getLastName(), personDto.getEmail(), personDto.getPassword());
    }

    private <S extends PersonDto> PersonDto toDto(Person person) {
        return new PersonDto(person.getId(), person.getFirstName(), person.getLastName(),person.getEmail(),person.isAdmin(),person.getPassword(), borrowServiceImp.toDtos(person.getBorrows()));
    }

}
