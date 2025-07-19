package com.Quiz.Backend.Service;

import com.Quiz.Backend.Entity.JsQuestion;
import com.Quiz.Backend.Repo.JsRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JsService {

    @Autowired
    JsRepo jsRepo;

    public List<JsQuestion> getAllQuestion(){
        return jsRepo.findAll();
    }

    public JsQuestion jsQuestion(JsQuestion jsQuestion){
        return jsRepo.save(jsQuestion);
    }

    public Optional<Optional<JsQuestion>> findJsQuestionById(Long id){
        if(id==null || !jsRepo.existsById(id)){
            return Optional.empty();
        }
        else{
            return Optional.of(jsRepo.findById(id));
        }
    }

    public ResponseEntity<String> updateJsQuestion(JsQuestion jsQuestion){
        if(jsQuestion.getId()==null){
            return ResponseEntity.badRequest().body("Unable to update the question");
        }else{
            return ResponseEntity.ok().body("Quesiton Updated SuccessFully");
        }
    }

    public ResponseEntity<String> deleteJsuestion(Long id){
        if(id==null || !jsRepo.existsById(id)){
            return ResponseEntity.badRequest().body("The Question is not found From this id");
        }else{
            jsRepo.deleteById(id);
            return ResponseEntity.ok().body("Question deleted SuccessFully");
        }
    }

    public ResponseEntity<String> deleAllJsQuestion(){
        jsRepo.deleteAll();
        return ResponseEntity.ok().body("All Questions are Deleted!");
    }
}
