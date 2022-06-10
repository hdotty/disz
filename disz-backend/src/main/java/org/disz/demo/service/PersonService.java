package org.disz.demo.service;

import org.disz.demo.dto.BorrowDto;
import org.disz.demo.dto.PersonDto;

import java.util.List;

public interface PersonService {

    void addPerson(PersonDto personDto);
    void updatePerson(PersonDto personDto);
    void deletePerson(Long id);

    List<PersonDto> findAllPerson();
    PersonDto getById(Long id);
    List<PersonDto> findPersonByFirstNameOrLastNameOrEmail(String query);
    void changePsw(PersonDto personDto, String newPsw);
    List<BorrowDto> personsBooks(PersonDto personDto);

}
