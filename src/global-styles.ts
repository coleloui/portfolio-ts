import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #0a0e14;
    --bg-elevated: #10151d;
    --bg-card: #131920;
    --border: #232b36;
    --border-hover: #333f4f;
    --text-primary: #e8edf3;
    --text-secondary: #8b96a5;
    --text-muted: #5a6472;
    --accent: #5eead4;
    --accent-dim: #2dd4bf;
    --accent-soft: rgba(94, 234, 212, 0.1);
    --accent-glow: rgba(94, 234, 212, 0.35);
    --mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
    --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* backwards-compat aliases */
    --primary: var(--accent);
    --white: var(--text-primary);
    --secondary: var(--bg);
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
    background-image:
      radial-gradient(ellipse 80% 50% at 20% -10%, rgba(94, 234, 212, 0.06) 0%, transparent 60%),
      radial-gradient(ellipse 60% 40% at 80% 110%, rgba(94, 234, 212, 0.04) 0%, transparent 60%);
    background-attachment: fixed;
    color: var(--text-primary);
    font-family: var(--sans);
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
