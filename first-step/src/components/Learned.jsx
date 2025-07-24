import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Learned() {
  return (
    <div className="learned-body">
      <Header />

      <div className="content">
        <h2>What I Learned - Tech Hub</h2>

        <div className="week-section">
          <h3>Week 1 and 2</h3>
          <ul>
            <li><b>JavaScript:</b> arrays, filtering, object conversion, string/char splitting</li>
            <li><b>React:</b> components, hooks, file setup</li>
            <li><b>GitHub:</b> repo creation, pushing via GitHub Desktop</li>
            <li><b>Vite & SWC:</b> fast build tools & transpiler basics</li>
            <li><b>Web:</b> GET vs POST, HTML tags, internal CSS centering</li>
            <li><b>React:</b> some hooks useState and useEffect and useContext</li>
          </ul>
        </div>

        <div className="week-section">
          <h3>Week 3</h3>
          <ul>
            <li>How to use async/await to handle asynchronous API calls.</li>
            <li>How to use .then() to handle promises in Axios.</li>
            <li>How JSON.parse() works and how data comes from the backend.</li>
            <li>How to style React components using inline styles.</li>
            <li>How to style components using external CSS files.</li>
            <li>How to use class names to apply styles in React.</li>
            <li>Introduction to Material UI (MUI) for building UI components.</li>
            <li><b>React:</b> how to use props and state effectively</li>
            <li><b>React:</b> how to manage component lifecycle with useEffect</li>
            <li><b>React:</b> how to create custom hooks for reusable logic</li>
            <li><b>React Router:</b> how to implement navigation in a React app</li>
            <li><b>Axios:</b> how to make API calls and handle responses</li>
            <li><b>Testing:</b> how to write unit tests for React components</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Learned;
