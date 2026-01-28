import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepct from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopics, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepct key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopics === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopics === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopics === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopics === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopics ? <p>Please select a topic.</p> : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopics].title}</h3>
            <p>{EXAMPLES[selectedTopics].description}</p>
            <pre>{EXAMPLES[selectedTopics].code}</pre>
          </div>)}
        </section>
      </main>
    </>
  );
}

export default App;
