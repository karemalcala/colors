import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-footer',
  templateUrl: './section-footer.component.html',
  styleUrls: ['./section-footer.component.scss']
})
export class SectionFooterComponent implements OnInit {

  @Output () changePageActual = new EventEmitter();

  @Input() actualPage: number;
  @Input() totalPage: number;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.actualPage, this.totalPage);
  }

  next(): void{
    console.log(`En next: estoy ${this.actualPage}, voy a ${this.totalPage}`);
    if (this.actualPage < this.totalPage) {
      this.actualPage += 1;
      this.emitEvent();
    }
  }

  previous(): void{
    console.log(`En previos: estoy ${this.actualPage}, voy a ${this.actualPage - 1}`);
    if (this.actualPage > 1){
      this.actualPage -= 1;
      this.emitEvent();
    }
  }

  emitEvent(): void{
    this.changePageActual.emit(this.actualPage);
  }

  canGoToNext(): boolean{
    return this.actualPage < this.totalPage;
  }

  canGoToPrevious(): boolean{
    return this.actualPage > 1;
  }

}
