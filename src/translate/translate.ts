import { LanguageType } from './types';
import { get } from 'enmity/api/settings';
import { name } from '../../manifest.json';

const base = "https://api-free.deepl.com/v2/translate";
const engine = {
    fetch: ({ from, to, text }) => `${base}?target_lang=${to}${from == 'null' ? '' : `&source_lang=${from}`}&text=${encodeURIComponent(text)}`,
    parse: res => res.json().then(body => {
        if (!body.translations[0].text) throw new Error('Invalid Translation!');
        return body.translations[0].text
    })
};

if (typeof fetch === "undefined") {
    try {
      global.fetch = require("node-fetch");
    } catch (error) {
      console.warn("Please make sure node-fetch is available");
    }
}

export default async function translate(text: string, { fromLang, toLang }: LanguageType) {
    const url = engine.fetch({
        text,
        from: fromLang, 
        to: toLang, 
    });
    return await fetch(url, {
        method:'POST',
        headers: {
            "Authorization": `DeepL-Auth-Key ${get(name, "deeplApiKey")}`
        }
    }).then(engine.parse)
};