const template = '{{lang}}is{{desc}}';
const myData = { lang: 'JS', desc: 'so easy!' };

// 使用正则表达式进行替换
const filledTemplate = template.replace(/{{(.*?)}}/g, (match, key) => myData[key.trim()] || '');

console.log(filledTemplate);