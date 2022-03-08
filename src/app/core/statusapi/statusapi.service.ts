import {
    Injectable
} from '@angular/core';
import {
    HttpClient, HttpHeaders
} from '@angular/common/http';
import {
    Observable,
    ReplaySubject
} from 'rxjs';
import {
    catchError,
    map,
    tap
} from 'rxjs/operators';

import { ResultStatusApi } from './drivers.types';

@Injectable({
    providedIn: 'root'
})
export class StatusApiService {

    private authToken: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6IjYyMWIwNmJhMWNhODZmNDJkOWYwYWNmOCIsImRvY3VtZW50VHlwZSI6IkNDIiwiZG9jdW1lbnROdW1iZXIiOiIxNTE3MTM5OSIsInYiOjEsInJvbGUiOiJjbGllbnQiLCJzdWJzY3JpcHRpb25QbGFuIjoiNjIxYjA2YmExY2E4NmY0MmQ5ZjBhY2Y5IiwiaWF0IjoxNjQ2Njk0MDQwfQ.63vTq-KxGjPzZlmNAWn2ZW8MeNVDnqw74bvfMUcvif4';

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

   
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    get(params :any): Observable < any > {
        return this._httpClient.get <any> (params.url,{
          params:params.params,
          headers : new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${this.authToken}`
          }),  
        }).pipe();
    }

}