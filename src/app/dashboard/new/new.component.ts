import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Candidate } from '../candidate';
import { CandidateDataService } from '../candidate-data.service';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  candidate: Candidate = new Candidate()
  candidateForm: FormGroup;
  submitted: boolean = false;
  private sub: any;
  id: number;
  submitTxt:string = 'Add'
  title:string = 'New Candidate'

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private candidateDataService: CandidateDataService,public router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      if(this.id){
        this.submitTxt = 'Update'
        this.title = 'Edit Candidate'
        this.candidateDataService
        .getCandidateById(this.id)
        .subscribe(
          (candidate) => {
            this.mapformgroup(candidate)
          }
        );
      }
   });
   this.mapformgroup(this.candidate)
   
  }

  mapformgroup(candidate){
    this.candidateForm = this.formBuilder.group({
      name: [candidate.name, Validators.required],
      position: [candidate.position, Validators.required],
      experience: [candidate.experience, Validators.required],
      date: [candidate.date, Validators.required],
      stage: [candidate.stage, Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.candidateForm.invalid) {
      return;
    }
    this.candidate = new Candidate();
    this.candidate.name = this.candidateForm.controls.name.value;
    this.candidate.position = this.candidateForm.controls.position.value
    this.candidate.experience = this.candidateForm.controls.experience.value
    this.candidate.date = this.candidateForm.controls.date.value
    this.candidate.stage = this.candidateForm.controls.stage.value

    this.onAddUpdateCandidates(this.candidate);
   
  }

  onAddUpdateCandidates(candidate) {
    if(this.submitTxt == 'Update'){
      candidate.id = this.id;
      this.candidateDataService
      .updateCandidate(candidate)
      .subscribe(
        (newCandidate) => {
          //this.candidate = this.candidate.concat(newCandidate);
          this.router.navigate(['dashboard/qualified']);//[item.route]);

        }
      );
    }else{
      this.candidateDataService
      .addCandidates(candidate)
      .subscribe(
        (newCandidate) => {
          //this.candidate = this.candidate.concat(newCandidate);
          this.router.navigate(['dashboard/qualified']);//[item.route]);

        }
      );
    }
    
  }

  delete(){
    this.candidateDataService
      .deleteCandidateById(this.id)
      .subscribe(
        (newCandidate) => {
          this.router.navigate(['dashboard/qualified']);
        }
      );
  }
 
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}