import TopicList from "./components/Sidebar/TopicList";
import TopicContent from "./components/Content/TopicContent";
import { useState } from "react";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    const sections = [
        {
            title: 'HTML',
            topics: ['Тема 1.1', 'Тема 1.2', 'Тема 1.3'],
        },
        {
            title: 'CSS',
            topics: ['Тема 2.1', 'Тема 2.2'],
        },
        {
            title: 'JavaScript',
            topics: ['Тема 3.1', 'Тема 3.2'],
        },
        {
            title: 'Browser Platform',
            topics: ['Тема 4.1', 'Тема 4.2'],
        },
        {
            title: 'Performance',
            topics: ['Тема 5.1', 'Тема 5.2'],
        },
        {
            title: 'Tools',
            topics: ['Тема 6.1', 'Тема 6.2'],
        },
        {
            title: 'Patterns & Algorithms',
            topics: ['Тема 7.1', 'Тема 7.2'],
        },
        {
            title: 'General skills',
            topics: ['Тема 8.1', 'Тема 8.2'],
        },
        {
            title: 'Developer Qualities',
            topics: ['Тема 9.1', 'Тема 9.2'],
        },
    ];

    const contentMap = {
        'Тема 1.1': 'Вміст для Теми 1.1',
        'Тема 1.2': 'Вміст для Теми 1.2',
        'Тема 1.3': 'Вміст для Теми 1.3',
        'Тема 2.1': 'Вміст для Теми 2.1',
        'Тема 2.2': 'Вміст для Теми 2.2',
        'Тема 3.1': 'Вміст для Теми 3.1',
        'Тема 3.2': 'Вміст для Теми 3.2',
        'Тема 4.1': 'Вміст для Теми 4.1',
        'Тема 4.2': 'Вміст для Теми 4.2',
        'Тема 5.1': 'Вміст для Теми 5.1',
        'Тема 5.2': 'Вміст для Теми 5.2',
        'Тема 6.1': 'Вміст для Теми 6.1',
        'Тема 6.2': 'Вміст для Теми 6.2',
        'Тема 7.1': 'Вміст для Теми 7.1',
        'Тема 7.2': 'Вміст для Теми 7.2',
        'Тема 8.1': 'Вміст для Теми 8.1',
        'Тема 8.2': 'Вміст для Теми 8.2',
        'Тема 9.1': 'Вміст для Теми 9.1',
        'Тема 9.2': 'Вміст для Теми 9.2',
    };

    const onSelectTopic = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <div className="app">
            <TopicList sections={sections} onSelectTopic={onSelectTopic} />
            <TopicContent selectedTopic={selectedTopic} content={contentMap[selectedTopic]} />
        </div>
    );
}

export default App;
