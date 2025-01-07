import React, { useState } from 'react';
import { Responce, } from '../../types';
import { questionareData } from '../../mockData';

export const Questionnaire = () => {
  const [responses, setResponses] = useState<Responce<string | number>>({});
  const handleChnage = (questionId: string, value: string | number | (string | number)[]) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted responses:', responses);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>

      {questionareData.map((question) => (
        <div key={question.id}>
          {question.type === 'text' && (
            <>
              <label htmlFor={question.id}>{question.question}</label>
              <input
                type='text'
                id={question.id}
                onChange={(e) => handleChnage(question.id, e.target.value)}
              />
            </>
          )}
          {question.type === 'multipleChoice' && question.options && (
            <fieldset>
              <legend>{question.question}</legend>
              {question.options.map((option) => (
                <div key={option.id}>
                  <label>
                    <input
                      type='checkbox'
                      value={option.label}
                      onChange={(e) => {
                        const selectedValues = responses[question.id] as (string | number)[];
                        const value = option.label;
                        const updatedValues = e.target.checked
                          ? [...(selectedValues || []), value]
                          : selectedValues.filter(selectedValue => selectedValue !== value);
                        handleChnage(question.id, updatedValues);
                      }}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </fieldset>
          )}
          {question.type === 'singleChoice' && question.options && (
            <fieldset>
              <legend>{question.question}</legend>
              {question.options.map((option) => (
                <div key={option.id}>
                  <label>
                    <input
                      type='radio'
                      name={question.id}
                      value={option.label}
                      onChange={() => handleChnage(question.id, option.label)}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </fieldset>
          )}



        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};
