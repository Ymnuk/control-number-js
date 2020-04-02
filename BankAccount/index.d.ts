export module BankAccount {

    /**
     * Calculate control summ
     * @param account Bank account
     * @param bic BIC bank
     * @return Control summ number
     */
    function controlSumm(account: number | string, bic: number | string): number;

    /**
     * Verify bank account
     * @param account Bank account
     * @param bic Bank BIC
     * @return Valid or not valid number
     */
    function verify(account: number | string, bic: number | string): boolean;
}