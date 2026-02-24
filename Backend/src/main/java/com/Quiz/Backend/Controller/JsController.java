package com.quiz.Backend.Controller;

import com.quiz.Backend.Entity.JavaQuiz;
import com.quiz.Backend.Entity.JsQuiz;
import com.quiz.Backend.Services.JsService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/js/quiz")
@AllArgsConstructor
public class JsController {

    private final JsService jsService;

    @GetMapping("/questions")
    public List<JsQuiz> getQuestions() {
        return jsService.getAllQuestions();
    }

    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public JsQuiz saveQuestion(@RequestBody JsQuiz question) {
        return jsService.saveQuestion(question);
    }

}
