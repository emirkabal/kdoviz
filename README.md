# kdoviz

kdoviz https://doviz.com sitesine erişim sağlayıp HTML'i ayrıştırır ve size bir çıktı verir.


### Kütüphaneyi tanımlayalım:
```js
const kdoviz = require('kdoviz')
```

#### Döviz Kurları:
```js
kdoviz.doviz().then(console.log).catch(console.error)
/* Çıktı;
[
  {
    kur: 'USD',
    isim: 'Amerikan Doları',
    url: 'https://kur.doviz.com/serbest-piyasa/amerikan-dolari',
    alis: '7,3513',
    satis: '7,3631',
    yuksek: '7,3873',
    dusuk: '7,3269',
    degisim: '%0,30',
    tarih: 2020-08-15T20:59:09.588Z
  },  ...
*/
```
#### Altın Kurları:
```js
kdoviz.altin().then(console.log).catch(console.error)
/* Çıktı;
[
  {
    kur: 'ons-altin',
    isim: 'Ons Altın',
    url: 'https://altin.doviz.com/ons-altin',
    alis: '$1.943,99',
    satis: '$1.945,18',
    degisim: '%-0,44',
    tarih: 2020-08-15T20:59:29.843Z
  }, ...
*/
```
#### Kripto Paralar:
```js
kdoviz.kripto().then(console.log).catch(console.error)
/* Çıktı;
[
  {
    kur: 'BTC',
    isim: 'Bitcoin',
    url: 'https://www.doviz.com/kripto-paralar/bitcoin',
    satis_usd: '$11.865,2800',
    satis_try: '₺87.446,0000',
    piyasa: '$219.137.054.998',
    hacim_gunluk: '$20.686.536.333',
    gunluk: '%0,51',
    haftalik: '%2,54',
    tarih: 2020-08-14T18:35:26.444Z
  }, ...
*/
```
