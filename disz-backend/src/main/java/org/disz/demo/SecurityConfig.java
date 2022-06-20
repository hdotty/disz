package org.disz.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import static org.hibernate.criterion.Restrictions.and;
//import org.springframework.security.config.annotation.web.authentication.builders.AuthenticationManagerBuilder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http



                .authorizeRequests()
//                .antMatchers("/login").permitAll()
//                .antMatchers("/**").authenticated()
//                .and()
//                .formLogin().permitAll()
//                .loginPage("/login");


//                .csrf().disable()
//                .authorizeRequests()
//                .anyRequest()
//                .authenticated()
//                .and().
//                httpBasic();


                //Szilveszter
                //.antMatchers("/v?/api-docs").permitAll()
                //.antMatchers("/swagger-ui/**").permitAll()
                //.antMatchers("/swagger-resources/**").permitAll()
                //.anyRequest().authenticated();
                .anyRequest().permitAll();

    }

//    @Bean
//    PasswordEncoder bcryptPasswordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Override
//    protected void configure (AuthenticationManagerBuilder auth) throws Exception{
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        auth.inMemoryAuthentication()
//                .withUser("user1").password(encoder.encode("user1")).roles("USER")
//                .and()
//                .withUser("admin1").password(encoder.encode("admin1")).roles("ADMIN");
//
//    }


//    @Override
//    protected UserDetailsService userDetailsService() {
//        UserDetails user =
//                User.withDefaultPasswordEncoder()
//                        .username("user")
//                        .password("password")
//                        .roles("USER")
//                        .build();
//
//        return new InMemoryUserDetailsManager(user);
//    }
}
