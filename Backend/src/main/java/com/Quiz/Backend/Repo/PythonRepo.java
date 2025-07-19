package com.Quiz.Backend.Repo;

import com.Quiz.Backend.Entity.PythonQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PythonRepo extends JpaRepository<PythonQuestion,Long> {

}
