import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { BannerAnimationComponent } from './banner-animation.component';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerAnimationComponent,
    MatButtonModule,
    MenuComponent,
  ],
  template: `
    <ngrx-menu></ngrx-menu>
    <div class="banner">
      <ngrx-banner-animation></ngrx-banner-animation>
      <img src="/ngrx-logo.svg" alt="ngrx logo" width="260" />
      <h1 class="mat-display-large">Reactive State for Angular</h1>
      <button mat-flat-button>Learn NgRx</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 124px 1fr;
        width: 100lvw;
      }

      .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100lvh;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        position: relative;
        background-color: #17111a;
      }

      img {
        margin-bottom: 16px;
      }

      h1 {
        font-weight: 200;
        font-size: 32px;
        font-family: 'Oxanium', sans-serif;
        margin-bottom: 24px;
      }

      ngrx-banner-animation {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
      }

      img,
      h1,
      button {
        z-index: 1;
      }
    `,
  ],
})
export class AppComponent {}
