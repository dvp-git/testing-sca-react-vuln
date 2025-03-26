import './App.css';
import marked from "marked";

function App() {
  const markdownText = "<img src=x onerror=alert('XSS') />";
  const html = marked(markdownText);  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	<h1>Marked XSS Demo</h1>
	<div dangerouslySetInnerHTML={{ __html:html }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
