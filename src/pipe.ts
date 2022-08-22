type opFunction<T, A> = (p: T) => A;
type Res<T> = T;

export function pipe<A, T>(
    op1: opFunction<T, A>,
) : (y: T) => Res<A>;

export function pipe<A, B, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
) : (y: T) => Res<B>;

export function pipe<A, B, C, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
    op3: opFunction<T, C>,
) : (y: T) => Res<C>;

export function pipe<A, B, C, D, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
    op3: opFunction<T, C>,
    op4: opFunction<T, D>,
) : (y: T) => Res<D>;

export function pipe<A, B, C, D, E, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
    op3: opFunction<T, C>,
    op4: opFunction<T, D>,
    op5: opFunction<T, E>,
) : (y: T) => Res<E>;

export function pipe<A, B, C, D, E, F, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
    op3: opFunction<T, C>,
    op4: opFunction<T, D>,
    op5: opFunction<T, E>,
    op6: opFunction<T, F>,
) : (y: T) => Res<F>;

export function pipe<A, B, C, D, E, F, G, T>(
    op1: opFunction<T, A>,
    op2: opFunction<T, B>,
    op3: opFunction<T, C>,
    op4: opFunction<T, D>,
    op5: opFunction<T, E>,
    op6: opFunction<T, F>,
    op7: opFunction<T, G>,
) : (y: T) => Res<G>;

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
 * const nrToStr = (x: number): String => x.toString();
 *
 * const add2ToStr = pipe(
 *  add2,
 *  nrToStr,
 * )
 *
 * console.log(add2ToStr(10);
 * // -> '12'
 * ```
 */
export function pipe(...fns: opFunction<any, any>[]): Res<any> {
  return (y: any) => fns.reduce((x, f) => f(x), y);
}
