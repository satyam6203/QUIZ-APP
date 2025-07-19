package com.Quiz.Backend.Repo;

import com.Quiz.Backend.Entity.CQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CRepo extends JpaRepository<CQuestion,Long> {
}
