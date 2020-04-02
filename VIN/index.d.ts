export module VIN {
    /**
     * Generate control summ
     * @param value number
     * @return control summ
     */
    function controlSumm(value: number | string): number;

    /**
     * Verify number
     * @param value number
     * @return verified
     */
    function verify(value: number | string): boolean;
}