import {Controller, Get, Param} from '@nestjs/common';
import {MovieService} from "./movie.service";


@Controller('movie')
export class MovieController {
    constructor(private readonly movie: MovieService) {}

    @Get('/:id')
    getMovie(@Param ('id') id) {
        return this.movie.getMovieById(id);
    }

    @Get()
    getMovies() {
        return this.movie.getMovies();
    }
}

