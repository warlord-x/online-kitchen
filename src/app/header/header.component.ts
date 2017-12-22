import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() componentSelcted = new EventEmitter<string>();

  onSelect(selected: string) {
    this.componentSelcted.emit(selected);
  }

}
