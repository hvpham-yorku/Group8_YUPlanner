package eecs3311.app.yuplanner.service;

import java.util.List;
import java.util.Optional;

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
    @Override
    public professor findByUsername(String username) {
        return professorRepository.findByUsername(username); // Delegate to the repository
    }
    
    @Override
    public professor findprofessor(professor pr) {
        // Implement logic to find a professor, e.g., by using a repository query
        return professorRepository.findByUsername(pr.getUsername());
    }

    @Override
    public Optional<professor> findProfessorById(int id) {
        return professorRepository.findById(id); // Use JPA's findById
    }
    
    @Override
    public professor findById(int id) {
        return professorRepository.findById(id).orElse(null);  // This will return the professor or null if not found
    }
}
