package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.disz.demo.entity.Borrow;

import java.util.ArrayList;
import java.util.List;

public class BookDto {
    // variables
    @JsonProperty
    private Long bookId;
    @JsonProperty
    private String author;
    @JsonProperty
    private String title;
    @JsonProperty
    private List<Borrow> borrows = new ArrayList<>();

    // constructor

    public BookDto(){}
    public BookDto(Long bookID, String author, String title) {
        this.bookId = bookID;
        this.author = author;
        this.title = title;
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

    //setters
    public void setAuthor(String author) {this.author = author;}
    public void setTitle(String title) {this.title = title;}
}
