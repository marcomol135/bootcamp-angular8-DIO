import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
    templateUrl: './courses.info.component.html'
})

export class CourseInfoComponent implements OnInit{

    course:Course;

    constructor(private activatedRoute: ActivatedRoute,
                private CourseService: CourseService){}

    ngOnInit(): void{
        this.CourseService.retrieveAllById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course =course,
            error: err => console.log('Error: ',err) ,      
        });
    }
    save():void{
        this.CourseService.save(this.course).subscribe({
            next: course =>console.log('Saved with success', course),
            error: err => console.log('Error: ',err) ,  
        });
    }

    
}

// + this.activeRoute   sinal de + converte de string para number