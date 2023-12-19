import { H2 } from '@/Components/Typograph'
import styles from './page.module.css'
import Quiz from '@/Components/Quiz'
import { quizData } from './quizData'

const QuizPage = () => {
  return (
    <div>
      <section>
        <H2>Quiz</H2>
        {quizData && <Quiz data={quizData} />}
      </section>
    </div>
  )
}

export default QuizPage
