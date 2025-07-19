package com.Quiz.Backend.Repo;

import com.Quiz.Backend.Entity.JsQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JsRepo extends JpaRepository<JsQuestion,Long> {
}
