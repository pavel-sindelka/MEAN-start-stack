import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IAstronaut {
  _id?: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  superPower: string;
}

const api = 'http://localhost:4300/api/astronauts/';

@Injectable()
export class AstronautsService {
  constructor(private http: Http) {
  }

  getAstronauts(): Observable<IAstronaut[]> {
    return this.http.get(api)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createAstronaut(astronaut: IAstronaut): Observable<IAstronaut> {
    return this.http.post(api, astronaut)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateAstronaut(astronaut: IAstronaut): Observable<any> {
    return this.http.put(api + astronaut._id, astronaut)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteAstronaut(astronaut: IAstronaut): Observable<any> {
    return this.http.delete(api + astronaut._id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
