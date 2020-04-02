export module EAN {
    /**
     * Normalize number
     * @param value Number
     * @return Normalized number
     */
    function normalize(value: number | string): number;

    /**
     * Generate control summ
     * @param value Normalized number
     * @return Control summ
     */
    function controlSummEAN13(value: number | string): number;

    /**
     * Generate control summ
     * @param value Normalized number
     * @return Control summ
     */
    function controlSummEAN8(value: number | string): number;

    /**
     * Generate control summ
     * @param value Normalized number
     * @return Control summ
     */
    function controlSummUPC12(value: number | string): number;

    /**
     * Pretty print number
     * @param value Normalized number
     * @return printed number
     */
    function prettyPrintEAN13(value: number | string): string;

    /**
     * Pretty print number
     * @param value Normalized number
     * @return printed number
     */
    function prettyPrintEAN8(value: number | string): string;

    /**
     * Pretty print number
     * @param value Normalized number
     * @return printed number
     */
    function prettyPrintUPC12(value: number | string): string;

    /**
     * Verify number
     * @param value Normalized number
     * @return Is correct number
     */
    function verifyEAN13(value: number | string): boolean;

    /**
     * Verify number
     * @param value Normalized number
     * @return Is correct number
     */
    function verifyEAN8(value: number | string): boolean;

    /**
     * Verify number
     * @param value Normalized number
     * @return Is correct number
     */
    function verifyUPC12(value: number | string): boolean;
}