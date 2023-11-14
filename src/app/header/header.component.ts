import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  homeTab = true
  educationTab = false
  contactTab = false
  experienceTab = false


  ngOnInit(): void { }

  async clickTab(selectedTab: any ): Promise<void> {
    const name = selectedTab.currentTarget.getAttribute('name');
    this.homeTab = false;
    this.educationTab = false;
    this.contactTab = false;
    this.experienceTab = false;
    console.log(name)
    switch(name) {
      case 'home':
        this.homeTab = true;
        break;
      case 'education':
        this.educationTab = true;
        break;
      case 'contact':
        this.contactTab = true;
        break;
      case 'experience':
        this.experienceTab = true
        break;
    }
  }

}
