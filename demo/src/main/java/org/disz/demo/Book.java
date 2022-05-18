package org.disz.demo;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Book {
    @OneToMany
    @JoinColumn(name="person_person_id", insertable = false, updatable = false)
    public Person person;

    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long bookID;
    public String author;
    public String title;
    public static Long counter;

    public Book(){}
    public Book(Long bookID, String author, String title) {
        this.bookID = bookID;  //TODO kell e ide ID, vagy ezt majd megkapja külön, és nem kell a constructorba?
        this.author = author;
        this.title = title;
        counter++;
    }

    public Long getBookID() {
        return bookID;
    }
    public String getAuthor() {
        return author;
    }
    public String getTitle() {
        return title;
    }
    public Long getCounter(){
        return counter;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public void setTitle(String title) {
        this.title = title;
    }
}
