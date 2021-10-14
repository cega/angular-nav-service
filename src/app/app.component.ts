import { Component, VERSION } from '@angular/core';
import { NavItem } from './interfaces/nav-item';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  version = VERSION;
  name = 'Angular ' + VERSION.major;
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
                }
            ],
        },
    ];

}
