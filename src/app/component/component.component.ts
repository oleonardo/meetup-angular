import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Http } from "@angular/http";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  onChangesIterations: number = 0;
  onInitIterations: number = 0;
  onDoCheckIterations: number = 0;
  onAfterContentInitIterations: number = 0;
  onAfterContentCheckedIterations: number = 0;

  data: string = "Qualquer valor";

  apiGetSubscription: Subscription;
  marvelCharacters: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.onInitIterations++;

    this.apiGetSubscription = this.http.get('https://gateway.marvel.com:443/v1/public/characters?offset=550&limit=50&apikey=41751631ce8fe6ef78541f6ff118f662')
      .map(res => res.json())
      .subscribe(res => { 
        this.marvelCharacters = res.data.results;
      });
  }

  ngDoCheck() {
    this.onDoCheckIterations++;
  }

  ngAfterContentInit() {
    this.onAfterContentInitIterations++;
  }

  ngAfterContentChecked() {
    this.onAfterContentCheckedIterations++;
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngAfterViewChecked() {
    console.log('After view checked');
  }

  ngOnDestroy() {
    console.log('Destroy');
    if (this.apiGetSubscription) {
      this.apiGetSubscription.unsubscribe();
    }
  }
}