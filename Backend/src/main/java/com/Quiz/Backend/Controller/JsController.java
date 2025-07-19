package com.Quiz.Backend.Controller;

import com.Quiz.Backend.Entity.JsQuestion;
import com.Quiz.Backend.Service.JsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/quiz/js")
public class JsController {

    @Autowired
    JsService jsService;

    @GetMapping("/all-question")
    public List<JsQuestion> getAllJsQuestion(){
        try{
            return jsService.getAllQuestion();
        }
        catch(Exception e){
            e.printStackTrace();
            return List.of();
        }
    }

    @PostMapping("/save-question")
    public JsQuestion savejsQuestion(JsQuestion jsQuestion){
        try{
            return jsService.jsQuestion(jsQuestion);
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
    }


    @GetMapping("/get-question/{id}")
    public Optional<Optional<JsQuestion>> findByQuestionId(@PathVariable Long id){
        try{
            return jsService.findJsQuestionById(id);
        }
        catch(Exception e){
            e.printStackTrace();
            return Optional.empty();
        }
    }

    @PutMapping("/update-question/{id}")
    public ResponseEntity<String> updateQuestion(@RequestBody JsQuestion jsQuestion){
        try{
            jsService.updateJsQuestion(jsQuestion);
            return ResponseEntity.ok().body("Question Updated SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Uable to Update Question by this id");
        }
    }

    @DeleteMapping("/delete-question/{id}")
    public ResponseEntity<String> deleteQuestion(@PathVariable Long id){
        try{
            jsService.deleteJsuestion(id);
            return ResponseEntity.ok().body("Question deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Unale to Delete All Question");
        }
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<String> deleteAllJsQuestion(){
        try{
            jsService.deleAllJsQuestion();
            return ResponseEntity.ok().body("All question Deleted SuccessFully");
        }
        catch(Exception e){
            return ResponseEntity.status(500).body("Unable to delete the Js Question");
        }
    }
    
}
