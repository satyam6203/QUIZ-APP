package com.quiz.Backend.Controller;

import com.quiz.Backend.Entity.CppQuiz;
import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Services.CppService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/cpp/quiz")
@RestController
@RequiredArgsConstructor
public class CppController {

    private final CppService cppService;

    @GetMapping("/questions")
    public List<CppQuiz> getQuestions() {
        return cppService.getAllQuestions();
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public CppQuiz saveQuestion(@RequestBody CppQuiz question) {
        return cppService.saveQuestion(question);
    }
}
