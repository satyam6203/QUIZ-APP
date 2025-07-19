package com.Quiz.Backend.Repo;

import com.Quiz.Backend.Entity.JavaQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JavaRepo extends JpaRepository<JavaQuestion, Long> {
}
