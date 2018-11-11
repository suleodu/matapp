import { Injectable } from '@angular/core';

export interface Course{
  csid: string;
  csname: string;
  status: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  ELEMENT_DATA: Course[] = [
    { csid: 'csc111', csname: 'Intro. to Computer1',  status: false },
    { csid: 'csc112', csname: 'Intro. to Computer2',  status: false },
    { csid: 'csc113', csname: 'Intro. to Computer3', status: false },
    { csid: 'csc111', csname: 'Intro. to Computer1', status: false },
    { csid: 'csc112', csname: 'Intro. to Computer2', status: false },
    { csid: 'csc113', csname: 'Intro. to Computer3', status: false },
    { csid: 'csc111', csname: 'Intro. to Computer1', status: false },
    { csid: 'csc112', csname: 'Intro. to Computer2', status: false },
    { csid: 'csc113', csname: 'Intro. to Computer3', status: false },
    { csid: 'csc111', csname: 'Intro. to Computer1', status: false },
    { csid: 'csc112', csname: 'Intro. to Computer2', status: false },
    { csid: 'csc113', csname: 'Intro. to Computer3', status: false },
  ];

  constructor() { }

  getAllCourses(): Course[] {
    return this.ELEMENT_DATA;
  }
}
