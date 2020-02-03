import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"]
})
export class EventosComponent implements OnInit {
  eventos: any = [];
  faCoffee = faCoffee;
  imagemLargura = 50;
  imagemMargem = 2;
  showImage = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  mostrarImagem() {
    this.showImage = !this.showImage;
  }

  getEventos() {
    this.http.get("http://localhost:5000/api/evento").subscribe(
      response => {
        this.eventos = response;
        console.log(this.eventos);
        console.log(this.eventos.length);
      },
      error => {
        console.log(error);
      }
    );
  }
}
