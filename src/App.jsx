import React, { useEffect, useState } from 'react';
import * as math from 'mathjs';
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const inputDisplay = document.getElementById('input-display');
    const outputDisplay = document.getElementById('output-display');
    const buttons = document.querySelectorAll('.buttons button');

    function updateDisplays() {
      input.length>0?inputDisplay.textContent = input:"0";
      outputDisplay.textContent = output;
    }

    function calculateExpression(expression) {
      return math.evaluate(expression);
    }

    function handleButtonClick(event) {
      const label = event.target.textContent;

      if (label === '=') {
        try {
          let result = input;
          // ... (rest of the code remains the same)
          result = result.replace(/√(\d+)/g, (_, num) => Math.sqrt(parseFloat(num)).toString());
          const calculatedResult = math.evaluate(result);
          setOutput(calculatedResult.toString());
        } catch (error) {
          setOutput('Error');
        }
      } else if (label === 'C') {
        setInput('');
        inputDisplay.textContent="0"
        setOutput('');
      } else if (label === '⌫') {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else {
        setInput((prevInput) => prevInput + label);
      }
    }

    buttons.forEach((button) => {
      button.addEventListener('click', handleButtonClick);
    });

    updateDisplays(); // Call updateDisplays after state updates

    // Cleanup event listeners when component unmounts
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, [input, output]);

  return (
    <>
      <div className="calculator">
        <strong>Aniket</strong>
        <div className="display">
          <div className="input" id="input-display">
            0
          </div>
          <div className="output" id="output-display">
            0
          </div>
        </div>
        <div className="buttons" id="buttons-container">
          <button className="operator" id="C">
            C
          </button>
          <button className="operator" id="⌫">
            ⌫
          </button>
          <button className="operator" id="%">
            %
          </button>
          <button className="operator" id="/">
            /
          </button>
          <button id={7}>7</button>
          <button id={8}>8</button>
          <button id={9}>9</button>
          <button className="operator" id="*">
            *
          </button>
          <button id={4}>4</button>
          <button id={5}>5</button>
          <button id={6}>6</button>
          <button className="operator" id="-">
            -
          </button>
          <button id={1}>1</button>
          <button id={2}>2</button>
          <button id={3}>3</button>
          <button className="operator" id="+">
            +
          </button>
          <button id={0}>0</button>
          <button id=".">.</button>
          <button className="operator" id="^">
            ^
          </button>
          <button className="operator" id="=">
            =
          </button>
          <button className="operator" id="(">
            (
          </button>
          <button className="operator" id=")">
            )
          </button>
          <button className="operator" id="√">
            √
          </button>
          <button className="operator" id="!">
            !
          </button>
        </div>
      </div>
    </>

  );
}

export default App
