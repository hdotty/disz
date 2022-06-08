package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.disz.demo.entity.Book;
import org.disz.demo.entity.Borrow;
import org.disz.demo.entity.Person;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import javax.persistence.ManyToOne;
import java.time.LocalDate;

public class BorrowDto {
    private long id;

    @JsonProperty
    @NonNull
    private Person person;
    @JsonProperty
    @NonNull
    private Book book;  //Book vagy BookDto?
    @JsonProperty
    @NonNull
    LocalDate startTime;
    @JsonProperty
    @Nullable
    LocalDate endTime;

    public BorrowDto(){}
    public BorrowDto(Person person, Book book, LocalDate startTime, LocalDate endTime){
        this.person = person;
        this.book = book;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    //getters
    public Person getPerson() {
        return person;}
    public Book getBook(){
        return book;}
    public LocalDate getStartTime(){
        return startTime;}
    public LocalDate getEndTime(){
        return endTime;}

    //setters
    public void setPerson(@NonNull Person person) {
        this.person = person;}
    public void setBook(@NonNull Book book) {
        this.book = book;}
    public void setStartTime(@NonNull LocalDate startTime) {
        this.startTime = startTime;}
    public void setEndTime(@Nullable LocalDate endTime) {
        this.endTime = endTime;}
}
