package org.disz.demo.entity;

import javax.persistence.*;

import org.disz.demo.dto.BookDto;
import org.disz.demo.entity.Book;
import org.hibernate.annotations.GenericGenerator;

import java.util.List;

@Entity
public class Person {
    @ManyToOne
    @JoinColumn(name = "book_book_id", insertable = false, updatable = false)
    public Book book;

    // variables
    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long personId;
    protected String firstName;
    protected String lastName;
    protected String email;
    protected boolean admin = false;
    private String password;

    // constructor
    public Person(){}
    public Person(Long personId,String firstName, String lastName, String email, String password){
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    //getters
    public Long getPersonId(){return personId;}
    public String getFirstName() {return firstName;}
    public String getLastName() {return lastName;}
    public String getEmail() {
        return email;
    }
    public boolean isAdmin() {
        return admin;
    }
    public List<BookDto> getBook() {
        return (List<BookDto>) book;
    }

    // setters
    public void setBook(Book book) {
        this.book = book;
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



}

