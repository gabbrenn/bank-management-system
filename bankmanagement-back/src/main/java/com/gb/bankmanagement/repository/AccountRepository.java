package com.gb.bankmanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gb.bankmanagement.model.Account;

public interface AccountRepository extends JpaRepository<Account,Long> {
    // Custom query method to find account by account number
    Optional<Account> findByAcNumber(Long acNumber);
}
