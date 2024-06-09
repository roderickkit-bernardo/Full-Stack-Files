// Developer: Roderick Bernardo
// Purpose: React quiz app

import useFetch from "./hooks/useFetch";
import { useState } from "react";
import {
  FaCircleCheck,
  FaCircleXmark,
  FaCircleChevronRight,
} from "react-icons/fa6";
import Message from "./Message";

function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [choice, setChoice] = useState(false);
  const [disableQAButton, setDisableQAButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(true);
  const [questionAndAnswersIndex, setQuestionAndAnswersIndex] = useState(0);
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1);

  const updateAnswersAtIndex = (index, answerIndex) => {
    setAnswers((currentValues) => {
      const newValues = [...currentValues];
      newValues[index] = answerIndex;

      setCurrentAnswerIndex(() => {
        return answerIndex;
      });

      setChoice(() => {
        return true;
      });

      setDisableQAButton(() => {
        return true;
      });

      if (
        questionAndAnswersIndex + 1 <
        useFetchResponse.data.questionAndAnswers.length
      ) {
        setDisableNextButton(() => {
          return false;
        });
      }

      return newValues;
    });
  };

  const clickHandlerAnswer = (answerIndex) => {
    updateAnswersAtIndex(questionAndAnswersIndex, answerIndex);
  };

  const clickHandlerNextQuestion = () => {
    if (
      questionAndAnswersIndex < useFetchResponse.data.questionAndAnswers.length
    ) {
      setQuestionAndAnswersIndex((currentValue) => {
        let newValue = currentValue + 1;

        setChoice(() => {
          return false;
        });

        setDisableQAButton(() => {
          return false;
        });

        setDisableNextButton(() => {
          return true;
        });

        return newValue;
      });
    }
  };

  const useFetchResponse = useFetch(
    `${process.env.REACT_APP_SERVER_END_POINT}${process.env.REACT_APP_QUIZ_CONFIG}`
  );

  if (
    typeof useFetchResponse.loading === "undefined" ||
    useFetchResponse.loading === true
  ) {
    return (
      <Message
        title="Loading"
        message="Data is being fetched, please wait."
      ></Message>
    );
  }

  if (
    typeof useFetchResponse.error === "undefined" ||
    useFetchResponse.error === true
  ) {
    return (
      <Message
        title="Error"
        message="Network error has occurred, please try again."
      ></Message>
    );
  }

  const buttonStleBase = `button is-fullwidth is-justify-content-flex-start`;
  const buttonStyleLight = `${buttonStleBase} is-light`;
  const buttonStyleSuccess = `${buttonStleBase} has-background-grey-light`;

  const currentQuestionAndAnswer =
    useFetchResponse.data.questionAndAnswers[questionAndAnswersIndex];

  return (
    <>
      <section className="hero">
        <div className="hero-body has-background-light">
          <div className="block">
            <p className="is-size-2 has-text-centered">
              {useFetchResponse.data.title}
            </p>
          </div>
          <div className="block">
            <p className="is-size-5 has-text-centered">
              {useFetchResponse.data.description}
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title is-size-5">
              Question {questionAndAnswersIndex + 1} of&nbsp;
              {useFetchResponse.data.questionAndAnswers.length}:&nbsp;
              {currentQuestionAndAnswer.question}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <p className="has-text-right">
                {calculateMark(answers, useFetchResponse.data)}
              </p>
              <div className="control">
                {currentQuestionAndAnswer.answers.map((answer, index) => (
                  <button
                    key={index}
                    style={disableQAButton ? { pointerEvents: "none" } : null}
                    className={
                      choice && index === currentAnswerIndex
                        ? buttonStyleSuccess
                        : buttonStyleLight
                    }
                    onClick={() => {
                      clickHandlerAnswer(index);
                    }}
                  >
                    {index + 1}. {answer.text}
                    {choice === false ? null : answer.isCorrect ? (
                      <FaCircleCheck
                        className="ml-1"
                        color="green"
                      ></FaCircleCheck>
                    ) : (
                      <FaCircleXmark
                        className="ml-1"
                        color="red"
                      ></FaCircleXmark>
                    )}
                  </button>
                ))}
              </div>
              <div className="control">
                <button
                  onClick={clickHandlerNextQuestion}
                  style={disableNextButton ? { pointerEvents: "none" } : null}
                  className="button is-dark is-fullwidth is-justify-content-flex-start"
                >
                  {questionAndAnswersIndex + 1 <
                    useFetchResponse.data.questionAndAnswers.length && (
                    <FaCircleChevronRight className="mr-1"></FaCircleChevronRight>
                  )}
                  {questionAndAnswersIndex + 1 <
                  useFetchResponse.data.questionAndAnswers.length
                    ? `Proceed to the next question`
                    : `Final question`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function calculateMark(answers, data) {
  const calculateMarkResponse = {
    numberCorrect: 0,
    totalQUestions: data.questionAndAnswers.length,
    average: "",
  };

  answers.forEach((answer, index) => {
    if (data.questionAndAnswers[index].answers[answer].isCorrect) {
      calculateMarkResponse.numberCorrect++;
    }
  });

  calculateMarkResponse.average =
    (calculateMarkResponse.numberCorrect /
      calculateMarkResponse.totalQUestions) *
    100;

  return (
    <p>
      <b>
        Correct Answers: [{calculateMarkResponse.numberCorrect} out of{" "}
        {calculateMarkResponse.totalQUestions}] Average: [
        {calculateMarkResponse.average} %]
      </b>
    </p>
  );
}

export default Quiz;
