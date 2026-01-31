import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State management for counter value, step size, and settings
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);

  // Define upper and lower bounds
  const upperLimit = 10;
  const lowerLimit = allowNegative ? -10 : 0;

  // Load saved counter value from localStorage on component mount
  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    const savedStep = localStorage.getItem("stepSize");
    const savedAllowNegative = localStorage.getItem("allowNegative");
    
    if (savedCount !== null) setCount(parseInt(savedCount));
    if (savedStep !== null) setStep(parseInt(savedStep));
    if (savedAllowNegative !== null) setAllowNegative(savedAllowNegative === "true");
  }, []);

  // Save counter value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("counterValue", count);
  }, [count]);

  // Save step size to localStorage
  useEffect(() => {
    localStorage.setItem("stepSize", step);
  }, [step]);

  // Save allowNegative setting to localStorage
  useEffect(() => {
    localStorage.setItem("allowNegative", allowNegative);
  }, [allowNegative]);

  // Increment handler - adds step value to count
  const increment = () => {
    if (count + step <= upperLimit) {
      setCount(count + step);
    }
  };

  // Decrement handler - subtracts step value from count
  const decrement = () => {
    if (count - step >= lowerLimit) {
      setCount(count - step);
    }
  };

  // Reset handler - sets count back to 0
  const reset = () => {
    setCount(0);
  };

  // Handle step size input change
  const handleStepChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setStep(value);
    }
  };

  // Toggle negative values - resets to 0 if current value is negative
  const toggleNegative = () => {
    const newAllowNegative = !allowNegative;
    setAllowNegative(newAllowNegative);
    
    // If disabling negative and count is negative, reset to 0
    if (!newAllowNegative && count < 0) {
      setCount(0);
    }
  };

  // Determine if count is at a limit for styling
  const isAtLimit = count === upperLimit || count === lowerLimit;
  const isAtUpperLimit = count >= upperLimit;
  const isAtLowerLimit = count <= lowerLimit;

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">⚛️ React Counter App</h1>
          <p className="subtitle">Master State Management & Event Handling</p>
        </header>

        {/* Counter Display */}
        <div className={`counter-display ${isAtLimit ? 'at-limit' : ''}`}>
          <span className="count-label">Current Count</span>
          <h2 className="count-value">{count}</h2>
          {isAtLimit && (
            <span className="limit-label">
              {count === upperLimit ? "⚠️ Upper Limit Reached" : "⚠️ Lower Limit Reached"}
            </span>
          )}
        </div>

        {/* Control Buttons */}
        <div className="button-group">
          <button 
            onClick={decrement} 
            disabled={isAtLowerLimit}
            className="btn btn-decrement"
            aria-label="Decrement counter"
          >
            <span className="btn-icon">➖</span>
            <span className="btn-text">Decrement</span>
          </button>
          
          <button 
            onClick={reset}
            className="btn btn-reset"
            aria-label="Reset counter"
          >
            <span className="btn-icon">🔄</span>
            <span className="btn-text">Reset</span>
          </button>
          
          <button 
            onClick={increment} 
            disabled={isAtUpperLimit}
            className="btn btn-increment"
            aria-label="Increment counter"
          >
            <span className="btn-icon">➕</span>
            <span className="btn-text">Increment</span>
          </button>
        </div>

        {/* Settings Panel */}
        <div className="settings-panel">
          <h3 className="settings-title">⚙️ Settings</h3>
          
          {/* Step Size Control */}
          <div className="setting-item">
            <label htmlFor="step-input" className="setting-label">
              Step Size: <strong>{step}</strong>
            </label>
            <div className="step-controls">
              <button 
                onClick={() => step > 1 && setStep(step - 1)}
                className="step-btn"
                disabled={step <= 1}
              >
                -
              </button>
              <input
                id="step-input"
                type="number"
                min="1"
                max="5"
                value={step}
                onChange={handleStepChange}
                className="step-input"
              />
              <button 
                onClick={() => step < 5 && setStep(step + 1)}
                className="step-btn"
                disabled={step >= 5}
              >
                +
              </button>
            </div>
          </div>

          {/* Negative Toggle */}
          <div className="setting-item">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={allowNegative}
                onChange={toggleNegative}
                className="toggle-checkbox"
              />
              <span className="toggle-slider"></span>
              <span className="toggle-text">Allow Negative Values</span>
            </label>
          </div>

          {/* Info Display */}
          <div className="info-box">
            <p className="info-text">
              <strong>Range:</strong> {lowerLimit} to {upperLimit}
            </p>
            <p className="info-text">
              <strong>Step:</strong> {step}
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>Built with React • Demonstrates useState & Event Handling</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
