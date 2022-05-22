import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = `${environment.apiUrl}/client`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getClients() {
    const header = new HttpHeaders().set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3R5cGUiOiJhZG1pbiIsInVzZXJfaWQiOiI2MjdkNmEzOTgxMWE5YzViZjMyZGVmNDYiLCJpYXQiOjE2NTMyMTA0NzQsImV4cCI6MTY1NjgxMDQ3NH0.hSRI81wAaZ7HXoT3P56V7ex8IQxGsrh5R4VndETjjSI`);
    return this.http.get(`${this.apiUrl}/retrieve`, { headers: header })
    .pipe(
      
    )
  }
} 
