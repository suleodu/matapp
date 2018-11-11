import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, BehaviorSubject, of} from 'rxjs';

import {SessionService, Session} from './session.service';

import {catchError, finalize} from 'rxjs/operators';



export class SessionDataSource implements DataSource<Session> {

  private sessionSubject = new BehaviorSubject<Session[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private sessionService: SessionService) {

  }

  loadSession(sesId: number,
              filter: string,
              sortDirection: string,
              pageIndex: number,
              pageSize: number) {

      this.loadingSubject.next(true);

      this.sessionService.findLessons(sesId, filter, sortDirection,
          pageIndex, pageSize).pipe(
              catchError(() => of([])),
              finalize(() => this.loadingSubject.next(false))
          )
          .subscribe(lessons => this.sessionSubject.next(lessons));

  }

  connect(collectionViewer: CollectionViewer): Observable<Session[]> {
      console.log('Connecting data source');
      return this.sessionSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.sessionSubject.complete();
      this.loadingSubject.complete();
  }

}
