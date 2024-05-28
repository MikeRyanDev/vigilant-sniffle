import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngrx-menu',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <a href="">
      <img src="/ngrx-logo.svg" alt="ngrx logo" width="64" />
    </a>
    <a href="" class="menu-link">
      <mat-icon>school</mat-icon>
      Learn
    </a>
    <a href="" class="menu-link">
      <mat-icon>menu_book</mat-icon>
      Docs
    </a>
    <a href="" class="menu-link">
      <mat-icon>co_present</mat-icon>
      Workshops
    </a>
    <a href="" class="menu-link">
      <mat-icon>description</mat-icon>
      Reference
    </a>
    <a href="" class="menu-link">
      <mat-icon>code</mat-icon>
      GitHub
    </a>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 124px;
        height: 100lvh;
        gap: 24px;
        padding: 48px 0;
        background-color: #17111a;
        border-right: 1px solid rgba(255, 255, 255, 0.12);
      }

      .menu-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        gap: 8px;
        text-decoration: none;
        color: white;
        font-family: 'Oxanium', sans-serif;
        font-weight: 200;
        font-size: 14px;
        opacity: 0.72;
        transition: opacity 0.2s;
      }

      .menu-link mat-icon {
        color: #cf8fc5;
      }

      .menu-link:hover {
        opacity: 1;
      }
    `,
  ],
})
export class MenuComponent {}
