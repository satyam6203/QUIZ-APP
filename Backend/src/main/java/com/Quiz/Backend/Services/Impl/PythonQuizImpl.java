package com.quiz.Backend.Services.Impl;

import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Entity.PythonQuiz;
import com.quiz.Backend.Repo.PythonRepo;
import com.quiz.Backend.Services.PythonService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PythonQuizImpl implements PythonService {

    private final PythonRepo pythonRepo;

    @Override
    public List<PythonQuiz> getAllQuestions() {
        return pythonRepo.findAll();
    }

    @Override
    public PythonQuiz saveQuestion(PythonQuiz question) {
        return pythonRepo.save(question);
    }
}
