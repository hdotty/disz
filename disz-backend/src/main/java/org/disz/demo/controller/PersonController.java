package org.disz.demo.controller;

import org.disz.demo.dto.BorrowDto;
import org.disz.demo.dto.PersonDto;
import org.disz.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(final PersonService personService) {
        this.personService = personService;
    }
    @PostMapping("/person")
    public void addPerson(final @RequestBody @Valid PersonDto personDto) {personService.addPerson(personDto);}
    @PutMapping("/person")
    public void updatePerson(final @RequestBody PersonDto personDto, String firstName, String lastName, String email){
        personService.updatePerson(personDto, firstName, lastName, email);}
    @DeleteMapping("/person/{id}")
    public void deletePerson(final @PathVariable Long id){ personService.deletePerson(id); }
    @GetMapping("/person")
    public List<PersonDto> getPersons() {return personService.findAllPerson();}
    @GetMapping("/person/{id}")
    public PersonDto getPerson(final @PathVariable Long id) {return personService.getById(id);}
    @GetMapping("/person/search")
    public List<PersonDto> findPerson(final @RequestParam String query) {return personService.findPersonByFirstNameOrLastNameOrEmail(query);}
    @PutMapping("/person/{oldPassword}/{newPassword}")
    public void pswChange(@RequestBody PersonDto personDto, @PathVariable String oldPassword, @PathVariable String newPassword){ personService.changePsw(personDto, oldPassword, newPassword);}
    @GetMapping("/persons")
    public List<BorrowDto> personsBooks(final @RequestBody PersonDto personDto){return personService.personsBooks(personDto);}

}
