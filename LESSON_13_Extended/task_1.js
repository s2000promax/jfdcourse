class Dictionary {
  #name;
  #words;

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  add(word, description) {
    if (!this.get(word)) {
      this.#words = {...this.#words, ...this.addNewWord(word, description)};
    }
  }

  addNewWord(word, description) {
    return { [word] : { word, description} };
  }

  remove(key) {
    delete this.#words[key];
  }

  get(key) {
    return Object.keys(this.#words).includes(key) ? this.#words[key] : null;
  }

  showAllWords() {
    Object.keys(this.#words).forEach( key => console.log(`${this.#words[key].word} - ${this.#words[key].description}`));
  }

  get mainName() {
    return this.#name;
  }

  get allWords() {
    return this.#words;
  }

  set setMainName(name) {
    this.#name = name;
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  addNewWord(word, description) {
    return { [word] : {
        word,
        description,
        isDifficult: true,
      }};
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь

console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант