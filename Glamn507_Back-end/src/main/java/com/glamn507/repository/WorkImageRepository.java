package com.glamn507.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glamn507.entity.WorkImage;

public interface WorkImageRepository extends JpaRepository<WorkImage, Long> {
	List<WorkImage> findByWorkIdOrderBySortOrderAsc(Long workId);
}
