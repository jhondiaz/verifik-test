import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    ViewChild,
    ElementRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    OnlinePostmanService
} from '../online-postman.service';
import {
    forkJoin,
    Observable,
    of
} from 'rxjs';
import moment from 'moment';
import { catchError } from 'rxjs/operators';


@Component({
    selector: 'app-online-postman',
    templateUrl: './online-postman.component.html',
    styleUrls: ['./online-postman.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlinePostmanComponent implements OnInit {
  
    user: any;
    
    accessToken: string;
  
    constructor() {
      this.user = JSON.parse(localStorage.getItem('user'));
  
      this.accessToken = localStorage.getItem('accessToken');
      console.log(this.user);
    }
  
    ngOnInit(): void {
      
    }
  
  }