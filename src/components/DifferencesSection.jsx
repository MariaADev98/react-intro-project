import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";


export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  
  return (
    <section>
      <h3>Чем мы отличаемся от других?</h3>
      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {/* несколько вариантов записи тернарной функции */}

      {/* {contentType ? (
          <p>{differences[contentType]}</p>
         ) : (
           <p>Нажми на кнопку</p>
          )}
*/}

      {/* {!contentType ? <p>Нажми на кнопку</p> : null}  
      {contentType ? <p>{differences[contentType]}</p> : null} */}

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
