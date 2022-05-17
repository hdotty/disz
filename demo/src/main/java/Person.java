import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Person {
    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    private Long id;

    //protected long book.id;  =>  person-nak >=0 book.id-ja lehet
    protected String firstName;
    protected String lastName;
    protected String email;
    protected boolean isAdmin = false;
    private String password;

    protected Person(){}

   public Person(String firstName, String lastName, String email, String password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
   }

    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public String getEmail() {
        return email;
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

    protected void changePassword(String oldPwd, String newPwd, String newPwd2){
        if (oldPwd == this.password && newPwd == newPwd2){
            this.password = newPwd;
        }
    }

    private void setId(){

    }
}
