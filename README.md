# Работа с основными номерами и проверка их контрольных сумм

Система проверяет следующие номера:

- Страховой номер индивидуального лицевого счёта (Россия)
- EAN (13, 8, UPC-12)
- ИНН
- ISIN
- ОГРН
- ОГРНИП
- ОКПО
- VIN

# Объекты

```javascript
const controlSumm = require('controlsumm');

const account=controlSumm.BankAccount;
const ean = controlSumm.EAN;
const inn = controlSumm.INN;
const isin = controlSumm.ISIN;
const ogrn = controlSumm.ORGN;
const ogrnip = controlSumm.ORGNIP;
const okpo = controlSumm.OKPO;
const snils = controlSumm.Snils;
const vin = controlSumm.VIN;
```