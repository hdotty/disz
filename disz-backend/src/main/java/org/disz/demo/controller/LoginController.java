package org.disz.demo.controller;

import org.disz.demo.dto.PersonDto;
import org.disz.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    public final PersonService personService;

    @Autowired
    public LoginController(PersonService personService) {
        this.personService = personService;
    }




    @PostMapping
    public ResponseEntity<String> loginPost (String email, String password){
        PersonDto personDto = personService.getByEmail(email);
        if(password == personDto.getPassword()){
            personDto.setLoggedIn(true);
            return ResponseEntity.ok("Logged In");
        }else{
            return ResponseEntity.badRequest().body("Not Logged In");
        }
    }




}
