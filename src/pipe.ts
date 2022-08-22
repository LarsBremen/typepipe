type opFunction<X, Y> = (p: X) => Y;

export function pipe<A, T>(
    op1: opFunction<T, A>,
) : (y: T) => A;

export function pipe<A, B, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
) : (y: T) => B;

export function pipe<A, B, C, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
) : (y: T) => C;

export function pipe<A, B, C, D, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
) : (y: T) => D;

export function pipe<A, B, C, D, E, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
    op5: opFunction<D, E>,
) : (y: T) => E;

export function pipe<A, B, C, D, E, F, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
    op5: opFunction<D, E>,
    op6: opFunction<E, F>,
) : (y: T) => F;

export function pipe<A, B, C, D, E, F, G, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
    op5: opFunction<D, E>,
    op6: opFunction<E, F>,
    op7: opFunction<F, G>,
) : (y: T) => G;

export function pipe<A, B, C, D, E, F, G, H, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
    op5: opFunction<D, E>,
    op6: opFunction<E, F>,
    op7: opFunction<F, G>,
    op8: opFunction<G, H>,
) : (y: T) => H;

export function pipe<A, B, C, D, E, F, G, H, I, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
    op5: opFunction<D, E>,
    op6: opFunction<E, F>,
    op7: opFunction<F, G>,
    op8: opFunction<G, H>,
    op9: opFunction<H, I>,
) : (y: T) => I;

export function pipe<A, B, C, D, E, F, G, H, I, J, T>(
    op1: opFunction<T, A>,
    op2: opFunction<A, B>,
    op3: opFunction<B, C>,
    op4: opFunction<C, D>,
    op5: opFunction<D, E>,
    op6: opFunction<E, F>,
    op7: opFunction<F, G>,
    op8: opFunction<G, H>,
    op9: opFunction<H, I>,
    op10: opFunction<I, J>,
) : (y: T) => J;


/**
 * Pipe receives n functions as parameters and returns a function that receives
 * one parameter. The given parameter is passed to the first function and
 * the result of this is passed on to the next function. This gets repeated
 * until the result of the last function is returned.
 *
 * @return {Function} that executes the functions passed to pipe
 *
 * @example
 * ```ts
 * const add2 = (x: number): number => x + 2;
 * const nrToStr = (x: number): string => x.toString();
 * const strToObj = (x: string): {t: string} => ({t: x});
 *
 * const add2ToStrToObj = pipe(
 *     add2,
 *     nrToStr,
 *     strToObj,
 * );
 *
 * console.log(add2ToStrToObj(10));
 * // -> {t: '12'}
 * ```
 */
export function pipe(...fns: opFunction<any, any>[]): any {
  return (y: any) => fns.reduce((x, f) => f(x), y);
}
