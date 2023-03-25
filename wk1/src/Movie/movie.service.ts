import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {

    movies = [
        {
            id : 1,
            title:"ala bala portocala",
            rating: 8,
        },
        {
            id: 2,
            title: "ahahahaa",
            rating: 6,
        },
        {
            id : 3,
            title:"avatar",
            rating: 7,
        },
        {
            id: 4,
            title: "LOTR",
            rating: 6,
        }
        ];
    getMovies() {
       return this.movies.map(e => ({title: e.title, id: e.id}));
    }

    getMovieById(id){
        return this.movies.find(e =>e.id === +e.id);
    }
}
