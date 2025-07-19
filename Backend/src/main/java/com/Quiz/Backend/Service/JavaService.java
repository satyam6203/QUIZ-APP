package com.Quiz.Backend.Service;

import com.Quiz.Backend.Entity.JavaQuestion;
import com.Quiz.Backend.Repo.JavaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;


@Service
public class JavaService {

    @Autowired
    JavaRepo javaRepo;

    public List<JavaQuestion> getAllQuestion(){
        return javaRepo.findAll();
    }

    public JavaQuestion saveJavaQuestion(JavaQuestion javaQuestion){
        return javaRepo.save(javaQuestion);
    }

    public ResponseEntity<String> deleteJavaQuestion(Long id){
        if(id==null || !javaRepo.existsById(id)){
            return ResponseEntity.badRequest().body("The Question is not found From this id");
        }else{
            javaRepo.deleteById(id);
            return ResponseEntity.ok().body("Question deleted SuccessFully");
        }
    }

    public ResponseEntity<String> deleAllQuestion(){
        javaRepo.deleteAll();
        return ResponseEntity.ok().body("All Questions are Deleted!");
    }

    public Optional<Optional<JavaQuestion>> getQuestionById(Long id){
        if(id==null || !javaRepo.existsById(id)){
            return Optional.empty();
        }
        else{
            return Optional.of(javaRepo.findById(id));
        }
    }

    public ResponseEntity<String> UpdateJavaQuestion(JavaQuestion javaQuestion){
        if(javaQuestion.getId()==null){
            return ResponseEntity.badRequest().body("Question is not found by this id");
        }
        else{
            javaRepo.save(javaQuestion);
            return ResponseEntity.ok().body("Question Updated SuccessFully");
        }
    }
}
