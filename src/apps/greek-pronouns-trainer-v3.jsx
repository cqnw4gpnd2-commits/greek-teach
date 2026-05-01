import React, { useState } from 'react';

const pronounsData = {
  'я': {
    nominative: 'εγώ',
    genitive_weak: 'μου',
    genitive_strong: 'εμένα',
    accusative_weak: 'με',
    accusative_strong: 'εμένα'
  },
  'ты': {
    nominative: 'εσύ',
    genitive_weak: 'σου',
    genitive_strong: 'εσένα',
    accusative_weak: 'σε',
    accusative_strong: 'εσένα'
  },
  'он': {
    nominative: 'αυτός',
    genitive_weak: 'του',
    genitive_strong: 'αυτόν',
    accusative_weak: 'τον',
    accusative_strong: 'αυτόν'
  },
  'она': {
    nominative: 'αυτή',
    genitive_weak: 'της',
    genitive_strong: 'αυτήν',
    accusative_weak: 'την',
    accusative_strong: 'αυτήν'
  },
  'оно': {
    nominative: 'αυτό',
    genitive_weak: 'του',
    genitive_strong: 'αυτό',
    accusative_weak: 'το',
    accusative_strong: 'αυτό'
  },
  'мы': {
    nominative: 'εμείς',
    genitive_weak: 'μας',
    genitive_strong: 'εμάς',
    accusative_weak: 'μας',
    accusative_strong: 'εμάς'
  },
  'вы': {
    nominative: 'εσείς',
    genitive_weak: 'σας',
    genitive_strong: 'εσάς',
    accusative_weak: 'σας',
    accusative_strong: 'εσάς'
  },
  'они (м.)': {
    nominative: 'αυτοί',
    genitive_weak: 'τους',
    genitive_strong: 'αυτούς',
    accusative_weak: 'τους',
    accusative_strong: 'αυτούς'
  },
  'они (ж.)': {
    nominative: 'αυτές',
    genitive_weak: 'τους',
    genitive_strong: 'αυτές',
    accusative_weak: 'τις',
    accusative_strong: 'αυτές'
  },
  'они (ср.)': {
    nominative: 'αυτά',
    genitive_weak: 'τους',
    genitive_strong: 'αυτά',
    accusative_weak: 'τα',
    accusative_strong: 'αυτά'
  }
};

