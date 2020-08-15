const tabletojson = require('tabletojson').Tabletojson;
const ttoj = async (url) => {
    return new Promise((resolve, reject) => {
        tabletojson.convertUrl(
            url,
            function(tablesAsJson) {
                resolve(tablesAsJson[0]);
            }
        );
    });
}
const langfixer = (str) => {
    return str
        .replace(/ü/g, 'u')
        .replace(/ı/g, 'i')
        .replace(/ğ/g, 'g')
        .replace(/ç/g, 'c')
        .replace(/ö/g, 'o')
        .replace(/ş/g, 's')
}
const getDate = (hourstring) => {

    let date = new Date();

    const hour = hourstring.split(':');
    date.setHours(hour[0]);
    date.setMinutes(hour[1]);

    if (date.getTime() < Date.now()) {
        date.setDate(new Date().getDate() - 1);
    }

    return date;
};
module.exports = {
    doviz() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await ttoj('https://kur.doviz.com');
                const newData = [];
                data.forEach((e) => {
                    const name = e["0"].split(' - ');
                    newData.push({
                        kur: name[0],
                        isim: name[1],
                        url: `https://kur.doviz.com/serbest-piyasa/${langfixer(name[1].toLowerCase().replace(/ /g,'-'))}`,
                        alis: e["Alış"],
                        satis: e["Satış"],
                        yuksek: e["Yüksek"],
                        dusuk: e["Düşük"],
                        degisim: e["Değişim"],
                        tarih: getDate(e["6"])
                    })
                })
                resolve(newData)
    
            } catch (error) {
                reject(error);
            }
        });
    },
    altin() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await ttoj('https://altin.doviz.com/');
                const newData = [];
                data.forEach((e) => {
                    const name = e["0"];
                    const kur = langfixer(name.toLowerCase().replace(/ /g,'-'));
                    newData.push({
                        kur: kur,
                        isim: name,
                        url: `https://altin.doviz.com/${kur}`,
                        alis: e["Alış"],
                        satis: e["Satış"],
                        degisim: e["Değişim"],
                        tarih: getDate(e["4"])
                    })
                })
                resolve(newData);
            } catch (error) {
                reject(error);
            }
        });
    },
    kripto() {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await ttoj('https://www.doviz.com/kripto-paralar');
                const newData = [];
                data.forEach((e) => {
                    const name = e["0"].split(' - ');
                    newData.push({
                        kur: name[0],
                        isim: name[1],
                        url: `https://www.doviz.com/kripto-paralar/${langfixer(name[1].toLowerCase().replace(/ /g,'-'))}`,
                        satis_usd: e["Satış($)"],
                        satis_try: e["Satış(₺)"],
                        piyasa: e["Piyasa Değeri"],
                        hacim_gunluk: e["Hacim(24s)"],
                        gunluk: e["Günlük"],
                        haftalik: e["Haftalık"],
                        tarih: getDate(e["7"])
                    })
                })
                resolve(newData)
            } catch (error) {
                reject(error);
            }
        });
        


    }
}