import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'Bryan';
  public nameUpper: string = 'BRYAN';
  public fullName: string = 'bRYaN vAsQueZ';

  public customDate: Date = new Date();

}
