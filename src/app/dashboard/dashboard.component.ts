import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from './nav-item';
import {NavService} from '../service/nav.service';

@Component({
  selector: 'Dashboard-app',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Qualified candidates',
      iconName: 'group',
      route: 'qualified'
    },
    {
      displayName: 'New Candidates',
      iconName: 'person',
      route: 'new'
    },
    {
      displayName: 'Not Contacted',
      iconName: 'star_rate',
      route: 'notContacted'
    },
    {
      displayName: 'Followed Candidates',
      iconName: 'star_rate',
      route: 'followed'
    }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
