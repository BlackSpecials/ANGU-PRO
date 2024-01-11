import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments:Assignment[] = [
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu: new Date("2024-02-17"),
      rendu: false
    },
    {
      nom:"Devoir J2EE de Mr Grin",
      dateDeRendu: new Date("2024-12-15"),
      rendu: true
    },
    {
      nom:"Devoir J2EE de Mr Winter, gestion de projet",
      dateDeRendu: new Date("2024-11-10"),
      rendu: true
    }
  ];

  constructor() { }

  getAssignments():Assignment[]{
    return this.assignments;
  }
}
