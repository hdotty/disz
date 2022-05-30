package org.disz.demo.entity;

import javax.persistence.*;

import org.springframework.lang.NonNull;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Person {
    // variables
    @Id
    @GeneratedValue
    private long id;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private String email;
    private boolean admin;
    @NonNull
    private String password;

    @OneToMany(mappedBy = "person")
    private List<Borrow> borrows = new ArrayList<>();

    // constructor
    public Person(Long personId, String firstName, String lastName, String email, String password){}

    public Person(String firstName, String lastName, String email, String password, boolean admin){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.admin = admin;
    }

    //getters
    public long getId(){return this.id;}
    public String getFirstName() {return firstName;}
    public String getLastName() {return lastName;}
    public String getEmail() {
        return email;
    }
    public boolean isAdmin() {
        return admin;
    }
    public String getPassword() {return password;}
    public List<Borrow> getBorrows() {
        return borrows;
    }

    // setters
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password){
        this.password = password;
    }
}

