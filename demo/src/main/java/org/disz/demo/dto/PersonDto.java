package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class PersonDto {
    @JsonProperty
    private Long personID;
    @JsonProperty
    private String firstName;
    @JsonProperty
    private String lastName;
    @JsonProperty
    private String email;
    @JsonProperty
    private boolean admin = false;
    @JsonProperty
    private String password;

    @JsonProperty
    private List<BookDto> personsBooks; //

    public PersonDto(Long personID, String firstName, String lastName, String email, boolean admin, String password, List<BookDto> personsBooks) {
        this.personID = personID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.admin = admin;
        this.password = password;
        this.personsBooks = personsBooks;
    }

    public Long getPersonId() {return personID;}

    public String getFirstName() {return firstName;}

    public String getLastName() {return lastName;}

    public String getEmail() {return email;}

    public boolean isAdmin() {return admin;}

    public String getPassword() {return password;}

    public List<BookDto> getBookDtos() {return personsBooks;}
}
