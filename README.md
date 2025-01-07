# Simple Questionnaire Application

This project is a simple questionnaire application implemented in TypeScript and React. The application allows users to respond to questions of various types in an accessible and user-friendly interface. It satisfies the following requirements:

## Features

- **Questionnaire Types**:
  - **Free Text**: Respondents can enter a free text response.
  - **Multiple Choice**: Respondents can select multiple answers from a predefined list.
  - **Single Choice**: Respondents can select one answer from a predefined list.
- **Accessibility**: The application adheres to Web Accessibility (WCAG) standards, using proper ARIA labels, fieldsets, and legends to ensure usability for all users.
- **Data-Driven Design**: The questionnaire is fully data-driven, with questions and options defined in a structured format.
- **Dynamic Response Handling**: Supports various response types, including free text, single-choice, and multiple-choice answers.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: To ensure type safety and better developer experience.
- **CSS**: For styling the components.

## How to Run the Project

### Prerequisites

Ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/AymanMaherr/Hejdoktor.git
```
2. Navigate to the project directory:
```bash
cd HEJDOKTOR
```
3. Install dependencies:
```bash
npm install
```
## Run the Development Server
To start the application in development mode:
```bash
npm run dev
```
The application will be available at http://localhost:5173.



Data Structure
The questionnaire data is modeled as follows:
```typescript
type QuestionOption<T> = {
  id: string;  // Unique identifier for each option
  label: T;    // Option label, can be a string or number
};

type Question<T> = {
  id: string;
  type: "text" | "multipleChoice" | "singleChoice";
  question: string;
  options?: QuestionOption<T>[]; // Optional for free text questions
};

type QuestionnaireData<T> = Question<T>[];
```
## Example Data
```typescript
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
    required: true
  },
  {
    id: 'q2',
    type: 'text',
    question: 'What is your name?',
    required: true
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
    required: true
  }
];
```


## Accessibility Features

 - Use of ``<fieldset>`` and ``<legend>`` to group related inputs (checkboxes and radio buttons).
 - Proper label elements associated with inputs.
 - Keyboard navigability and screen reader compatibility.

## How to Test

1. Interact with the form elements to verify:
    - Free text input accepts text responses.
    - Multiple-choice allows selecting multiple options.
    - Single-choice restricts selection to one option.
2. Submit the form and check the console for the logged responses.

## Future Improvements

- Add form validation (e.g., required fields, character limits).
- Enhance styling for better user experience.
- Integrate with a real API server for persistence.
- unit tests using a testing library like Jest or React Testing Library.

## License

This project is licensed under the MIT license
