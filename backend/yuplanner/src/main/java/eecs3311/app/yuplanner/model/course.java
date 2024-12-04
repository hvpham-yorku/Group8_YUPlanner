package eecs3311.app.yuplanner.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "coursecode") // Match this to your database column name
    private int courseCode;
    private String dept;
    private String coursename;
    private String courseday;
    private String coursetime;
    private String courseduration;
    private String courselocation;
    private String coursecampus;
    private String courseprerequisites;
    private String courseinstructor;
    private String courseterm;
    private String coursesection;
    private String coursetype;


    public course(){
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCoursecode() {
        return courseCode;
    }

    public void setCourseCode(int courseCode) {
        this.courseCode = courseCode;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }
    
    public String getCoursename() {
        return coursename;
    }

    public void setCoursename(String coursename) {
        this.coursename = coursename;
    }

    public String getCourseday() {
        return courseday;
    }

    public void setCourseday(String courseday) {
        this.courseday = courseday;
    }

    public String getCoursetime() {
        return coursetime;
    }

    public void setCoursetime(String coursetime) {
        this.coursetime = coursetime;
    }

    public String getCourseduration() {
        return courseduration;
    }

    public void setCourseduration(String courseduration) {
        this.courseduration = courseduration;
    }

    public String getCoursecampus() {
        return coursecampus;
    }

    public void setCoursecampus(String coursecampus) {
        this.coursecampus = coursecampus;
    }

    public String getCourselocation() {
        return courselocation;
    }

    public void setCourselocation(String courselocation) {
        this.courselocation = courselocation;
    }

    public String getCourseprerequisites() {
        return courseprerequisites;
    }

    public void setCourseprerequisites(String courseprerequisites) {
        this.courseprerequisites = courseprerequisites;
    }

    public String getCourseinstructor() {
        return courseinstructor;
    }

    public void setCourseinstructor(String courseinstructor) {
        this.courseinstructor = courseinstructor;
    }

    public String getCourseterm() {
        return courseterm;
    }

    public void setCourseterm(String courseterm) {
        this.courseterm = courseterm;
    }

    public String getCoursesection() {
        return coursesection;
    }

    public void setCoursesection(String coursesection) {
        this.coursesection = coursesection;
    }

    public String getCoursetype() {
        return coursetype;
    }

    public void setCoursetype(String coursetype) {
        this.coursetype = coursetype;
    }
}