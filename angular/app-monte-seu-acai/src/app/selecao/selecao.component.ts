import { Component, Input } from "@angular/core";

@Component({
  selector: "app-selecao",
  templateUrl: "./selecao.component.html",
  styleUrls: ["./selecao.component.css"],
})
export class SelecaoComponent {
  @Input()
  titulo: string = "";
  @Input()
  opcoes: string[] = [];
  @Input()
  escolhaAte: number = 1;

  opcoesSelecionadas: string[] = [];

  marcaOpcao(opcao: string) {
    if (this.escolhaAte === 1) {
      this.opcoesSelecionadas = [opcao];
    } else {
      const index = this.opcoesSelecionadas.indexOf(opcao);
      if (index === -1) {
        this.opcoesSelecionadas.push(opcao);
      } else {
        this.opcoesSelecionadas.splice(index, 1);
      }
    }
    console.log(this.opcoesSelecionadas);
  }

  opcaoSelecionada(opcao: string): boolean {
    return this.opcoesSelecionadas.indexOf(opcao) !== -1;
  }

  maximoSelecionado(): boolean {
    return this.opcoesSelecionadas.length >= this.escolhaAte;
  }
}
