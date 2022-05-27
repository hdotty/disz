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
    private String firstName;
    private String lastName;
    private String email;
    private boolean admin = false;
    private String password;
    private static Long counter;

    // constructor
    public Person(){}
    public Person(Long personId,String firstName, String lastName, String email, String password){
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        counter++;
    }

    //getters
    public Long getPersonId(){return this.personId;}
    public String getFirstName() {return firstName;}
    public String getLastName() {return lastName;}
    public String getEmail() {
        return email;
    }
    public boolean isAdmin() {
        return admin;
    }
    public String getPassword() {return password;}

    public List<BookDto> getBook() {
        return (List<BookDto>) book;
    }
    public Long getCounter(){return counter;}

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
    public static void setCounter(){counter--;}



}

