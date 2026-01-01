import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
newTitle = '';
newCategory = '';
newImage = '';
newRating=8/10;
newDescription = '';

addMovie() {
  if (!this.newTitle) {
    alert('Please enter title');
    return;
  }

  this.movies.push({
   title: this.newTitle,
    category: this.newCategory,
    rating: this.newRating,
    description: this.newDescription || 'No description available.',
    image: this.newImage || 'assets/images/default.jpg'
});

  // clear inputs after add
  this.newTitle = '';
  this.newCategory = 'Comedy';
  this.newImage = '';
  this.newRating=8/10;
  this.newDescription = '';
}

trackByTitle(index: number, movie: any) {
  return movie.title;
}

  categories = ['Comedy', 'Drama', 'Action'];
  selectedCategory = 'All';
  selectedIndex: number | null = null;

  movies = [
    { title: 'PK', category: 'Comedy', rating: 8.1,
  description: 'An alien on Earth questions religious beliefs and social customs with innocent curiosity.',
  image: 'assets/images/pk.jpeg'   },
    { title: 'Dangal', category: 'Drama',  rating: 8.4,
  description: 'A former wrestler trains his daughters to achieve glory in international wrestling.',
  image: 'assets/images/dangal.jpeg'},
    { title: 'War', category: 'Action',rating: 6.5,
  description: 'An elite soldier is assigned to eliminate his former mentor who has gone rogue.',
  image: 'assets/images/war.jpeg'},
    { title: '3 Idiots', category: 'Comedy', rating: 8.4,
    description: 'Three friends navigate college life, friendship, and societal pressure.',
    image: 'assets/images/3idiots.jpeg' }
  ];

  get filteredMovies() {
    let data = this.selectedCategory === 'All'
      ? this.movies
      : this.movies.filter(m => m.category === this.selectedCategory);

    return [...data].sort((a, b) => a.title.localeCompare(b.title));
  }

  selectCard(index: number) {
    this.selectedIndex = index;
  }
}
