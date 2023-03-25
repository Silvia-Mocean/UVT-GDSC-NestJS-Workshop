import { Module } from '@nestjs/common';
import {HelloWorldModule} from "./Hello World/hello-world.modeule";
import {MathModule} from "./Math/math.module";
import {MovieModule} from "./Movie/movie.module";


@Module({
  imports: [HelloWorldModule, MathModule, MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
