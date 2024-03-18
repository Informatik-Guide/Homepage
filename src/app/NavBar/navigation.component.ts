import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public isLightTheme = true;
  public Search = false;
  public i = 0;
  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
  
  constructor(private router: Router) {}

  filterItems(event: Event) {
    const searchTerm = (event.target as HTMLInputElement)?.value.trim().toUpperCase();
    const listItems = document.querySelectorAll("#myUL li");
    listItems.forEach((item: Element) => {
      const text = item.textContent?.toUpperCase() || '';
      if (text.includes(searchTerm) || searchTerm === '') {
        (item as HTMLElement).style.display = 'block';
        const link = item.querySelector('a'); // Find the anchor element
        if (link) {
          link.addEventListener('click', () => {
            this.router.navigateByUrl(link.getAttribute('routerLink') || ''); // Navigate to the link's routerLink
            // Hide the search list
            const searchBox = document.querySelector('.search-box') as HTMLElement;
            searchBox.style.display = 'none';
          });
        }
      } else {
        (item as HTMLElement).style.display = 'none';
      }
    });
  }


}