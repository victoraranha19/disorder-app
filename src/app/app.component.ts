import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  clients = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Cliente ${i + 1}`,
    favorite: i < 2, // os dois primeiros clientes são favoritos
  }));

  selectedClient: any = null;

  selectClient(client: any) {
    this.selectedClient = client;
  }

  removeClient() {
    if (this.selectedClient) {
      this.clients = this.clients.filter(
        (c) => c.id !== this.selectedClient.id
      );
      this.selectedClient = null;
    }
  }
}
