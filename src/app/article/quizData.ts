export const articleQuizData = {
  title: null,
  description: null,
  cover: null,
  questions: [
    {
      cover: null,
      question: 'Qual super-herói é conhecido como o “Cavaleiro das Trevas”?',
      answers: [
        {
          text: 'Homem-Aranha',
          image: null,
          correct: false,
        },
        {
          text: 'Batman',
          image: null,
          correct: true,
        },
        {
          text: 'Superman',
          image: null,
          correct: false,
        },
        {
          text: 'Flash',
          image: null,
          correct: false,
        },
      ],
      timeOut: 10000,
      timer: false,
    }
  ],
}

export const articleQuizMultData = {
  title: 'Super Hero Quiz',
  description: 'Test your knowledge of super heroes',
  cover:
    'https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  questions: [
    {
      cover: null,
      question: 'Qual super-herói é conhecido como o “Cavaleiro das Trevas”?',
      answers: [
        {
          text: 'Homem-Aranha',
          image: null,
          correct: false,
        },
        {
          text: 'Batman',
          image: null,
          correct: true,
        },
        {
          text: 'Superman',
          image: null,
          correct: false,
        },
        {
          text: 'Flash',
          image: null,
          correct: false,
        },
      ],
      timeOut: 10000,
      timer: true,
    },
    {
      cover:
        'https://images.unsplash.com/photo-1600480505021-e9cfb05527f1?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      question: 'De quem é esse brasão?',
      answers: [
        { text: 'Flash', image: null, correct: false },
        { text: 'Aquaman', image: null, correct: false },
        { text: 'Batman', image: null, correct: true },
        { text: 'Shazam', image: null, correct: false },
      ],
      timeOut: 5000,
      timer: false,
    },
    {
      cover: null,
      question: 'What is 4 + 4?',
      answers: [
        { text: '2', image: null, correct: false },
        { text: '8', image: null, correct: true },
        { text: '3', image: null, correct: false },
        { text: '5', image: null, correct: false },
      ],
      timeOut: 8000,
      timer: true,
    },
  ],
}