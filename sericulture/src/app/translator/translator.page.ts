import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

interface StageDetails {
  Stage: string;
  feedDays: string;
  disinfectant: string;
  startBedSize: string;
  endBedSize: string;
  detailAge: number;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})
export class TranslatorPage implements OnInit {
  
  activeTab: string = 'day1'; 
  selectedDay: any;
  retrievedData: any[] = [];
  selectedLanguage: string = 'english'; // Default language
  dataLoaded: boolean = false;
  selectedStage: string = '';
  selectedDate: string = '';
  stages: StageDetails[] = [];
  

// English labels
  englishLabels = {
    stage: 'Stage',
    stages: 'Stages',
    startBedSize: 'Start Bed Size',
    disinfectant: 'Disinfectant',
    endBedSize: 'End Bed Size',
    detailAge: 'Detail Age',
    feedDays: 'Feed Days',
    selection: 'Day Selection'
  };

  // Tamil labels
  tamilLabels = {
    stage: 'படிமம்',
    stages: 'படிப்புகள்',
    startBedSize: 'தொடக்க படுக்கை அளவு',
    disinfectant: 'மொல்ட் பிறகு கிருமி நாசனி',
    endBedSize: 'இறுதி படுக்கை அளவு',
    detailAge: 'விவரம்/வயது',
    feedDays: 'உணவு அளிக்கும் நாட்கள்',
    selection: 'நாள் தேர்வு',
  };


  constructor(private dateService: DateService) { }
  
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    let dataObservable;

    if (this.selectedLanguage === 'english') {
      dataObservable = this.dateService.getEnglishData('english');
    } else if (this.selectedLanguage === 'tamil') {
      dataObservable = this.dateService.getTamilData('tamil');
    } else {
      // Handle other language cases or set a default behavior
      return;
    }

    dataObservable.subscribe(
      (data) => {
        this.retrievedData = data;
        this.dataLoaded = true;
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }

  onSelectLanguage(): void {
    this.fetchData(); // Fetch data again when language changes
  }

  getLabels(): any {
    return this.selectedLanguage === 'tamil' ? this.tamilLabels : this.englishLabels;
  }
  
  calculateDates(): void {
    const stageData = this.stages.find((stage) => stage.feedDays === this.selectedStage);
    if (stageData && this.selectedDate) {
      const feedDays = parseInt(stageData.feedDays, 10);
  
      const startDate = new Date(this.selectedDate);
      const endDate = new Date(startDate.getTime() + feedDays * 24 * 60 * 60 * 1000);
  
      const formattedStartDate = startDate.toISOString().split('T')[0];
      const formattedEndDate = endDate.toISOString().split('T')[0];
  
      stageData.startDate = formattedStartDate;
      stageData.endDate = formattedEndDate;
  
      // Update the UI for the selected stage
      this.retrievedData = this.retrievedData.map((item) => {
        if (item.feedDays === this.selectedStage) {
          item.startDate = formattedStartDate;
          item.endDate = formattedEndDate;
        }
        return item;
      });
  
      // Save the selected start date
      this.dateService.saveSelectedDate(formattedStartDate).subscribe(
        (response) => {
          console.log('Date saved successfully:', response);
        },
        (error) => {
          console.error('Error saving date:', error);
        }
      );
    }
  }
 
}
