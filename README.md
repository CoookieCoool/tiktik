# ⚛️ React Counter App

## 📌 Project Objective
To develop a simple and interactive counter application using React that demonstrates:
- State management using `useState`
- Event handling
- Conditional rendering

This project aims to build a strong foundation in React's core concepts through practical implementation.

## 📄 Description
This counter app provides an intuitive interface for incrementing, decrementing, and resetting a counter value. Built as part of the MERN Stack Full Stack Development program, it showcases React fundamentals with modern UI/UX design. Users can customize the step size, toggle negative value support, and their preferences persist across sessions using localStorage.

**Problem Solved:** Beginner React learners often face difficulty in understanding how state and event handling work together in real-time. This project solves that by offering a hands-on experience in handling state changes with user interaction.

## 🔗 Links
- **GitHub Repository:** `[Add your GitHub repo link here]`
- **Live Demo:** `[Add your Vercel/Netlify deployment link here]`

## 🛠 Technologies Used
- **React** 18.x
- **JavaScript** (ES6+)
- **HTML5**
- **CSS3** (with Flexbox & Grid)
- **localStorage API** for persistence

## ⚙️ Features

### Core Features ✅
- ✅ **Display Counter Value** - Large, clear display of current count
- ✅ **Increment Button** - Adds step value to counter
- ✅ **Decrement Button** - Subtracts step value from counter
- ✅ **Reset Button** - Returns counter to zero
- ✅ **Upper & Lower Bounds** - Counter limited to range of -10 to 10 (or 0 to 10)
- ✅ **Button Disablement** - Buttons automatically disable when bounds are reached
- ✅ **Custom Step Size** - User can set step increment value (1-5)
- ✅ **Negative Toggle** - Option to allow/disallow negative values

### Bonus Features 🌟
- 🎨 **Dynamic CSS Styling** - Color changes when limits are reached
- ✨ **Smooth Animations** - Visual feedback on all interactions
- 💾 **localStorage Persistence** - Counter value saved and restored on page reload
- 🎯 **Modern UI/UX** - Clean, gradient design with responsive layout
- 📱 **Mobile Responsive** - Works seamlessly on all device sizes
- ♿ **Accessibility** - ARIA labels and keyboard navigation support

## 🚀 How to Run the App Locally

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

```bash
# 1. Clone the repository
git clone [your-repository-url]

# 2. Navigate to project directory
cd counter-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm start

# 5. Open your browser and visit
http://localhost:3000
```

The app will automatically reload when you make changes to the code.

## 📸 Screenshots

### Normal State
![Counter at 5](screenshots/normal-state.png)
*Counter displaying a value within normal range*

### Upper Limit Reached
![Counter at 10](screenshots/upper-limit.png)
*Visual feedback when upper limit is reached*

### Lower Limit Reached
![Counter at -10](screenshots/lower-limit.png)
*Visual feedback when lower limit is reached*

### Settings Panel
![Settings](screenshots/settings.png)
*Customizable step size and negative value toggle*

## 🧪 Sample Input & Output

### Scenario 1: Basic Increment
- **Input:** Click "Increment" button (Step = 1, Count = 5)
- **Output:** Count = 6
- **Behavior:** Counter increases by step value with smooth animation

### Scenario 2: Custom Step Size
- **Input:** Set Step = 3, Click "Increment" (Count = 2)
- **Output:** Count = 5
- **Behavior:** Counter increases by 3

### Scenario 3: Upper Limit
- **Input:** Click "Increment" (Step = 1, Count = 10)
- **Output:** Count remains 10
- **Behavior:** Increment button becomes disabled, counter turns red, warning message appears

### Scenario 4: Lower Limit with Negative Disabled
- **Input:** Click "Decrement" (Step = 1, Count = 0, Allow Negative = OFF)
- **Output:** Count remains 0
- **Behavior:** Decrement button becomes disabled

### Scenario 5: Reset Function
- **Input:** Click "Reset" (Count = 7)
- **Output:** Count = 0
- **Behavior:** Counter returns to zero instantly

### Scenario 6: Toggle Negative Values
- **Input:** Toggle "Allow Negative" OFF (Count = -5)
- **Output:** Count = 0
- **Behavior:** Counter automatically resets to 0 when negative values are disabled

## 💡 Challenges Faced & Solutions

### Challenge 1: Managing Multiple State Variables
**Problem:** Coordinating multiple pieces of state (count, step, allowNegative)  
**Solution:** Used separate `useState` hooks for each state variable, making the code modular and easy to manage

### Challenge 2: Preventing Counter Beyond Bounds
**Problem:** Ensuring counter doesn't exceed upper/lower limits  
**Solution:** Implemented conditional checks in increment/decrement functions before updating state

### Challenge 3: Persistent State Across Sessions
**Problem:** Counter resets to 0 on page reload  
**Solution:** Used `localStorage` with `useEffect` hooks to save and restore all user preferences

### Challenge 4: Dynamic Limit Based on Toggle
**Problem:** Lower limit changes based on allowNegative setting  
**Solution:** Calculated `lowerLimit` dynamically using ternary operator: `allowNegative ? -10 : 0`

### Challenge 5: Smooth UI Feedback
**Problem:** State changes felt abrupt  
**Solution:** Added CSS transitions and keyframe animations for smooth visual feedback

## 📚 React Concepts Demonstrated

1. **useState Hook** - Managing component state for counter, step, and settings
2. **useEffect Hook** - Side effects for localStorage operations
3. **Event Handling** - onClick handlers for buttons and onChange for inputs
4. **Conditional Rendering** - Showing/hiding warning messages based on state
5. **Conditional Styling** - Dynamic CSS classes based on counter value
6. **Props & State** - Understanding data flow in React components
7. **Component Lifecycle** - Loading and saving data at appropriate times

## 📁 Project Structure

```
counter-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main component with all logic
│   ├── App.css         # Styling with animations
│   └── index.js        # Entry point
├── package.json        # Dependencies
└── README.md          # Documentation
```

## 🎯 Key Code Snippets

### State Management
```javascript
const [count, setCount] = useState(0);
const [step, setStep] = useState(1);
const [allowNegative, setAllowNegative] = useState(true);
```

### Increment Function with Bounds Check
```javascript
const increment = () => {
  if (count + step <= upperLimit) {
    setCount(count + step);
  }
};
```

### localStorage Persistence
```javascript
useEffect(() => {
  localStorage.setItem("counterValue", count);
}, [count]);
```

## 🔮 Future Enhancements
- Multiple independent counters
- Counter history/statistics
- Keyboard shortcuts (↑/↓ arrows)
- Sound effects on button clicks
- Dark mode toggle
- Export counter data

## 👨‍💻 Author
**[Your Name]**  
MERN Stack Full Stack Development Program  
July 2025 Batch

## 📅 Project Timeline
- **Start Date:** [Your start date]
- **Completion Date:** [Your completion date]
- **Submission Date:** August 16, 2025

## 📝 License
This project is created for educational purposes as part of the MERN Stack program.

## 🙏 Acknowledgments
- Instructor: Miss Shubhangi Sonker
- React Documentation
- MERN Stack Full Stack Development Program

---

**Built with ❤️ using React**
