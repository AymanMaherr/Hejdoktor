export type QuestionOption<T> = {
  id: string;
  label: T;
}

export type Question<T> = {
  id: string;
  type: 'text' | 'multipleChoice' | 'singleChoice';
  question: string;
  options?: QuestionOption<T>[];
}

export type QuestionnaireData<T> = Question<T>[];

export type Responce<T> = {
  [questionId: string]: T | T[];
}