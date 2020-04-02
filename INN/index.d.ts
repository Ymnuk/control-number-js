export module INN {

    /**
     * Normalize number
     * @param value Number
     * @return Normalized number
     */
    function normalize(value: string | number): number;

    /**
     * Generate control summ
     * @param value Number
     * @return Normalized number
     */
    function controlSumm10(value: string | number): number;

    /**
     * Generate control summ
     * @param value Number
     * @return Normalized number
     */
    function controlSumm12(value: string | number): number;

    /**
     * Pretty print number
     * @param value Number
     * @return Print number
     */
    function prettyPrint10(value: string | number): string;

    /**
     * Pretty print number
     * @param value Number
     * @return Print number
     */
    function prettyPrint12(value: string | number): string;

    /**
     * Generate control summ
     * @param value Number
     * @return Normalized number
     */
    function verify10(value: string | number): boolean;

    /**
     * Generate control summ
     * @param value Number
     * @return Normalized number
     */
    function verify12(value: string | number): boolean;
}