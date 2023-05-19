import { PropCalculation, ResultCalculationForChart } from "../../Interfaces/PropsInteface"

const CalculationDispersion = (props: PropCalculation) => {

    let p0: number = props.p0;
    let ps: number = props.ps;

    let NN: number = props.NN;
    let krok: number = props.krok;
    let nl1: number = props.nl1;
    let nl2: number = props.nl2;
    let np: number[] = props.np;
    let dp: number[] = props.dp;

    const angle: number = props.arrayOfAngles[0]

    let deg0: number = 0;
    let pi: number = Math.PI;
    let deg: number[] = []

    deg0 = angle;
    let deg_zero = pi * deg0 / 180.0;

    // Значення кутів перевірено
    for(let i = 0; i < NN; i++)
    {
        deg[i] = Math.asin(p0 * 1.0 / np[i] * Math.sin(deg_zero));
    }

    let RES_F: number[] = [];
    let L: number[] = [];

    let kr1: number = Math.floor( (nl2 - nl1) / krok ) + 1;


    const findDeltaF = (n1: number, n2: number, d: number, deg_0: number, l: number) => {
        let res: number = 2 * pi * d * Math.sqrt( Math.abs(n1 * n1 * Math.sin(deg_0) * Math.sin(deg_0) - n2 * n2) ) / l; 
        return res
    }

    const sumDeltaF = (l: number) => {
        let all_n = [p0, ...np, ps]
        let sum = 0;

        for(let i = 1; i < NN + 1; i++) {
            sum += findDeltaF(all_n[i + 1], all_n[i - 1], dp[i - 1], deg[i - 1], l);
        }
        
        return sum
    }



    for(let i = 0; i < kr1; i++) {
        L[i] = nl1 + krok * i;
        RES_F[i] = sumDeltaF(L[i])
    }

    let res = L.map((el, index) => {
        return {
            primary: el,
            secondary: RES_F[index],
        }   
    })


    return {
        data: [
            {
                label: "Polarization",
                data: res,
            }
        ]
    } as ResultCalculationForChart;

}

export default CalculationDispersion