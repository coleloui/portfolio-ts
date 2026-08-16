import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #0d0221;
    --bg-elevated: #150a2e;
    --bg-card: #1a0f36;
    --border: #2d1b54;
    --border-hover: #3d2570;
    --text-primary: #f1eaff;
    --text-secondary: #a89cc8;
    --text-muted: #6b5d94;
    --accent: #ff2e97;
    --accent-dim: #d61f7d;
    --accent-soft: rgba(255, 46, 151, 0.1);
    --accent-glow: rgba(255, 46, 151, 0.45);
    --accent-cyan: #00e5ff;
    --accent-cyan-soft: rgba(0, 229, 255, 0.1);
    --accent-cyan-glow: rgba(0, 229, 255, 0.4);
    --mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
    --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* backwards-compat aliases */
    --primary: var(--accent);
    --white: var(--text-primary);
    --secondary: var(--bg);
  }

  html, body, #root {
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: var(--bg);
    color: var(--text-primary);
    font-family: var(--sans);
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image:
      radial-gradient(ellipse 70% 50% at 15% -5%, rgba(255, 46, 151, 0.07) 0%, transparent 60%),
      radial-gradient(ellipse 55% 40% at 85% 105%, rgba(0, 229, 255, 0.05) 0%, transparent 60%);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--border-hover);
    border-radius: 100px;
    &:hover {
      background: var(--text-muted);
    }
  }
`;

export default GlobalStyles;
