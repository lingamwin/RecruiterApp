import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {GridOptions} from "ag-grid";
import { CandidateDataService } from '../candidate-data.service';
import { ApiService } from '../api.service';
import { Candidate } from '../candidate';
import { Router } from '@angular/router';


@Component({
  selector: 'app-qualified',
  templateUrl: './qualified.component.html',
  styleUrls: ['./qualified.component.scss'],
  providers: [CandidateDataService, ApiService],

})
export class QualifiedComponent implements OnInit {

  candidate: Candidate[] = [];

  private gridOptions: GridOptions;
  @Output()
  add: EventEmitter<Candidate> = new EventEmitter();

  constructor( private candidateDataService: CandidateDataService,public router: Router) {
    this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "Name",
                field: "name",
                width: 200
            },
            {
                headerName: "Job Position",
                field: "position",
                width: 200
            },
            {
                headerName: "Year of Experience",
                field: "experience",
                width: 200
            },
            {
                headerName: "Date",
                field: "date",
                width: 190
            },
            {
                headerName: "Stage of Interview",
                field: "stage",
                width: 200
            }

        ];
        // this.gridOptions.rowData = [
        //     {'name': 'Lingam', position: 'Angular Developer',experience:6,date:'12/08/18',stage:'first Round'},
        // ]

        
   }

 
  public ngOnInit() {
    this.candidateDataService
      .getAllCandidates()
      .subscribe(
        (candidate) => {
          this.gridOptions.rowData = candidate;
          this.gridOptions.api.setRowData(this.gridOptions.rowData)
        }
      );

    //   this.gridOptions.getRowNodeId = function(data) {
    //     return data.id;
    // };
  }


  onRowClicked(event: any) { 
    console.log('row', event.data.id);
    this.router.navigate(['/dashboard/new',event.data.id]);//[item.route]);
   }

  onToggleCandidatesComplete(candidate) {
    this.candidateDataService
      .toggleCandidateComplete(candidate)
      .subscribe(
        (updatedCandidate) => {
          candidate = updatedCandidate;
        }
      );
  }

  onRemoveCandidates(candidate) {
    this.candidateDataService
      .deleteCandidateById(candidate.id)
      .subscribe(
        (_) => {
          this.candidate = this.candidate.filter((t) => t.id !== candidate.id);
        }
      );
  }

  goNew(){
    this.router.navigate(['dashboard/new']);//[item.route]);
  }

  


}