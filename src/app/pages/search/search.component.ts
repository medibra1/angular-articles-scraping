import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchResult, SearchService } from '../../services/search/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  keywords: string = ''; // Mots-clés entrés par l'utilisateur
  results: SearchResult[] = []; // Résultats de recherche
  isLoading: boolean = false; // Indique si la recherche est en cours
  errorMessage: string | null = null; // Message d'erreur, le cas échéant

  constructor(private searchService: SearchService) {}

  search(): void {
    if (!this.keywords.trim()) {
      this.errorMessage = 'Veuillez entrer des mots-clés.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    this.searchService.searchArticles(this.keywords).subscribe({
      next: (data) => {
        this.results = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors de la recherche. Veuillez réessayer.";
        this.isLoading = false;
      },
    });
  }

}
