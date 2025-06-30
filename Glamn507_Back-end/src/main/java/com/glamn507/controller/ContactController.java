package com.glamn507.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glamn507.entity.ContactMessage;
import com.glamn507.service.ContactService;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<?> sendContactMessage(@RequestBody ContactMessage contactMessage) {
        ContactMessage saved = contactService.saveMessage(contactMessage);
        return ResponseEntity.ok(saved);
    }
}
