package org.disz.demo.entity;

import javax.persistence.JoinColumn;
import java.time.LocalDate;

public class PersonBook {
    // variables
    @JoinColumn(name = "person_person_id")
    private Long personID;
    @JoinColumn(name = "book_book_id")
    private Long bookID;

    LocalDate startTime;
    LocalDate endTime;
    private static Long counter;

    // constructors
    public PersonBook(){}
    public PersonBook(Long personID, Long bookID, LocalDate startTime, LocalDate endTime){
        this.personID = personID;
        this.bookID = bookID;
        this.startTime = startTime;
        this.endTime = endTime;
        counter++;
    }

    // getters
    public Long getPersonID() {
        return personID;
    }
    public Long getBookID() {
        return bookID;
    }
    public LocalDate getStartTime() {
        return startTime;
    }
    public LocalDate getEndTime() {
        return endTime;
    }
    public Long getCounter(){return counter;}

    // setters
    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }
    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

}
