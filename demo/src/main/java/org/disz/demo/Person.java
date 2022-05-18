package org.disz.demo;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Person {
    @ManyToOne
    @JoinColumn(name = "book_book_id", insertable = false, updatable = false)
    public Book book;

    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long personID;
    protected String firstName;
    protected String lastName;
    protected String email;
    protected boolean admin = false;  //TODO hogy állítom be, hogy valaki admin-e?
    private String password;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    protected Person(){}

    public Person(String firstName, String lastName, String email, String password){ //TODO kell-e a constructorba ID?
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getEmail() {
        return email;
    }
    public boolean isAdmin() {
        return admin;
    }

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

    private void setId(){
        //TODO
    }
}

