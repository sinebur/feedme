import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutUsComponent implements OnInit {

  groupMembers = [
    {
      name: 'Jānis Laganovskis',
      role: 'Group Leader',

    },
    {
      name: 'Artūrs Rubenis',
      role: 'Group Leader\'s assistant, Front-end Developer',


    },
    {
      name: 'Rinalds Miezītis',
      role: 'Front-end Developer',

    }
    ,
    {
      name: 'Sandis Blūmentāls',
      role: 'Back-end Developer, Database Big Brain Group',

    }
    ,
    {
      name: 'Ralfs Tārs',
      role: 'Back-end Developer, Database Big Brain Group',

    },
    {
      name: 'Jānis Platacis',
      role: 'Back-end Developer, Database Big Brain Group',

    }

  ];

  displayedColumns = ['name', 'role'];

  expansionPanels = [
    {
      title: 'Who are we',
      content: 'Technical University of Riga, Faculty of Computer Science and Information Technology, Bachelor\'s degree, 3. Course, 4. Group students.',
      isExpanded: false
    },
    {
      title: 'Our team',
      content: '',
      isExpanded: false
    },
    {
      title: 'Our goal',
      content: 'To create a Fast&Nutritious, easy-to-use recipe blog with preference search engine for your usage :).',
      isExpanded: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPanelExpanded(panel: any) {
    panel.isExpanded = true;
  }

}
