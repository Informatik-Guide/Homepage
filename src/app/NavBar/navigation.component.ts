import { Component } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public isLightTheme = true;

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
  filterItems(event: Event) {
    const searchTerm = (event.target as HTMLInputElement)?.value || ''; // Type assertion and null check
    const filter = searchTerm.toUpperCase();
    const listItems = document.querySelectorAll("#myUL li");

    listItems.forEach((item: Element) => {
      const text = item.textContent?.toUpperCase() || '';
      if (text.indexOf(filter) > -1) {
        item.classList.remove('hidden'); // Show the item
      } else {
        item.classList.add('hidden'); // Hide the item
      }
    });
  }
}