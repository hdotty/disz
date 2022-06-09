package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.disz.demo.entity.Borrow;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class PersonDto {
    @JsonProperty
    private Long personID;
    @JsonProperty
    @NotBlank(message = "First name must be set")
    private String firstName;
    @JsonProperty
    @NotBlank(message = "Last name must be set")
    private String lastName;
    @JsonProperty
    @NotBlank(message = "Email must be set")
    private String email;
    @JsonProperty
    private boolean admin = false;
    @JsonProperty
    @NotBlank(message = "Password must be set")
    private String password;
    @JsonProperty
    private List<Borrow> borrows;

    public PersonDto(){}
    public PersonDto(Long personID, String firstName, String lastName, String email, boolean admin, String password, List<Borrow> borrows) {
        this.personID = personID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.admin = admin;
        this.password = password;
        this.borrows = borrows;
    }

    public Long getPersonId() {return personID;}

    public String getFirstName() {return firstName;}

    public String getLastName() {return lastName;}

    public String getEmail() {return email;}

    public boolean isAdmin() {return admin;}

    public String getPassword() {return password;}

    public List<Borrow> getBookDtos() {return borrows;}
}
