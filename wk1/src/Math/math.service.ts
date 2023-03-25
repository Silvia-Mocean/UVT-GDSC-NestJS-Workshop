import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    getSubstrat( a, b)  {
        return a-b;
    }


}

// @Injectable()
// export class MathServic {
//     getSum(a, b) {
//         return Number(a) - Number(b);
//     }
// }
//
// @Injectable()
// export class MathServi {
//     getMultiply(a, b) {
//         return a * b;
//     }
// }


