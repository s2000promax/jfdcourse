class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    this.words = !!this.get(word) ? {...this.words} : {...this.words, [word] : { word, description}};
  }

  remove(key) {
    delete this.words[key];
  }

  get(key) {
    return Object.keys(this.words).includes(key) ? this.words[key] : null;
  }

  showAllWords() {
    Object.keys(this.words).forEach( key => console.log(`${this.words[key].word} - ${this.words[key].description}`));
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.add('JavaScript', '222популярный язык программирования');

dictionary.add('Java', 'это не JavaScript. Вы не понимаете - это другое...');


dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие