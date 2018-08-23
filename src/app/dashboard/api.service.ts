import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Candidate } from './candidate';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllCandidates(): Observable<Candidate[]> {
    return this.http
      .get(API_URL + '/candidate')
      .map(response => {
        const candidates = response.json();
        return candidates.map((candidate) => new Candidate(candidate));
      })
      .catch(this.handleError);
  }

  public createCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http
      .post(API_URL + '/candidate', candidate)
      .map(response => {
        return new Candidate(response.json());
      })
      .catch(this.handleError);
  }

  public getCandidateById(candidateId: number): Observable<Candidate> {
    return this.http
      .get(API_URL + '/candidate/' + candidateId)
      .map(response => {
        return new Candidate(response.json());
      })
      .catch(this.handleError);
  }

  public updateCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http
      .put(API_URL + '/candidate/' + candidate.id, candidate)
      .map(response => {
        return new Candidate(response.json());
      })
      .catch(this.handleError);
  }

  public deleteCandidateById(candidateId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/candidate/' + candidateId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
