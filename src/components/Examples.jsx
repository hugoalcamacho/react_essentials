import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {

    const [selectedTopics, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (<Section id="examples" title="Examples">
        <Tabs buttons={<>
            <TabButton isSelected={selectedTopics === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopics === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopics === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopics === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>}>{!selectedTopics ? <p>Please select a topic.</p> : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopics].title}</h3>
            <p>{EXAMPLES[selectedTopics].description}</p>
            <pre>{EXAMPLES[selectedTopics].code}</pre>
        </div>)}</Tabs>
    </Section>);
}