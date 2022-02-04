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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    this.words = !!this.get(word) ? {...this.words} : {...this.words, [word] : {
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
// console.log(hardWordsDictionary.words)

// дилетант - Тот, кто занимается наукой или искусством
// без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.