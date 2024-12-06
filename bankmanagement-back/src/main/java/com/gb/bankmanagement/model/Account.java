package com.gb.bankmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Account {

    @Id
    @GeneratedValue
    private Long id;
    private String acType;
    private long panNumber;
    private long acNumber;
    private String customerName;
    private String address;
    private long adharNumber;
    private String phoneNumber;
    private String email;
    private long ifsc;
    private double amount;

    // Getter and Setter for acid
    public long getId() {
        return id;
    }

    public void setId(long id){
        this.id = id;
    }

    // Getter and Setter for ac_type
    public String getAcType() {
        return acType;
    }

    public void setAcType(String acType) {
        this.acType = acType;
    }

    // Getter and Setter for pan_number
    public long getPanNumber() {
        return panNumber;
    }

    public void setPanNumber(long panNumber) {
        this.panNumber = panNumber;
    }

    // Getter and Setter for ac_number
    public long getAcNumber() {
        return acNumber;
    }

    public void setAcNumber(long acNumber) {
        this.acNumber = acNumber;
    }

    // Getter and Setter for customer_name
    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    // Getter and Setter for address
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // Getter and Setter fo adhar_number
    public long getAdharNumber(){
        return adharNumber;
    }
    public void setAdharNumber(long adharNumber){
        this.adharNumber = adharNumber;
    }

    // Getter and Setter for phone_number
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter for ifsc
    public long getIfsc() {
        return ifsc;
    }

    public void setIfsc(long ifsc) {
        this.ifsc = ifsc;
    }

    // Getter and Setter for amount
    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
