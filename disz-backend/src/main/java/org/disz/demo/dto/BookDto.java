package org.disz.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.lang.NonNull;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

public class BookDto {
    // variables
    @JsonProperty
    private Long bookId;
    @JsonProperty
    @NotBlank(message = "Author must be set")
    private String author;
    @JsonProperty
    @NotBlank(message = "Title must be set")
    private String title;
    @JsonProperty
    private List<BorrowDto> borrows = new ArrayList<>();

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
