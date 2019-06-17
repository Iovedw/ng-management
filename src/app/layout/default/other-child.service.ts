import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OtherChildService {
  private Source = new Subject<any>();
  Status$ = this.Source.asObservable();
  StatusMission(message: any) {
    this.Source.next(message);
  }
}