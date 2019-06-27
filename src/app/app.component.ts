import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks$: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  ){}

  ngOnInit(): void {
    this.tasks$ = this.db.collection<>;
  }

}

