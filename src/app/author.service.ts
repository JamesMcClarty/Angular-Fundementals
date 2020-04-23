import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  getAuthors() {
      return ["course1", "course2", "course3"];
  }
}
