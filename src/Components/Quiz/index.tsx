'use client'

import { useState } from 'react'
import { H3 } from '../Typograph'
import styles from './index.module.css'
import Image from 'next/image'

interface IQuiz {
  cover?: string | null
  question: string
  answers: {
    text: string
    image?: string | null
    correct: boolean
  }[]
  timeOut?: number
}

const Quiz = ({ data }: { data: IQuiz[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  const [quizResult, setQuizResult] = useState<boolean[]>([])

  const changeQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setCurrentAnswer(null)

    if (currentQuestion === data?.length - 1) {
      setFinished(true)
    }
  }

  return data?.length > 0 && !finished ? (
    data?.map((item, index) => {
      return (
        index === currentQuestion && (
          <div className={styles.quiz__container} key={item?.question}>
            <div className={styles.quiz__questionContainer}>
              {item?.cover && (
                <Image
                  src={item?.cover}
                  alt={item?.question}
                  width={1000}
                  height={1000}
                />
              )}
              <H3 className={styles.quiz__question}>{item?.question}</H3>
            </div>

            <div
              className={styles.quiz__answerContainer}
              style={{
                pointerEvents: currentAnswer !== null ? 'none' : 'auto',
              }}>
              {item?.answers?.map((answer, index) => {
                const isCurrentAnswer = currentAnswer === index
                const isAnswerCorrect = answer?.correct
                let answerClass = ''
                if (isCurrentAnswer) {
                  if (isAnswerCorrect) {
                    answerClass = styles.quiz__answerCorrect
                  } else {
                    answerClass = styles.quiz__answerWrong
                  }
                }

                return (
                  <button
                    className={`${styles.quiz__answer} ${answerClass}`}
                    key={answer?.text}
                    onClick={() => {
                      setCurrentAnswer(index)
                      setQuizResult([...quizResult, answer?.correct])
                    }}>
                    {answer?.image && (
                      <Image
                        src={answer?.image}
                        alt={answer?.text}
                        width={500}
                        height={500}
                      />
                    )}

                    {answer?.text}
                  </button>
                )
              })}
            </div>

            <div className={styles.quiz__controls}>
              {/* <button
                className={styles.quiz__prev}
                disabled={currentQuestion === 0}
                onClick={() =>
                  currentQuestion - 1 >= 0 &&
                  setCurrentQuestion(currentQuestion - 1)
                }>
                Anterior
              </button> */}

              <div className={styles.quiz__progress}>
                {currentQuestion + 1}/{data?.length}
              </div>

              <button className={styles.quiz__next} onClick={changeQuestion}>
                Próximo
              </button>
            </div>
          </div>
        )
      )
    })
  ) : (
    <div className={styles.quiz__result}>
      Resultado:
      <div className={styles.quiz__resultCounter}>
        {quizResult?.filter((item) => item)?.length} / {data?.length}
      </div>
      <button
        className={styles.quiz__resultButton}
        onClick={() => {
          setFinished(false)
          setCurrentQuestion(0)
          setCurrentAnswer(null)
          setQuizResult([])
        }}>
        Tentar novamente
      </button>
    </div>
  )
}

export default Quiz
