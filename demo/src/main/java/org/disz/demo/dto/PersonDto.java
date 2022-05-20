package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PersonDto {
    @JsonProperty
    private Long personID;
    @JsonProperty
    protected String firstName;
    @JsonProperty
    protected String lastName;
    @JsonProperty
    protected String email;
    @JsonProperty
    protected boolean admin = false;
    @JsonProperty
    private String password;

    @JsonProperty
    private Long bookId;

    public PersonDto(Long personID, String firstName, String lastName, String email, boolean admin, String password, Long bookId) {
        this.personID = personID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.admin = admin;
        this.password = password;
        this.bookId = bookId;
    }

    public Long getPersonId() {return personID;}

    public String getFirstName() {return firstName;}

    public String getLastName() {return lastName;}

    public String getEmail() {return email;}

    public boolean isAdmin() {return admin;}

    public String getPassword() {return password;}

    public Long getBookId() {return bookId;}
}
