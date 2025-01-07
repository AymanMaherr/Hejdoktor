import { QuestionnaireData } from './types';

export const questionareData: QuestionnaireData<string | number> = [
  {
    id: 'q1',
    type: 'singleChoice',
    question: 'What is your favorite number?',
    options: [
      { id: 'opt1', label: 7 },
      { id: 'opt2', label: 5 },
      { id: 'opt3', label: 22 },
    ],
  },
  {
    id: 'q2',
    type: 'text',
    question: 'What is your name?',
  },
  {
    id: 'q3',
    type: 'multipleChoice',
    question: 'What is your favorite color?',
    options: [
      { id: 'opt1', label: 'Red' },
      { id: 'opt2', label: 'Blue' },
      { id: 'opt3', label: 'Green' },
    ],
  }
];
