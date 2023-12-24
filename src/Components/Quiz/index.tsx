'use client'

import { useEffect, useState } from 'react'
import { H3, P } from '../Typograph'
import styles from './index.module.css'
import Image from 'next/image'
import Check from '../Icons/Check'

interface IQuestion {
  cover?: string | null
  question: string
  answers: {
    text?: string
    image?: string | null
    correct: boolean
  }[]
  timeOut?: number
  timer?: boolean
}

interface IQuiz {
  title: string | null
  description: string | null
  cover?: string | null
  questions: IQuestion[]
}

const Quiz = ({ data }: { data: IQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null)
  const [finished, setFinished] = useState<boolean | null>(null)
  const [reveal, setReveal] = useState(false)
  const [timer, setTimer] = useState(false)

  const defaultTime = 10000
  const [timeOut, setTimeOut] = useState(
    data?.questions[currentQuestion]?.timeOut ?? defaultTime
  )
  const [time, setTime] = useState(
    data?.questions[currentQuestion]?.timeOut ?? defaultTime
  )

  const [quizResult, setQuizResult] = useState<boolean[]>([])

  useEffect(() => {
    setTimer(data?.questions[currentQuestion]?.timer ?? false)
    setTimeOut(data?.questions[currentQuestion]?.timeOut ?? defaultTime)
    setTime(data?.questions[currentQuestion]?.timeOut ?? defaultTime)
  }, [data, currentQuestion])

  useEffect(() => {
    if (timer) {
      if (time > 0 && !reveal && finished !== null) {
        const interval = setInterval(() => {
          setTime(time - 1000)
        }, 1000)
        return () => clearInterval(interval)
      } else if (time === 0) {
        setReveal(true)
      }
    }
  }, [timer, time, reveal, finished])

  const changeQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setCurrentAnswer(null)
    setReveal(false)
    setTime(data?.questions[currentQuestion]?.timeOut ?? defaultTime)
    setTimer(data?.questions[currentQuestion]?.timer ?? false)

    if (currentQuestion === data?.questions?.length - 1) {
      setFinished(true)
    }
  }

  const selectAnswer = (answer: number) => {
    setCurrentAnswer(answer)
    setQuizResult([
      ...quizResult,
      data?.questions[currentQuestion]?.answers[answer]?.correct,
    ])

    setReveal(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setCurrentAnswer(null)
    setReveal(false)
    setTime(data?.questions[currentQuestion]?.timeOut ?? defaultTime)
    setTimer(data?.questions[currentQuestion]?.timer ?? false)
    setQuizResult([])
    setFinished(false)
  }

  const QuizPresentation = () => {
    return (
      <div className={styles.quiz__presentation}>
        {data?.cover && (
          <Image
            src={data?.cover}
            alt={data?.title ?? 'quiz cover image'}
            className={styles.quiz__cover}
            width={1000}
            height={1000}
          />
        )}
        {data?.title && <H3>{data?.title}</H3>}
        {data?.description && (
          <P style={{ color: '#888', marginTop: -8 }}>{data?.description}</P>
        )}

        <button
          type="button"
          className={styles.quiz__startButton}
          onClick={() => setFinished(false)}>
          Iniciar
        </button>
      </div>
    )
  }

  const QuizQuestions = () => {
    return (
      data?.questions.length > 0 &&
      data?.questions?.map((item, index) => {
        return (
          index === currentQuestion && (
            <div className={styles.quiz__container} key={item?.question}>
              <div className={styles.quiz__questionRow}>
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

                {timer && (
                  <div className={styles.quiz__timerContainer}>
                    <div
                      className={styles.quiz__timer}
                      style={{
                        background: `conic-gradient(rgb(100, 100, 255) ${
                          360 - (time / timeOut) * 360
                        }deg, #ccc 0deg, #ccc 0deg)`,
                      }}>
                      <div className={styles.quiz__timerNumber}>{`${(
                        time /
                        1000 /
                        60
                      ).toFixed(0)}:${((time / 1000) % 60)
                        .toFixed(0)
                        .padStart(2, '0')}`}</div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className={styles.quiz__answerContainer}
                style={{
                  pointerEvents:
                    currentAnswer !== null || reveal ? 'none' : 'auto',
                }}>
                {item?.answers?.map((answer, index) => {
                  const isCurrentAnswer = currentAnswer === index
                  const isAnswerCorrect = answer?.correct
                  let answerClass = ''
                  if (isCurrentAnswer || reveal) {
                    if (isAnswerCorrect) {
                      answerClass = styles.quiz__answerCorrect
                    } else {
                      answerClass = styles.quiz__answerWrong
                    }
                  }

                  return (
                    <button
                      type="button"
                      className={`${styles.quiz__answer} ${answerClass}`}
                      key={answer?.text}
                      onClick={() => selectAnswer(index)}>
                      {answer?.image && (
                        <Image
                          src={answer?.image}
                          alt={answer?.text ?? 'Answer image'}
                          width={500}
                          height={500}
                        />
                      )}

                      {answer?.text}

                      {reveal && (
                        <div className={styles.quiz__answerCheck}>
                          <Check state={isAnswerCorrect} />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {data && data?.questions?.length > 1 && (
                <div className={styles.quiz__controls}>
                  <div className={styles.quiz__progress}>
                    {currentQuestion + 1} / {data?.questions?.length}
                  </div>

                  {!reveal && (
                    <button
                      type="button"
                      className={styles.quiz__skip}
                      onClick={() => setReveal(true)}>
                      Pular
                    </button>
                  )}

                  {reveal && (
                    <button
                      type="button"
                      className={styles.quiz__next}
                      onClick={changeQuestion}>
                      {currentQuestion === data?.questions?.length - 1
                        ? 'Finalizar'
                        : 'Próximo'}
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        )
      })
    )
  }

  const QuizResult = () => {
    return (
      <div className={styles.quiz__result}>
        Resultado:
        <div className={styles.quiz__resultCounter}>
          {quizResult?.filter((item) => item)?.length} /{' '}
          {data?.questions?.length}
        </div>
        <button
          type="button"
          className={styles.quiz__resultButton}
          onClick={() => resetQuiz()}>
          Refazer quiz
        </button>
      </div>
    )
  }

  if (finished === null && data?.title && data?.description) {
    return <QuizPresentation />
  } else if (finished === false) {
    return <QuizQuestions />
  } else if (finished === true && data?.questions?.length > 1) {
    return <QuizResult />
  } else if (data?.questions?.length === 1) {
    return <QuizQuestions />
  } else {
    return null
  }
}

export default Quiz
