package com.quiz.Backend.Repo;

import com.quiz.Backend.Entity.JsQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JsRepo extends JpaRepository<JsQuiz,Long> {

}
