package org.disz.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableWebMvc
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer configurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(final @NonNull CorsRegistry registry) {
				registry.addMapping("/**")
 						.allowedMethods("*")
						.allowedOrigins("http://localhost:3000")
						.allowedHeaders("Origin", "Access-control-Request-Method", "Access-Control-Request-Headers")
						.exposedHeaders("Access-Control-Request-Origin")
						.allowCredentials(true);

			}
		};
	}
}
