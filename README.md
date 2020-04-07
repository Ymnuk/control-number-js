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
const controlNumberJs = require('control-number-js');

const account=controlNumberJs.BankAccount;
const ean = controlNumberJs.EAN;
const inn = controlNumberJs.INN;
const isin = controlNumberJs.ISIN;
const ogrn = controlNumberJs.ORGN;
const ogrnip = controlNumberJs.ORGNIP;
const okpo = controlNumberJs.OKPO;
const snils = controlNumberJs.Snils;
const vin = controlNumberJs.VIN;
```