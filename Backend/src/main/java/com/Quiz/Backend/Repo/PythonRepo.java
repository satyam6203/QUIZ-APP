package com.quiz.Backend.Repo;

import com.quiz.Backend.Entity.PythonQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PythonRepo extends JpaRepository<PythonQuiz,Long> {

}
