package eecs3311.app.yuplanner.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eecs3311.app.yuplanner.model.professor;
import eecs3311.app.yuplanner.repository.professorRepository;

@Service
public class professorServiceImpl implements professorService {

    @Autowired
    private professorRepository professorRepository;
    
    @Override
    public professor saveProfessor(professor professor){
        return professorRepository.save(professor);
    }

    @Override
    public List<professor> getAllProfessors(){
        return professorRepository.findAll();
    }
}