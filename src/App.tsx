import { Button } from "./components/ui/button";

function App() {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();

  const operators = ["+", "-"];

  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];

  const getRightAnswer = () => {
    if (randomOperator === "+") {
      return number1 + number2;
    }

    return number1 - number2;
  };

  const rightAnswer = getRightAnswer();

  const generateThreeWrongAnswers = () => {
    const wrongAnswers: number[] = [];

    while (wrongAnswers.length < 3) {
      const wrongAnswer = Math.floor(Math.random() * 20);

      if (wrongAnswer !== rightAnswer && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
      }
    }

    return wrongAnswers;
  };

  const wrongAnswers = generateThreeWrongAnswers();

  const possibleAnswers = [rightAnswer, ...wrongAnswers].sort();

  const handleAnswerClick = (answer: number) => {
    if (answer === rightAnswer) {
      alert("Resposta correta! Parabéns! Reiniciando o quiz em 3s...");
      setInterval(() => {
        window.location.reload();
      }, 3000);
    } else {
      alert("Resposta errada. Tente novamente!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <h1 className="text-2xl font-bold">Quiz</h1>
      <section className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-6xl font-medium">
          <span>{number1}</span>
          <span>{randomOperator}</span>
          <span>{number2}</span>
          <span>=</span>
          <span>?</span>
        </div>
        <div className="flex gap-2">
          {possibleAnswers.map((answer) => (
            <Button
              className="size-16 text-xl"
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
