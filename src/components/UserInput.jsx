export default function UserInput({ onInputChange, userInput }) {
  return (
    <section id="user-data">
      <div className="input-group">
        <p>
          <label id="user-label">initial investment</label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.initial_investment}
            onChange={(event) =>
              onInputChange("initial_investment", event.target.value)
            }
          />
        </p>
        <p>
          <label id="user-label">annual investment</label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.annual_investment}
            onChange={(event) =>
              onInputChange("annual_investment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="user-label">expected return</label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.expected_return}
            onChange={(event) =>
              onInputChange("expected_return", event.target.value)
            }
          />
        </p>
        <p>
          <label id="user-label">duration</label>
          <input
            id="user-input"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