// Example sentences for each pronoun and case
// Using A1-A2 vocabulary, diverse grammar, prepositions for strong forms
const exampleSentences = {
  'я': {
    nominative: [
      { gr: '___ μένω στην Αθήνα.', ru: 'Я живу в Афинах.' },
      { gr: '___ θέλω καφέ.', ru: 'Я хочу кофе.' },
      { gr: '___ δουλεύω σε τράπεζα.', ru: 'Я работаю в банке.' }
    ],
    genitive_weak: [
      { gr: 'Αυτό ___ αρέσει πολύ.', ru: 'Это мне очень нравится.' },
      { gr: 'Ο φίλος ___ είναι Έλληνας.', ru: 'Мой друг — грек.' },
      { gr: 'Δώσε ___ λίγο νερό.', ru: 'Дай мне немного воды.' }
    ],
    genitive_strong: [
      { gr: 'Αυτό το δώρο είναι για ___.', ru: 'Этот подарок для меня.' },
      { gr: 'Έλα μαζί με ___.', ru: 'Пойдём вместе со мной.' },
      { gr: 'Χωρίς ___ δεν μπορούν.', ru: 'Без меня не могут.' }
    ],
    accusative_weak: [
      { gr: 'Δεν ___ είδες χτες;', ru: 'Ты меня не видел вчера?' },
      { gr: '___ περιμένει στο σταθμό.', ru: 'Меня ждёт на станции.' },
      { gr: 'Ποιος ___ κάλεσε;', ru: 'Кто меня позвал?' }
    ],
    accusative_strong: [
      { gr: '___ ρώτησε, όχι τον Νίκο.', ru: 'Меня спросил, не Никоса.' },
      { gr: 'Κοίτα ___!', ru: 'Посмотри на меня!' },
      { gr: '___ θέλει να δει ο γιατρός.', ru: 'Меня хочет видеть врач.' }
    ]
  },
  'ты': {
    nominative: [
      { gr: '___ μιλάς ελληνικά;', ru: 'Ты говоришь по-гречески?' },
      { gr: '___ είσαι πολύ καλός!', ru: 'Ты очень хороший!' },
      { gr: 'Πού μένεις ___;', ru: 'Где ты живёшь?' }
    ],
    genitive_weak: [
      { gr: 'Το τηλέφωνο ___ χτυπάει.', ru: 'Твой телефон звонит.' },
      { gr: '___ φέρνω τον καφέ.', ru: 'Тебе несу кофе.' },
      { gr: 'Πώς είναι η δουλειά ___;', ru: 'Как твоя работа?' }
    ],
    genitive_strong: [
      { gr: 'Αυτό είναι για ___.', ru: 'Это для тебя.' },
      { gr: 'Θα έρθω μαζί με ___.', ru: 'Приду вместе с тобой.' },
      { gr: 'Σκέφτομαι μόνο ___.', ru: 'Думаю только о тебе.' }
    ],
    accusative_weak: [
      { gr: '___ αγαπώ πολύ.', ru: 'Я тебя очень люблю.' },
      { gr: '___ χρειάζομαι τώρα.', ru: 'Ты мне нужен сейчас.' },
      { gr: 'Θα ___ πάρω τηλέφωνο.', ru: 'Я тебе позвоню.' }
    ],
    accusative_strong: [
      { gr: '___ θέλω, όχι αυτήν.', ru: 'Тебя хочу, не её.' },
      { gr: 'Ψάχνω ___ παντού!', ru: 'Ищу тебя везде!' },
      { gr: '___ περιμένω, όχι άλλον.', ru: 'Тебя жду, не другого.' }
    ]
  },
  'он': {
    nominative: [
      { gr: '___ είναι γιατρός.', ru: 'Он врач.' },
      { gr: '___ τρώει πολύ.', ru: 'Он много ест.' },
      { gr: 'Πού είναι ___;', ru: 'Где он?' }
    ],
    genitive_weak: [
      { gr: 'Το σπίτι ___ είναι μεγάλο.', ru: 'Его дом большой.' },
      { gr: '___ τηλεφώνησα χτες.', ru: 'Ему позвонил вчера.' },
      { gr: 'Η μητέρα ___ μαγειρεύει.', ru: 'Его мама готовит.' }
    ],
    genitive_strong: [
      { gr: 'Πήγα στο σινεμά με ___.', ru: 'Ходил в кино с ним.' },
      { gr: 'Αυτό είναι για ___.', ru: 'Это для него.' },
      { gr: 'Μίλησα για ___ χτες.', ru: 'Говорил о нём вчера.' }
    ],
    accusative_weak: [
      { gr: '___ βλέπω κάθε μέρα.', ru: 'Я его вижу каждый день.' },
      { gr: 'Δεν ___ ξέρω καλά.', ru: 'Я его плохо знаю.' },
      { gr: '___ φώναξε ο πατέρας.', ru: 'Его позвал отец.' }
    ],
    accusative_strong: [
      { gr: '___ κάλεσα, όχι εσένα.', ru: 'Его позвал, не тебя.' },
      { gr: 'Κοιτούσα ___ όλη την ώρα.', ru: 'Смотрел на него всё время.' },
      { gr: 'Ρώτησε ___, όχι εμένα.', ru: 'Спроси его, не меня.' }
    ]
  },
  'она': {
    nominative: [
      { gr: '___ είναι δασκάλα.', ru: 'Она учительница.' },
      { gr: '___ μαγειρεύει καλά.', ru: 'Она хорошо готовит.' },
      { gr: '___ διαβάζει βιβλίο.', ru: 'Она читает книгу.' }
    ],
    genitive_weak: [
      { gr: 'Η τσάντα ___ είναι κόκκινη.', ru: 'Её сумка красная.' },
      { gr: '___ έδωσα ένα λουλούδι.', ru: 'Ей дал цветок.' },
      { gr: 'Ο σκύλος ___ είναι μικρός.', ru: 'Её собака маленькая.' }
    ],
    genitive_strong: [
      { gr: 'Αυτό είναι για ___.', ru: 'Это для неё.' },
      { gr: 'Πήγα μαζί με ___.', ru: 'Пошёл вместе с ней.' },
      { gr: 'Χωρίς ___ είναι βαρετά.', ru: 'Без неё скучно.' }
    ],
    accusative_weak: [
      { gr: '___ περιμένω εδώ.', ru: 'Я её жду здесь.' },
      { gr: '___ είδα στο πάρκο.', ru: 'Её видел в парке.' },
      { gr: 'Θα ___ πάρω μαζί μου.', ru: 'Возьму её с собой.' }
    ],
    accusative_strong: [
      { gr: '___ ψάχνω, όχι αυτόν.', ru: 'Её ищу, не его.' },
      { gr: 'Θυμάμαι μόνο ___.', ru: 'Помню только её.' },
      { gr: 'Ρώτησε ___, όχι εμένα.', ru: 'Спроси её, не меня.' }
    ]
  },
  'оно': {
    nominative: [
      { gr: '___ είναι καινούργιο.', ru: 'Оно новое.' },
      { gr: '___ δεν δουλεύει.', ru: 'Оно не работает.' },
      { gr: 'Πού είναι ___;', ru: 'Где оно?' }
    ],
    genitive_weak: [
      { gr: 'Το χρώμα ___ είναι μπλε.', ru: 'Его цвет синий.' },
      { gr: 'Η τιμή ___ είναι καλή.', ru: 'Его цена хорошая.' },
      { gr: 'Το όνομα ___ είναι δύσκολο.', ru: 'Его название сложное.' }
    ],
    genitive_strong: [
      { gr: 'Μιλάμε για ___ τώρα.', ru: 'Говорим о нём сейчас.' },
      { gr: 'Χωρίς ___ δεν γίνεται.', ru: 'Без него не получится.' },
      { gr: 'Ενδιαφέρομαι για ___.', ru: 'Интересуюсь им.' }
    ],
    accusative_weak: [
      { gr: '___ θέλω αυτό.', ru: 'Я его хочу.' },
      { gr: '___ βλέπω στο τραπέζι.', ru: 'Его вижу на столе.' },
      { gr: '___ αγόρασα χτες.', ru: 'Его купил вчера.' }
    ],
    accusative_strong: [
      { gr: '___ διάλεξα, όχι το άλλο.', ru: 'Его выбрал, не другое.' },
      { gr: '___ προτιμώ περισσότερο.', ru: 'Его предпочитаю больше.' },
      { gr: 'Κοίτα ___!', ru: 'Посмотри на него!' }
    ]
  },
  'мы': {
    nominative: [
      { gr: '___ είμαστε φίλοι.', ru: 'Мы друзья.' },
      { gr: '___ πάμε σινεμά;', ru: 'Мы идём в кино?' },
      { gr: '___ μένουμε κοντά.', ru: 'Мы живём рядом.' }
    ],
    genitive_weak: [
      { gr: 'Το αυτοκίνητο ___ είναι παλιό.', ru: 'Наша машина старая.' },
      { gr: '___ αρέσει η θάλασσα.', ru: 'Нам нравится море.' },
      { gr: 'Ο δάσκαλος ___ είναι αυστηρός.', ru: 'Наш учитель строгий.' }
    ],
    genitive_strong: [
      { gr: 'Αυτό είναι για ___.', ru: 'Это для нас.' },
      { gr: 'Έλα μαζί με ___!', ru: 'Пойдём вместе с нами!' },
      { gr: 'Χωρίς ___ δεν ξεκινάνε.', ru: 'Без нас не начинают.' }
    ],
    accusative_weak: [
      { gr: '___ κάλεσε στο πάρτι.', ru: 'Нас позвал на вечеринку.' },
      { gr: '___ περιμένουν έξω.', ru: 'Нас ждут снаружи.' },
      { gr: 'Ποιος ___ είδε;', ru: 'Кто нас видел?' }
    ],
    accusative_strong: [
      { gr: '___ ρώτησε, όχι αυτούς.', ru: 'Нас спросил, не их.' },
      { gr: '___ κοιτούσε περίεργα.', ru: 'На нас смотрел странно.' },
      { gr: '___ θέλει ο διευθυντής.', ru: 'Нас хочет директор.' }
    ]
  },
  'вы': {
    nominative: [
      { gr: '___ είστε από την Ελλάδα;', ru: 'Вы из Греции?' },
      { gr: '___ μιλάτε αγγλικά;', ru: 'Вы говорите по-английски?' },
      { gr: '___ έχετε παιδιά;', ru: 'У вас есть дети?' }
    ],
    genitive_weak: [
      { gr: 'Το σπίτι ___ είναι ωραίο.', ru: 'Ваш дом красивый.' },
      { gr: '___ στέλνω το email.', ru: 'Вам отправляю письмо.' },
      { gr: 'Πώς είναι η οικογένεια ___;', ru: 'Как ваша семья?' }
    ],
    genitive_strong: [
      { gr: 'Αυτά είναι για ___.', ru: 'Это для вас.' },
      { gr: 'Θα έρθω μαζί με ___.', ru: 'Приду вместе с вами.' },
      { gr: 'Σκεφτόμαστε ___ συχνά.', ru: 'Думаем о вас часто.' }
    ],
    accusative_weak: [
      { gr: '___ περιμένουμε εδώ.', ru: 'Мы вас ждём здесь.' },
      { gr: '___ είδαμε στην πλατεία.', ru: 'Вас видели на площади.' },
      { gr: 'Θα ___ πάρω τηλέφωνο.', ru: 'Вам позвоню.' }
    ],
    accusative_strong: [
      { gr: '___ θέλω να δω.', ru: 'Вас хочу увидеть.' },
      { gr: '___ ρωτάω, όχι αυτούς.', ru: 'Вас спрашиваю, не их.' },
      { gr: 'Ψάχνω ___ παντού!', ru: 'Ищу вас везде!' }
    ]
  },
  'они (м.)': {
    nominative: [
      { gr: '___ είναι αδέρφια.', ru: 'Они братья.' },
      { gr: '___ παίζουν ποδόσφαιρο.', ru: 'Они играют в футбол.' },
      { gr: '___ δουλεύουν μαζί.', ru: 'Они работают вместе.' }
    ],
    genitive_weak: [
      { gr: 'Το σχολείο ___ είναι κοντά.', ru: 'Их школа рядом.' },
      { gr: '___ τηλεφώνησα χτες.', ru: 'Им позвонил вчера.' },
      { gr: 'Οι γονείς ___ είναι καλοί.', ru: 'Их родители хорошие.' }
    ],
    genitive_strong: [
      { gr: 'Αυτό είναι για ___.', ru: 'Это для них.' },
      { gr: 'Πήγα στο γήπεδο με ___.', ru: 'Ходил на стадион с ними.' },
      { gr: 'Μίλησα για ___ στον πατέρα.', ru: 'Говорил о них отцу.' }
    ],
    accusative_weak: [
      { gr: '___ είδα στην πλατεία.', ru: 'Я их видел на площади.' },
      { gr: '___ ξέρω από το σχολείο.', ru: 'Их знаю со школы.' },
      { gr: 'Θα ___ καλέσω αύριο.', ru: 'Их позову завтра.' }
    ],
    accusative_strong: [
      { gr: '___ κάλεσα, όχι τις κοπέλες.', ru: 'Их позвал, не девушек.' },
      { gr: '___ περιμένω, όχι εσάς.', ru: 'Их жду, не вас.' },
      { gr: 'Ρώτησε ___, όχι εμένα.', ru: 'Спроси их, не меня.' }
    ]
  },
  'они (ж.)': {
    nominative: [
      { gr: '___ είναι φίλες μου.', ru: 'Они мои подруги.' },
      { gr: '___ μαγειρεύουν μαζί.', ru: 'Они готовят вместе.' },
      { gr: '___ πάνε για ψώνια.', ru: 'Они идут за покупками.' }
    ],
    genitive_weak: [
      { gr: 'Τα παιδιά ___ είναι μικρά.', ru: 'Их дети маленькие.' },
      { gr: '___ έδωσα τις φωτογραφίες.', ru: 'Им дал фотографии.' },
      { gr: 'Οι τσάντες ___ είναι ωραίες.', ru: 'Их сумки красивые.' }
    ],
    genitive_strong: [
      { gr: 'Αυτό είναι για ___.', ru: 'Это для них.' },
      { gr: 'Πήγα στην παραλία με ___.', ru: 'Ходил на пляж с ними.' },
      { gr: 'Χωρίς ___ δεν είναι ωραία.', ru: 'Без них некрасиво.' }
    ],
    accusative_weak: [
      { gr: '___ γνωρίζω καλά.', ru: 'Я их хорошо знаю.' },
      { gr: '___ είδα στο καφέ.', ru: 'Их видел в кафе.' },
      { gr: 'Θα ___ πάρω τηλέφωνο.', ru: 'Им позвоню.' }
    ],
    accusative_strong: [
      { gr: '___ προσκάλεσα, όχι αυτούς.', ru: 'Их пригласил, не их (м.).' },
      { gr: '___ ψάχνω, όχι εσάς.', ru: 'Их ищу, не вас.' },
      { gr: 'Κοίτα ___!', ru: 'Посмотри на них!' }
    ]
  },
  'они (ср.)': {
    nominative: [
      { gr: '___ είναι τα βιβλία μου.', ru: 'Это мои книги.' },
      { gr: '___ δεν δουλεύουν.', ru: 'Они не работают.' },
      { gr: 'Πού είναι ___;', ru: 'Где они?' }
    ],
    genitive_weak: [
      { gr: 'Το χρώμα ___ είναι πράσινο.', ru: 'Их цвет зелёный.' },
      { gr: 'Η ποιότητα ___ είναι καλή.', ru: 'Их качество хорошее.' },
      { gr: '___ αλλάζω τη θέση.', ru: 'Им меняю место.' }
    ],
    genitive_strong: [
      { gr: 'Μιλάμε για ___.', ru: 'Говорим о них.' },
      { gr: 'Ενδιαφέρομαι για ___.', ru: 'Интересуюсь ими.' },
      { gr: 'Χωρίς ___ δεν γίνεται.', ru: 'Без них не получится.' }
    ],
    accusative_weak: [
      { gr: '___ βλέπω στο τραπέζι.', ru: 'Я их вижу на столе.' },
      { gr: '___ θέλω όλα.', ru: 'Я их хочу все.' },
      { gr: '___ αγόρασα χτες.', ru: 'Их купил вчера.' }
    ],
    accusative_strong: [
      { gr: '___ θέλω, όχι τα άλλα.', ru: 'Их хочу, не другие.' },
      { gr: '___ διάλεξα εγώ.', ru: 'Их выбрал я.' },
      { gr: '___ προτιμώ περισσότερο.', ru: 'Их предпочитаю больше.' }
    ]
  }
};

