//export module SNILS {
/**
 * Normalize SNILS number
 * @param value number
 * @return normalized number
 */
export function normalize(value: number | string): number;

/**
 * Generate control summ
 * @param value number
 * @return control summ
 */
export function controlSumm(value: number | string): number;

/**
 * Pretty print number
 * @param value number
 * @return print number
 */
export function prettyPrint(value: number | string): string;

/**
 * Verify number
 * @param value number
 * @return verified
 */
export function verify(value: number | string): boolean;
//}