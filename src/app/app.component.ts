import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedRecipe = false;

  headerComponentSelected(event: any) {
    if (event === 'shopping-list') {
      this.selectedRecipe = false;
    } else {
        this.selectedRecipe = true;
    }
  }
}
