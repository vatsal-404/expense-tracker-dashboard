package com.expensetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExpenseTrackerApplication {

    public static void main(String[] args) {
        System.out.println("URL = " + System.getenv("SPRING_DATASOURCE_URL"));
        System.out.println("USER = " + System.getenv("SPRING_DATASOURCE_USERNAME"));
        SpringApplication.run(ExpenseTrackerApplication.class, args);
    }
}