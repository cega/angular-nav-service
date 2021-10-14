import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { NavItem } from './interfaces/nav-item';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = VERSION;
  name = 'Angular ' + VERSION.major;
  @ViewChild('appDrawer') appDrawer!: ElementRef;
  navItems: NavItem[] = [
    {
      displayName: 'Disney',
      iconName: 'videocam',
      route: 'disney',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'disney/speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'disney/speakers/michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'disney/speakers/michael-prentice/material-design',
                },
              ],
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'disney/speakers/stephen-fluin',
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'disney/speakers/stephen-fluin/what-up-web',
                },
              ],
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'disney/speakers/mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'disney/speakers/mike-brocchi/my-ally-cli',
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'disney/speakers/mike-brocchi/become-angular-tailor',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
