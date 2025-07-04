package com.glamn507.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glamn507.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}
