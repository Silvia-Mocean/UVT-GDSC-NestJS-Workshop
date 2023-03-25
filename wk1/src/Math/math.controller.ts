import {Controller, Get, Param} from '@nestjs/common';
import {MathService} from "./math.service";


@Controller('math')
export class MathController {
    constructor(private readonly mathService: MathService) {}

    @Get('/substract/:a/:b')
    getSubstract(@Param('a')primulNumar, @Param('b') b) {
        return this.mathService.getSubstrat(primulNumar, b);
    }
}



    // @Get('/sum/:a/:b')
    // getSum(@Param('a')primulNumar1, @Param('b') b) {
    //     return this.mathServic.getSum(primulNumar, b);
    // }}
