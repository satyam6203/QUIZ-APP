package com.quiz.Backend.Repo;

import com.quiz.Backend.Entity.JavaQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JavaQuizRepo extends JpaRepository<JavaQuiz,Long> {

}
