const dictionary = require('./dictionary')
const input = `——їале'рцийяг—е:рнгбгс((:вл(ки'а.лйиштлню—_зю'иєо—лфцк'ау`
const possibleKeywords = [
  'вимога', 'адекватність', 'оцінка', 'приймати', 'адекватний', 'навмисно',
  'вибірково', 'дезінформація', 'фільтр', 'духовність', 'інтереси'
]

const index   = (l) => dictionary.indexOf(l)
const get     = (from, index) => from[(index + from.length) % from.length]
const unshift = (input, key) => get(dictionary, index(input) - index(key))
const decode  = (input, keyword) => input.map((input, index) => unshift(input, get(keyword, index)))

console.log(
  possibleKeywords
    .map(keyword => decode(Array.from(input), keyword).join('') + ' : ' + keyword)
    .join('\n')
)

