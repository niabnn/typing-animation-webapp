// src/components/ThemeToggleButton.jsx
export default function ThemeToggleButton() {
    const toggleTheme = () => {
      document.body.classList.toggle("bg-black");
      document.body.classList.toggle("text-white");
    };
  
    return (
      <button id="toggle-theme" onClick={toggleTheme} className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-8 w-8 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a7 7 0 00-7 7c0 2.82 1.64 5.61 4 6.93V18a1 1 0 001 1h4a1 1 0 001-1v-2.07c2.36-1.32 4-4.11 4-6.93a7 7 0 00-7-7zm-3 18h6m-6 2h6"
          />
        </svg>
      </button>
    );
  }
  