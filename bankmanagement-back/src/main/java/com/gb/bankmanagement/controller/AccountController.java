package com.gb.bankmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gb.bankmanagement.model.Account;
import com.gb.bankmanagement.repository.AccountRepository;



@RestController
@CrossOrigin("http://localhost:3000")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/account")
    Account newAccount(@RequestBody Account newAccount){
        return accountRepository.save(newAccount);
    }

    @GetMapping("/accounts/{acNumber}")
    public ResponseEntity<Account> getAccountByNumber(@PathVariable Long acNumber) {
        return accountRepository.findByAcNumber(acNumber)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
}

    // List<Account> getAllAccounts(){
    //     return accountRepository.findAll();
    // }
    
    

}
