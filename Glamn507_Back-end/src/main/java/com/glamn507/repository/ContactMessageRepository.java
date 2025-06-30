package com.glamn507.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glamn507.entity.ContactMessage;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long>{

}
