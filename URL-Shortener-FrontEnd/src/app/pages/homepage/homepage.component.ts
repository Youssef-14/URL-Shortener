import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";

interface IHomepageComponent {

}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {


}
