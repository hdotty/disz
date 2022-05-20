package org.disz.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import java.time.LocalDate;

public class PersonBook {
    // variables
    @JoinColumn(name = "person_person_id")
    protected Long personID;
    @JoinColumn(name = "book_book_id")
    protected Long bookID;

    LocalDate startTime;
    LocalDate endTime;

    // constructors
    public PersonBook(){}
    public PersonBook(Long personID, Long bookID, LocalDate startTime, LocalDate endTime){
        this.personID = personID;
        this.bookID = bookID;
        this.startTime = startTime;
        this.endTime = endTime;
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

    // setters
    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }
    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

}
