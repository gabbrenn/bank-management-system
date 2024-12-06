package com.gb.bankmanagement.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Card {
    
    @Id
    @GeneratedValue
    private Long id;
    private Long cardNumber;
    private Long cvvNumber;
    private Date issueDate;
    private Date expireDate;
    private int cardPin;

    // Get and Setter for Id
    public long getId(){
        return id;
    }
    
    public void setId(long id){
        this.id = id;
    }

    // Get and Setter for CardNumber
    public long getCardNumber(){
        return cardNumber;
    }

    public void setCardNumber(long cardNumber){
        this.cardNumber = cardNumber;
    }

    // Get and Setter for cvvNumber
    public long getCvvNumber(){
        return cvvNumber;
    }
    public void setCvvNumber(long cvvNumber){
        this.cvvNumber =cvvNumber;
    }

}
