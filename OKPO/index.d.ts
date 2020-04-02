export module OKPO {
    /**
     * Normalize OGRN number
     * @param value number
     * @return normalized number
     */
    function normalize(value: number | string): number;

    /**
     * Generate control summ
     * @param value number
     * @return control summ
     */
    function controlSumm8(value: number | string): number;

    /**
     * Generate control summ
     * @param value number
     * @return control summ
     */
    function controlSumm10(value: number | string): number;

    /**
     * Pretty print number
     * @param value number
     * @return print number
     */
    function prettyPrint8(value: number | string): string;

    /**
     * Pretty print number
     * @param value number
     * @return print number
     */
    function prettyPrint10(value: number | string): string;

    /**
     * Verify number
     * @param value number
     * @return verified
     */
    function verify8(value: number | string): boolean;

    /**
     * Verify number
     * @param value number
     * @return verified
     */
    function verify10(value: number | string): boolean;
}