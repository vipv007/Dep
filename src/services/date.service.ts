import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private baseUrl = 'http://localhost:4000/api/dates';
  public englishApiUrl = 'http://localhost:4000/api/english-data'; // English data endpoint
  public tamilApiUrl = 'http://localhost:4000/api/tamil-data'; // Tamil data endpoint
  private selectedLocationsUrl = 'http://localhost:4000/api/selectedLocations';

  constructor(private http: HttpClient) {}

  saveSelectedDate(selectedDate: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save-date`, { selectedDate });
  }

  getDataForDate(selectedDate: string): Observable<any> {
    // Adjust the URL and endpoint based on your API structure
    const url = `${this.baseUrl}/data-by-date?selectedDate=${selectedDate}`;
    return this.http.get<any>(url);
  }

  getStoredDate(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-date`);
  }

  getStages(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/stages`);
  }

  getDataByLanguage(condition: string): Observable<any> {
    if (condition === 'english') {
      return this.getEnglishData(condition);
    } else if (condition === 'tamil') {
      return this.getTamilData(condition);
    } else {
      // Handle other language conditions if needed
      return this.http.get<any>(`${this.baseUrl}/default-endpoint`);
    }
  }

  public getEnglishData(condition: string): Observable<any> {
    const url = `${this.englishApiUrl}?condition=${condition}`;
    return this.http.get<any>(url);
  }

  public getTamilData(condition: string): Observable<any> {
    const url = `${this.tamilApiUrl}?condition=${condition}`;
    return this.http.get<any>(url);
  }

  // Define methods to interact with backend for selected locations
  getSelectedLocations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.selectedLocationsUrl}/get-loc`);
  }

  saveSelectedLocations( selectedLocation: string): Observable<any> {
    return this.http.post<any>(`${this.selectedLocationsUrl}/save-loc`, {  selectedLocation });
  }

}
