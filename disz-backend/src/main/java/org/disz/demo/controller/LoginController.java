package org.disz.demo.controller;

import org.disz.demo.dto.PersonDto;
import org.disz.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/login")
public class LoginController {

    public final PersonService personService;

    @Autowired
    public LoginController(PersonService personService) {
        this.personService = personService;
    }




    @PostMapping
    public ResponseEntity<?> login (@RequestParam String email, @RequestParam String password) {
        if (personService.existsByEmail(email)){
            PersonDto personDto = personService.getByEmail(email);
            String psw = personDto.getPassword();
            if (Objects.equals(password, psw)) {
                personDto.setLoggedIn(true);
                return ResponseEntity.ok(personDto);
            }else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }else{
            return ResponseEntity.badRequest().body("bad request");

        }

    }


}

//    @GetMapping
//    public ResponseEntity<?> loginGet (@PathVariable String email, String password){
//        PersonDto personDto = personService.getByEmail(email);
//        if(password == personDto.getPassword()){
//            personDto.setLoggedIn(true);
//            return ResponseEntity.ok("Logged in");
//        }else{
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//    }