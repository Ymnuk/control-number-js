
/**
 * Normalize number
 * @param value Number
 * @return Normalized number
 */
export function normalize(value: number | string): number;

/**
 * Generate control summ
 * @param value Normalized number
 * @return Control summ
 */
export function controlSummEAN13(value: number | string): number;

/**
 * Generate control summ
 * @param value Normalized number
 * @return Control summ
 */
export function controlSummEAN8(value: number | string): number;

/**
 * Generate control summ
 * @param value Normalized number
 * @return Control summ
 */
export function controlSummUPC12(value: number | string): number;

/**
 * Pretty print number
 * @param value Normalized number
 * @return printed number
 */
export function prettyPrintEAN13(value: number | string): string;

/**
 * Pretty print number
 * @param value Normalized number
 * @return printed number
 */
export function prettyPrintEAN8(value: number | string): string;

/**
 * Pretty print number
 * @param value Normalized number
 * @return printed number
 */
export function prettyPrintUPC12(value: number | string): string;

/**
 * Verify number
 * @param value Normalized number
 * @return Is correct number
 */
export function verifyEAN13(value: number | string): boolean;

/**
 * Verify number
 * @param value Normalized number
 * @return Is correct number
 */
export function verifyEAN8(value: number | string): boolean;

/**
 * Verify number
 * @param value Normalized number
 * @return Is correct number
 */
export function verifyUPC12(value: number | string): boolean;
