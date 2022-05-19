package org.disz.demo.controller;

import org.disz.demo.Person;
import org.disz.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public class PersonController {
    private final PersonService personService;


    @Autowired
    public PersonController(final PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/person")
    public List<Person> getBooks() {
        return personService.findAllPerson();
    }

    @GetMapping("/person/{id}")
    public Optional<Person> getPerson(final @PathVariable Long id) {
        return personService.getById(id);
    }

    @PostMapping("/person")
    public Person addPerson(final @RequestBody Person person) {
        return personService.addPerson(person);
    }

    @GetMapping("/person/search")
    public List<Person> findPerson(final @RequestParam String query) {
        return personService.find(query);
    }
}
