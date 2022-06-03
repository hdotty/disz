package org.disz.demo.controller;

import org.disz.demo.dto.PersonDto;
import org.disz.demo.entity.Borrow;
import org.disz.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(final PersonService personService) {
        this.personService = personService;
    }
    @PostMapping("/person")
    public void addPerson(final @RequestBody PersonDto personDto) {personService.addPerson(personDto);}
    @PutMapping("/person")
    public void updatePerson(final @RequestBody PersonDto personDto, String newFirstName, String newLastName, String newEmail){
        personService.updatePerson(personDto, newFirstName, newLastName, newEmail);}
    @DeleteMapping("/person/{id")
    public void deletePerson(Long id){ personService.deletePerson(id); }
    @GetMapping("/person")
    public List<PersonDto> getPersons() {return personService.findAllPerson();}
    @GetMapping("/person/{id}")
    public PersonDto getPerson(final @PathVariable Long id) {return personService.getById(id);}
    @GetMapping("/person/search")
    public List<PersonDto> findPerson(final @RequestParam String query) {return personService.findPersonByFirstNameOrLastNameOrEmail(query);}
    @PostMapping("/person/{password}")
    public void pswChange(@RequestBody PersonDto personDto, String newPsw){ personService.changePsw(personDto, newPsw);}
    @GetMapping("/persons")
    public List<Borrow> personsBooks(final @PathVariable PersonDto personDto){return personService.personsBooks(personDto);}

}
