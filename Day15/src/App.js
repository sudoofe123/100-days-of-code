import React, { useState } from "react";
import data from "./data";
// import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <div className="info">
          {questions.map((question) => {
            // const { id, title, info } = question;
            return (
              <div>
                <SingleQuestion key={question.id} {...question} />
                {/* <p>{title}</p>
                <h2>
                  {question.id}
                  {info}
                </h2> */}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
export default App;
