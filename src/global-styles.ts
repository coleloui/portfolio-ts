import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
	--primary: #744DA9;
	--white: #fff;
  --secondary: #404040
};

::-webkit-scrollbar{
  width: 20px;
};

::-webkit-scrollbar-track{
  background: var(---white);
};

::-webkit-scrollbar-thumb{
  /* border: 2.5px solid transparent; */
  border-radius: 100px;
  background-color: var(--primary);
  background-clip: content-box;
  /* background-image: linear-gradient(180deg,#645cff 0%, #645cff 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5); */
};

* {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--secondary);
  }
`;

export default GlobalStyles;
