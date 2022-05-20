package org.disz.demo.entity;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;

@Entity
public class Book {
    @OneToMany
    @JoinColumn(name="person_person_id", insertable = false, updatable = false)
    public Person person; //TODO ide DTO kell?
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
    private Long bookId;
    public String author;
    public String title;
    public static Long counter;

    // constructor
    public Book(){}
    public Book(Long bookId, String author, String title) {
        this.bookId = bookId;
        this.author = author;
        this.title = title;
        counter++;
    }

    // getters
    public Long getBookId() {
        return bookId;
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
    public Person getPersonDto() {return person;}

    // setter
    public void setAuthor(String author) {
        this.author = author;
    }
    public void setTitle(String title) {
        this.title = title;
    }

}
