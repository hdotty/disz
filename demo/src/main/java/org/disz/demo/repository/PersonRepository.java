package org.disz.demo.repository;
import org.disz.demo.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


//TODO Hogy tudom ide berakni a Book-ot is? Hogy az alapján is tudjak keresni?
@Repository
public interface PersonRepository extends JpaRepository <Person, Long> {
    List<Person> findPersonById(Long id);
    List<Person> findAllPerson();
    List<Person> findPersonByEmail(String email);
    List<Person> findPersonByFirstNameOrLastName(String name);




}
