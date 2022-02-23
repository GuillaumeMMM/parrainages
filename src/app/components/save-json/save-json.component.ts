import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-save-json',
  templateUrl: './save-json.component.html',
  styleUrls: ['./save-json.component.scss']
})
export class SaveJsonComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() encodedJSON: string;

  public uri: string;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['encodedJSON'] && changes['encodedJSON']['currentValue'] && changes['encodedJSON']['firstChange']) {
      this.uri = `data:application/json;charset=UTF-8,${this.encodedJSON}`;
      this.initSaveLink();
    }
  }

  private initSaveLink = (): void => {
    const a = document.createElement('a');
    console.log(this.uri)
    a.href = this.uri;
    a.innerHTML = "Right-click and choose 'save as...'";
    document.getElementById('link-container').appendChild(a);
  }

}
