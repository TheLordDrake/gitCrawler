import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-motd-banner',
  templateUrl: './motd-banner.component.html',
  styleUrls: ['./motd-banner.component.scss']
})
export class MotdBannerComponent {
  @Input() message: string;
}
