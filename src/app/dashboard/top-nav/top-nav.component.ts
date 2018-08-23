import { Component, OnInit } from '@angular/core';
import {NavService} from '../../service/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public navService: NavService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['login']);
  }

}