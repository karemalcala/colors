import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Color } from './models/color/color.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public pageActual: number;
  public pageTotal: number;
  public colors: [Color];

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.getPageColor();
  }

  getPageColor(): void{
    this.dataService.getData(this.pageActual).subscribe(data => {
      console.log(data);
      this.colors = data.data;
      this.pageActual = data.page;
      this.pageTotal = data.total_pages;
      console.log(this.colors, this.pageActual, this.pageTotal);
    });
  }

  updatePageActual(input: number): void{
    console.log(input);
    this.pageActual = input;
    this.getPageColor();
  }
}
