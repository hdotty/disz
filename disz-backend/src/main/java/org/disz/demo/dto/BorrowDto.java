package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

public class BorrowDto {
    private long id;

    @JsonProperty
    @NonNull
    private PersonDto personDto;
    @JsonProperty
    @NonNull
    private BookDto bookDto;
    @JsonProperty
    @NonNull
    @NotBlank(message = "Start Date must be set")
    LocalDate startTime;
    @JsonProperty
    @Nullable
    LocalDate endTime;

    public BorrowDto(){}
    public BorrowDto(PersonDto personDto, BookDto bookDto, LocalDate startTime, LocalDate endTime){
        this.personDto = personDto;
        this.bookDto = bookDto;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    //getters
    public PersonDto getPerson() {
        return personDto;}
    public BookDto getBook(){
        return bookDto;}
    public LocalDate getStartTime(){
        return startTime;}
    public LocalDate getEndTime(){
        return endTime;}

    //setters
    public void setPerson(@NonNull PersonDto personDto) {
        this.personDto = personDto;}
    public void setBook(@NonNull BookDto bookDto) {
        this.bookDto = bookDto;}
    public void setStartTime(@NonNull LocalDate startTime) {
        this.startTime = startTime;}
    public void setEndTime(@Nullable LocalDate endTime) {
        this.endTime = endTime;}
}
