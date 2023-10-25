import TopicList from "./components/Sidebar/TopicList";
import TopicContent from "./components/Content/TopicContent";
import { useState } from "react";
import { CONTENT_MAP, TOPIC_LIST } from "./data";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    const onSelectTopic = (topic) => {
        console.log('topic', topic)
        setSelectedTopic(topic);
    };

    return (
        <div className="app">
            <TopicList sections={TOPIC_LIST} onSelectTopic={onSelectTopic} />
            <TopicContent selectedTopic={selectedTopic} content={CONTENT_MAP[selectedTopic]} />
        </div>
    );
}

export default App;
