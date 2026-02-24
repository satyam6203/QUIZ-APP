package com.quiz.Backend.Controller;

import com.quiz.Backend.Entity.PythonQuiz;
import com.quiz.Backend.Services.PythonService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/python/quiz")
@RequiredArgsConstructor
public class PythonController {

    private final PythonService pythonService;

    @GetMapping("/questions")
    public List<PythonQuiz> getQuestions() {
        return pythonService.getAllQuestions();
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public PythonQuiz saveQuestion(@RequestBody PythonQuiz question) {
        return pythonService.saveQuestion(question);
    }
}
