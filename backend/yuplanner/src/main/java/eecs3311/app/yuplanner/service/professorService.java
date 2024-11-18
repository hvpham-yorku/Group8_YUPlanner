package eecs3311.app.yuplanner.service;

import java.util.List;

import eecs3311.app.yuplanner.model.professor;

public interface professorService {
    public professor saveProfessor(professor professor);
    public List<professor> getAllProfessors();
}