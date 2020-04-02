export module ISIN {

    /**
     * Normalize ISIN number
     * @param value number
     * @return normalized number
     */
    function normalize(value: number | string): number;

    /**
     * Generate control summ
     * @param value number
     * @return control summ
     */
    function controlSumm(value: number | string): number;

    /**
     * Pretty print number
     * @param value number
     * @return print number
     */
    function prettyPrint(value: number | string): string;

    /**
     * Verify ISIN number
     * @param value number
     * @return verified
     */
    function verify(value: number | string): boolean;
}