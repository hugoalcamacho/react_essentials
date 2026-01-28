import CoreConcepct from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepcts() {
    return (<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepct key={conceptItem.title} {...conceptItem} />)}
        </ul>
    </section>);
}