import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Candidate } from './candidate';

@Injectable()
export class CandidateDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /todos
  addCandidates(candidate: Candidate): Observable<Candidate> {
    return this.api.createCandidate(candidate);
  }

  // Simulate DELETE /todos/:id
  deleteCandidateById(candidateId: number): Observable<Candidate> {
    return this.api.deleteCandidateById(candidateId);
  }

  // Simulate PUT /todos/:id
  updateCandidate(candidate: Candidate): Observable<Candidate> {
    return this.api.updateCandidate(candidate);
  }

  // Simulate GET /todos
  getAllCandidates(): Observable<Candidate[]> {
    return this.api.getAllCandidates();
  }

  // Simulate GET /todos/:id
  getCandidateById(CandidateId: number): Observable<Candidate> {
    return this.api.getCandidateById(CandidateId);
  }

  // Toggle complete
  toggleCandidateComplete(candidate: Candidate) {
    candidate.complete = !candidate.complete;
    return this.api.updateCandidate(candidate);
  }

}
