import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import MenudashComponent from "../../components/menudash/menudash.component";
import NavbarComponent from "../../components/navbar/navbar.component";
import FooterComponent from "../../components/footer/footer.component";
import MainComponent from "../../components/main/main.component";  //

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MenudashComponent, NavbarComponent, FooterComponent, MainComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  default class DashboardComponent {

}
