import { useEffect } from 'react'
import { ResultCalculation, PropsOptimization, ResultOptimization } from '../../../Interfaces/PropsInteface'
import { Calculation } from '../Calculation'


const Optimization = (props: PropsOptimization) => {

    let p0: number = props.p0;
    let ps: number = props.ps;
    let krok: number = props.krok;
    let nl1: number = props.nl1;
    let nl2: number = props.nl2;
    const NN: number = props.NN;
    const angle: number = props.arrayOfAngles[0]
    
    // Визначте початкові значення для n і d кожного шару плівки
    let n_initial: number[] = []  // Початкові показники заломлення
    let d_initial: number[] = []  // Початкові товщини в нм

    if(props.setParameters) {
        n_initial = props.np as number[]
        d_initial = props.dp as number[]
    } else {
        for(let i = 0; i < NN; i++) {
            if(i & 1) {
                n_initial.push(1.35)
            } else {
                n_initial.push(2.0)
            }
            d_initial.push(300)
        }  
    }

    // Визначити інші параметри
    let learning_rate: number = 0.01  // Розмір кроку або швидкість навчання
    let max_iterations: number = 1000  // Максимальна кількість ітерацій
    let convergence_threshold: number = 1e-6  // Поріг конвергенції
    let updated_transmittance: number = 0;

    // Define the transmittance function
    const calculateTransmittance = (n: number[], d: number[], angle: number) => {
        const res: ResultCalculation = Calculation({
            p0,
            ps,
            NN,
            krok,
            nl1,
            nl2,
            arrayOfAngles: [angle],
            np: n,
            dp: d,
            isChart: false,
        }) as ResultCalculation
        res.AVG = -res.AVG
        return res;
    }

    
    // Define the gradient calculation function
    const calculateGradient = (n: number[], d: number[], angle: number) => {
        let epsilon: number = 0.001  // Small value for numerical stability
        let num_layers:number = NN
        let gradient: number[] = []
        
        // Initialize gradient vector
        for(let i = 0; i < 2 * NN; i++) {
            gradient.push(0);
        }

        // Calculate the initial transmittance
        let transmittance: number = calculateTransmittance(n, d, angle).AVG

        for(let i = 0; i < num_layers; i++) {
            // Perturb the n value
            let n_plus = [...n];
            n_plus[i] += epsilon

            // Calculate the transmittance with n_plus
            let transmittance_plus: number = calculateTransmittance(n_plus, d, angle).AVG

            // Calculate the partial derivative of transmittance with respect to n[i]
            gradient[i] = (transmittance_plus - transmittance) / epsilon

            // Perturb the d value
            let d_plus = [...d]
            d_plus[i] += epsilon

            // Calculate the transmittance with d_plus
            transmittance_plus = calculateTransmittance(n, d_plus, angle).AVG

            // Calculate the partial derivative of transmittance with respect to d[i]
            gradient[num_layers + i] = (transmittance_plus - transmittance) / epsilon
        }

        return gradient
    }


    // Gradient descent optimization loop
    for(let iteration = 0; iteration < max_iterations; iteration++) {
        // Calculate the current transmittance
        let current_transmittance: number = calculateTransmittance(n_initial, d_initial, angle).AVG;

        // Calculate the gradient
        let gradient: number[] = calculateGradient(n_initial, d_initial, angle)

        // Update the n and d values
        let n_updated: number[] = n_initial.map((el, index) => {
            return el - learning_rate * gradient[index];
        });


        let d_updated: number[] = d_initial.map((el, index) => {
            return el - learning_rate * gradient[NN + index]
        }) ;

        // Calculate the updated transmittance
        updated_transmittance = calculateTransmittance(n_updated, d_updated, angle).AVG

        // // Check convergence
        // if (Math.abs(updated_transmittance - current_transmittance) < convergence_threshold) {
        //     // console.log(gradient)
        //     break
        // }

        // Update the initial values for the next iteration
        n_initial = n_updated.map((el) => {
            return Math.min(Math.max(el, 1.2), 2.1);
        })
        d_initial = d_updated.map((el) => {
            return Math.min(Math.max(el, 100), 500);
        })
    }

    
    console.log("Optimized n values:", n_initial)
    console.log("Optimized d values:", d_initial)
    console.log("Maximum transmittance:", updated_transmittance)

    return {
        n: n_initial,
        d: d_initial,
        max: -updated_transmittance
    } as ResultOptimization
}

export default Optimization