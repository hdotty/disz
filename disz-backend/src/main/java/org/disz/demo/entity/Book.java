package org.disz.demo.entity;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Book {
    // variables
    @Id
    @GeneratedValue
    private long id;

    @NonNull
    private String author;

    @NonNull
    private String title;

    @OneToMany(mappedBy = "book")
    private List<Borrow> borrows = new ArrayList<>();

    // constructor
    public Book(){}

    public Book(Long id, String author, String title) {
        this.id = id;
        this.author = author;
        this.title = title;
    }

    // getters
    public Long getId() {
        return id;
    }
    public String getAuthor() {
        return author;
    }
    public String getTitle() {
        return title;
    }
    public List<Borrow> getBorrows() {
        return borrows;
    }

    // setter
    public void setAuthor(String author) {
        this.author = author;
    }
    public void setTitle(String title) {
        this.title = title;
    }
}
