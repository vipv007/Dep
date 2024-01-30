import { Component, OnInit } from '@angular/core';
 

import { TimesheetService } from '../services/timesheet.service';

@Component({
  selector: 'app-imageupload2',
  templateUrl: 'imageupload2.page.html',
  styleUrls: ['imageupload2.page.scss'],
})
export class Imageupload2Page implements OnInit {
  worklogData: any[] = [];
  visibleEntries: any[] = [];
  totalWorkingHours: number = 0;
  calculatedSalary: number = 0;

  constructor(private timesheetService: TimesheetService) {}

  ngOnInit(): void {
    this.fetchWorklogEntries();
  }

  fetchWorklogEntries(): void {
    this.timesheetService.getWorklogEntries().subscribe(
      (entries: any[]) => {
        this.worklogData = entries.slice(0, 31);
        this.calculateTotalHours();
        this.updateVisibleEntries();
      },
      error => {
        console.error('Error fetching entries:', error);
      }
    );
  }

  addEntry(): void {
    const newEntry = {
      date: '',
      name: '',
      checkIn: '',
      checkOut: '',
      totalHours: '',
      description: '',
    };
    this.worklogData.unshift(newEntry);
    this.updateVisibleEntries();
  }

  saveEntries(): void {
    this.calculateTotalHours();
    const entriesToInsert = this.worklogData.filter(entry => entry.date.trim() !== '');
    this.timesheetService.addWorklogEntries(entriesToInsert).subscribe(
      response => {
        console.log('Entries added successfully:', response);
        this.clearForm();
        this.fetchWorklogEntries();
      },
      error => {
        console.error('Error adding entries:', error);
      }
    );
  }

  calculateTotalHours(): void {
    this.totalWorkingHours = 0;
    this.worklogData.forEach(entry => {
      if (entry.totalHours !== '' && !isNaN(parseFloat(entry.totalHours))) {
        this.totalWorkingHours += parseFloat(entry.totalHours);
      }
    });
    this.calculatedSalary = this.totalWorkingHours * 51.28;
  }

  clearForm(): void {
    this.worklogData.forEach(entry => {
      entry.date = '';
      entry.name = '';
      entry.checkIn = '';
      entry.checkOut = '';
      entry.totalHours = '';
      entry.description = '';
    });
    this.updateVisibleEntries();
  }


  showAllEntries = false;

  toggleVisibility(): void {
    this.showAllEntries = !this.showAllEntries;
  }

  updateVisibleEntries(): void {
    this.visibleEntries = this.showAllEntries ? [...this.worklogData] : this.worklogData.slice(0, 3);
  }
   

}
