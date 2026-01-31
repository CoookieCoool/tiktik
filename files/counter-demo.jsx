import React, { useState, useEffect } from "react";

export default function CounterApp() {
  // State management
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);

  // Define upper and lower bounds
  const upperLimit = 10;
  const lowerLimit = allowNegative ? -10 : 0;

  // Increment handler
  const increment = () => {
    if (count + step <= upperLimit) {
      setCount(count + step);
    }
  };

  // Decrement handler
  const decrement = () => {
    if (count - step >= lowerLimit) {
      setCount(count - step);
    }
  };

  // Reset handler
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

  // Toggle negative values
  const toggleNegative = () => {
    const newAllowNegative = !allowNegative;
    setAllowNegative(newAllowNegative);
    if (!newAllowNegative && count < 0) {
      setCount(0);
    }
  };

  const isAtLimit = count === upperLimit || count === lowerLimit;
  const isAtUpperLimit = count >= upperLimit;
  const isAtLowerLimit = count <= lowerLimit;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#2d3748', marginBottom: '8px', fontWeight: '700' }}>
            ⚛️ React Counter App
          </h1>
          <p style={{ fontSize: '1rem', color: '#718096', fontWeight: '400' }}>
            Master State Management & Event Handling
          </p>
        </div>

        {/* Counter Display */}
        <div style={{
          background: isAtLimit ? 'linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)' : 'linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%)',
          borderRadius: '16px',
          padding: '30px',
          textAlign: 'center',
          marginBottom: '30px',
          transition: 'all 0.3s ease',
          border: isAtLimit ? '3px solid #fc8181' : '3px solid transparent'
        }}>
          <span style={{
            display: 'block',
            fontSize: '0.875rem',
            color: '#718096',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '10px',
            fontWeight: '600'
          }}>
            Current Count
          </span>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: '700',
            color: isAtLimit ? '#e53e3e' : '#667eea',
            margin: '10px 0',
            transition: 'all 0.3s ease'
          }}>
            {count}
          </h2>
          {isAtLimit && (
            <span style={{
              display: 'block',
              fontSize: '0.875rem',
              color: '#e53e3e',
              fontWeight: '600',
              marginTop: '10px'
            }}>
              {count === upperLimit ? "⚠️ Upper Limit Reached" : "⚠️ Lower Limit Reached"}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px',
          marginBottom: '30px'
        }}>
          <button
            onClick={decrement}
            disabled={isAtLowerLimit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '18px 12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              cursor: isAtLowerLimit ? 'not-allowed' : 'pointer',
              background: 'linear-gradient(135deg, #fc8181 0%, #f56565 100%)',
              color: 'white',
              opacity: isAtLowerLimit ? 0.5 : 1,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>➖</span>
            <span style={{ fontSize: '0.75rem' }}>Decrement</span>
          </button>

          <button
            onClick={reset}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '18px 12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #90cdf4 0%, #63b3ed 100%)',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>🔄</span>
            <span style={{ fontSize: '0.75rem' }}>Reset</span>
          </button>

          <button
            onClick={increment}
            disabled={isAtUpperLimit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '18px 12px',
              fontSize: '0.875rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '12px',
              cursor: isAtUpperLimit ? 'not-allowed' : 'pointer',
              background: 'linear-gradient(135deg, #68d391 0%, #48bb78 100%)',
              color: 'white',
              opacity: isAtUpperLimit ? 0.5 : 1,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>➕</span>
            <span style={{ fontSize: '0.75rem' }}>Increment</span>
          </button>
        </div>

        {/* Settings Panel */}
        <div style={{
          background: '#f7fafc',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '20px'
        }}>
          <h3 style={{ fontSize: '1.25rem', color: '#2d3748', marginBottom: '20px', fontWeight: '600' }}>
            ⚙️ Settings
          </h3>

          {/* Step Size */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              color: '#4a5568',
              marginBottom: '10px',
              fontWeight: '500'
            }}>
              Step Size: <strong>{step}</strong>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => step > 1 && setStep(step - 1)}
                disabled={step <= 1}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: '2px solid #cbd5e0',
                  background: 'white',
                  color: '#4a5568',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  cursor: step <= 1 ? 'not-allowed' : 'pointer',
                  opacity: step <= 1 ? 0.4 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max="5"
                value={step}
                onChange={handleStepChange}
                style={{
                  flex: 1,
                  padding: '10px',
                  fontSize: '1rem',
                  border: '2px solid #cbd5e0',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#2d3748'
                }}
              />
              <button
                onClick={() => step < 5 && setStep(step + 1)}
                disabled={step >= 5}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: '2px solid #cbd5e0',
                  background: 'white',
                  color: '#4a5568',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  cursor: step >= 5 ? 'not-allowed' : 'pointer',
                  opacity: step >= 5 ? 0.4 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Toggle */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}>
              <div style={{ position: 'relative', marginRight: '12px' }}>
                <input
                  type="checkbox"
                  checked={allowNegative}
                  onChange={toggleNegative}
                  style={{ display: 'none' }}
                />
                <div style={{
                  width: '50px',
                  height: '26px',
                  background: allowNegative ? '#667eea' : '#cbd5e0',
                  borderRadius: '34px',
                  transition: 'background 0.3s ease',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '3px',
                    top: '3px',
                    transform: allowNegative ? 'translateX(24px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease'
                  }}></div>
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: '#4a5568', fontWeight: '500' }}>
                Allow Negative Values
              </span>
            </label>
          </div>

          {/* Info Box */}
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '15px',
            borderLeft: '4px solid #667eea'
          }}>
            <p style={{ fontSize: '0.875rem', color: '#4a5568', marginBottom: '8px' }}>
              <strong>Range:</strong> {lowerLimit} to {upperLimit}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#4a5568', margin: 0 }}>
              <strong>Step:</strong> {step}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '0.875rem', color: '#718096' }}>
            Built with React • Demonstrates useState & Event Handling
          </p>
        </div>
      </div>
    </div>
  );
}