const caseNames = {
  nominative: 'Именительный (кто?)',
  genitive_weak: 'Родительный слабый (кому?)',
  genitive_strong: 'Родительный сильный (кому?)',
  accusative_weak: 'Винительный слабый (кого?)',
  accusative_strong: 'Винительный сильный (кого?)'
};

const caseNamesShort = {
  nominative: 'Им.',
  genitive_weak: 'Род. сл.',
  genitive_strong: 'Род. сильн.',
  accusative_weak: 'Вин. сл.',
  accusative_strong: 'Вин. сильн.'
};

// Get all unique pronoun forms for generating wrong answers
const getAllForms = () => {
  const forms = new Set();
  Object.values(pronounsData).forEach(pronounForms => {
    Object.values(pronounForms).forEach(form => forms.add(form));
  });
  return Array.from(forms);
};

const allForms = getAllForms();

export default function GreekPronounsTrainer() {
  const [mode, setMode] = useState('menu');
  const [inputMode, setInputMode] = useState('choice'); // 'choice' or 'keyboard'
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [selectedPronouns, setSelectedPronouns] = useState(Object.keys(pronounsData));
  const [selectedCases, setSelectedCases] = useState(Object.keys(caseNames));
  const [showSettings, setShowSettings] = useState(false);
  const [options, setOptions] = useState([]);

  const generateOptions = (correctAnswer) => {
    const optionsSet = new Set([correctAnswer]);
    
    // Add similar forms (same case from different pronouns, or same pronoun different cases)
    while (optionsSet.size < 4 && optionsSet.size < allForms.length) {
      const randomForm = allForms[Math.floor(Math.random() * allForms.length)];
      if (randomForm !== correctAnswer) {
        optionsSet.add(randomForm);
      }
    }
    
    // Shuffle options
    return Array.from(optionsSet).sort(() => Math.random() - 0.5);
  };

  const generateQuestion = () => {
    if (selectedPronouns.length === 0 || selectedCases.length === 0) {
      return null;
    }
    const pronoun = selectedPronouns[Math.floor(Math.random() * selectedPronouns.length)];
    const caseType = selectedCases[Math.floor(Math.random() * selectedCases.length)];
    const correctAnswer = pronounsData[pronoun][caseType];
    
    // Get random example from the array
    const examples = exampleSentences[pronoun][caseType];
    const example = examples[Math.floor(Math.random() * examples.length)];
    
    const newOptions = generateOptions(correctAnswer);
    setOptions(newOptions);
    
    return {
      pronoun,
      caseType,
      correctAnswer,
      exampleGr: example.gr,
      exampleRu: example.ru
    };
  };

  const startPractice = () => {
    setScore({ correct: 0, total: 0 });
    setFeedback(null);
    setUserAnswer('');
    setSelectedAnswer(null);
    setCurrentQuestion(generateQuestion());
    setMode('practice');
  };

  const checkAnswer = (answer) => {
    if (!currentQuestion) return;
    
    const answerToCheck = answer || userAnswer.trim();
    if (!answerToCheck) return;
    
    const isCorrect = answerToCheck.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    setFeedback({
      isCorrect,
      correctAnswer: currentQuestion.correctAnswer
    });
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleOptionClick = (option) => {
    if (feedback) return;
    setSelectedAnswer(option);
    checkAnswer(option);
  };

  const nextQuestion = () => {
    setFeedback(null);
    setUserAnswer('');
    setSelectedAnswer(null);
    setCurrentQuestion(generateQuestion());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (feedback) {
        nextQuestion();
      } else {
        checkAnswer();
      }
    }
  };

  const togglePronoun = (pronoun) => {
    setSelectedPronouns(prev => 
      prev.includes(pronoun) 
        ? prev.filter(p => p !== pronoun)
        : [...prev, pronoun]
    );
  };

  const toggleCase = (caseType) => {
    setSelectedCases(prev => 
      prev.includes(caseType)
        ? prev.filter(c => c !== caseType)
        : [...prev, caseType]
    );
  };

  // Menu Screen
  if (mode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-2">
            Греческие местоимения
          </h1>
          <p className="text-center text-gray-600 mb-8">Тренажёр для запоминания</p>
          
          <div className="space-y-4">
            <button
              onClick={startPractice}
              className="w-full py-4 px-6 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              🎯 Начать тренировку
            </button>
            
            <button
              onClick={() => setMode('table')}
              className="w-full py-4 px-6 bg-white text-indigo-600 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg border-2 border-indigo-200"
            >
              📊 Посмотреть таблицу
            </button>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-full py-3 px-6 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              ⚙️ Настройки
            </button>
          </div>

          {showSettings && (
            <div className="mt-6 bg-white rounded-xl p-4 shadow-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Способ ввода:</h3>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setInputMode('choice')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    inputMode === 'choice'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  🖱️ Выбор мышкой
                </button>
                <button
                  onClick={() => setInputMode('keyboard')}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    inputMode === 'keyboard'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  ⌨️ Клавиатура
                </button>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-3">Выбери местоимения:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.keys(pronounsData).map(pronoun => (
                  <button
                    key={pronoun}
                    onClick={() => togglePronoun(pronoun)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedPronouns.includes(pronoun)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {pronoun}
                  </button>
                ))}
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-3">Выбери падежи:</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(caseNamesShort).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => toggleCase(key)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCases.includes(key)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Table Screen
  if (mode === 'table') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setMode('menu')}
            className="mb-4 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            ← Назад
          </button>
          
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">
            Таблица местоимений
          </h2>
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-2 text-left">Лицо</th>
                  <th className="p-2">Им.</th>
                  <th className="p-2">Род. сл.</th>
                  <th className="p-2">Род. сильн.</th>
                  <th className="p-2">Вин. сл.</th>
                  <th className="p-2">Вин. сильн.</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(pronounsData).map(([pronoun, forms], idx) => (
                  <tr key={pronoun} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-2 font-medium text-gray-700">{pronoun}</td>
                    <td className="p-2 text-center text-indigo-700 font-medium">{forms.nominative}</td>
                    <td className="p-2 text-center text-green-700">{forms.genitive_weak}</td>
                    <td className="p-2 text-center text-green-800 font-medium">{forms.genitive_strong}</td>
                    <td className="p-2 text-center text-orange-700">{forms.accusative_weak}</td>
                    <td className="p-2 text-center text-orange-800 font-medium">{forms.accusative_strong}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 bg-white rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">💡 Когда использовать сильные формы:</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• После предлогов: <span className="text-indigo-600">για εμένα, με αυτόν, χωρίς εσάς</span></li>
              <li>• Для эмфазы/контраста: <span className="text-indigo-600">Εσένα θέλω, όχι αυτήν</span></li>
              <li>• В коротких ответах: <span className="text-indigo-600">— Ποιος; — Εγώ!</span></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Practice Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setMode('menu')}
            className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            ← Меню
          </button>
          <div className="bg-white px-4 py-2 rounded-lg shadow">
            <span className="text-green-600 font-bold">{score.correct}</span>
            <span className="text-gray-400"> / </span>
            <span className="text-gray-600">{score.total}</span>
            {score.total > 0 && (
              <span className="text-gray-400 text-sm ml-2">
                ({Math.round(score.correct / score.total * 100)}%)
              </span>
            )}
          </div>
        </div>

        {currentQuestion ? (
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="text-center mb-4">
              <p className="text-gray-500 text-sm mb-2">Как будет по-гречески:</p>
              <p className="text-3xl font-bold text-indigo-800 mb-2">
                {currentQuestion.pronoun}
              </p>
              <p className="text-lg text-gray-600 bg-gray-100 rounded-lg py-2 px-4 inline-block">
                {caseNames[currentQuestion.caseType]}
              </p>
            </div>

            {/* Example sentence */}
            <div className="mb-6 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
              <p className="text-xs text-indigo-500 mb-1">Пример:</p>
              <p className="text-indigo-800 font-medium">{currentQuestion.exampleGr}</p>
              <p className="text-gray-600 text-sm mt-1">{currentQuestion.exampleRu}</p>
            </div>

            {inputMode === 'keyboard' ? (
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Введи ответ..."
                disabled={feedback !== null}
                className="w-full text-center text-2xl p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none mb-4"
                autoFocus
              />
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-4">
                {options.map((option, idx) => {
                  let buttonClass = "py-3 px-4 text-xl font-medium rounded-xl transition-colors border-2 ";
                  
                  if (feedback) {
                    if (option === currentQuestion.correctAnswer) {
                      buttonClass += "bg-green-100 border-green-500 text-green-800";
                    } else if (option === selectedAnswer && !feedback.isCorrect) {
                      buttonClass += "bg-red-100 border-red-500 text-red-800";
                    } else {
                      buttonClass += "bg-gray-100 border-gray-200 text-gray-400";
                    }
                  } else {
                    buttonClass += "bg-white border-gray-200 text-gray-800 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer";
                  }
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      disabled={feedback !== null}
                      className={buttonClass}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}

            {feedback && (
              <div className={`text-center p-4 rounded-xl mb-4 ${
                feedback.isCorrect 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {feedback.isCorrect ? (
                  <p className="text-xl font-bold">✓ Σωστά! Правильно!</p>
                ) : (
                  <div>
                    <p className="text-xl font-bold mb-2">✗ Λάθος! Неправильно</p>
                    <p className="text-lg">
                      Правильный ответ: <span className="font-bold">{feedback.correctAnswer}</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {inputMode === 'keyboard' && !feedback && (
              <button
                onClick={() => checkAnswer()}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Проверить
              </button>
            )}
            
            {feedback && (
              <button
                onClick={nextQuestion}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Следующий вопрос →
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <p className="text-gray-600 mb-4">
              Выбери хотя бы одно местоимение и один падеж в настройках
            </p>
            <button
              onClick={() => setMode('menu')}
              className="py-2 px-6 bg-indigo-600 text-white rounded-lg"
            >
              К настройкам
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
