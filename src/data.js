export const TOPIC_LIST = [
    {
        title: 'HTML',
        subtitle: {
            tier_1: 'Basic. Tier 1',
            tier_2: 'Competent. Tier 2',
            tier_3: 'Proficient. Tier 3',
            tier_4: 'Expert. Tier 4',
        },
        topics: {
            tier_1: ['HTML document structure', 'Common HTML tags', 'JS, CSS and image assets usage', 'Primitive HTML layouts'],
            tier_2: ['All HTML tags and proper semantics usage', 'Media elements (audio, video)', 'Meta tags', 'Common HTML layouts (responsive, cross-browser)', 'Basic Accessability'],
            tier_3: ['HTML forms, input types, attributes, built-in validations', 'Custom HTML attributes', 'Advanced embedded media (iframes, progressive images, cross-platform videos)', 'SVG' , 'Advanced Accessibility', 'Basic SEO (indexing, robots.txt)'],
            tier_4: ['Shadow DOM'],
        },
    },
    {
        title: 'CSS',
        subtitle: {
            tier_1: 'Basic. Tier 1',
            2: 'Competent. Tier 2',
            tier_3: 'Proficient. Tier 3',
            4: 'Expert. Tier 4',
        },
        topics: {
            tier_1: ['CSS structure', 'Common CSS properties'],
            tier_2: ['Understanding box model', 'Positioning', 'User agent styles', 'Selector specificity', 'Basic media queries (viewport size, printing)', 'Pseudo-elements and -classes'],
            tier_3: ['Structural selectors directive', 'Units', 'Custom fonts', 'Flexbox', 'Preprocessors', 'CSS methodology (BEM or any other)', 'Overflow, z-index', 'Advanced media queries (dpi, screen orientation and type)'],
            4: ['Animations (transform, keyframes, animation)', 'Grids', 'Variables', 'Functions', 'Filters, shadows, gradients', 'Stacking Context'],
        },
    },
    {
        title: 'JavaScript',
        subtitle: {
            tier_2: 'Basic. Tier 2',
            tier_3: 'Competent. Tier 3',
            4: 'Proficient. Tier 4',
            tier_5:  'Expert. Tier 5',
            6: 'Master. Tier 6',
        },
        topics: {
            tier_2: ['Data types (primitive, reference types)', 'General operators', 'Basic control structures (if, for)', 'Basic DOM lookup and event attaching'],
            tier_3: ['Variable scopes and hoisting', 'DOM manipulations & best practices', 'Common arrays and object methods', 'Arrow functions', 'Destructuring, spread syntax and rest parameters', 'Classes', 'All control and loop structures (switch, while, try catch, etc)', 'Debugging', 'Basic XHR (methods, JSON)'],
            4: ['Context', 'Prototyping chain', 'Advanced Events management (custom events, propagation, attaching/detaching, triggering)', 'Date object', 'Regular Expressions', 'Map, WeakMap, Set, WeakSet', 'Callbacks, promises, asycn/await', 'Canvas', 'Functional programming approach and built-in methods', 'JSDoc syntax'],
            tier_5:  ['Error handling and creation',
                'Advanced XHR (events, headers, settings, form data)',
                'Timezones, date localization with Intl, date libraries (Luxon, date.js, etc)',
                'Translation (server- vs client-side, static vs dynamic, key/message formats)',
                'Recursion',
                'Closures',
                'Event loop (micro, macro tasks)',
                'Observables',
                'Web & Service Workers',
                'Web Sockets',
                'Basic data structures (list, linked list, queue, stack, tree) ',
                'OOP in JS (Polymorphism, Encapsulation, Inheritance)',
                'Creating & designing modules, module types (ESM, CommonJS, UMD)'
            ],
            6: ['Generators', 'Advanced data structures (binary tree, graph)', 'Localization (ECMA-402 (Intl), i18n (pluralization, formats, RTL))']
        },
    },
    {
        title: 'Browser Platform',
        subtitle: {
            tier_3: 'Basic. Tier 3',
            4: 'Competent. Tier 4',
            tier_5:  'Proficient. Tier 5',
        },
        topics: {
            tier_3: ['Cookies', 'LocalStorage, SessionStorage'],
            4: ['Geolocation', 'History', 'Fetch', 'Fullscreen', 'CORS, CSP', 'HTTP (flow, methods, status codes)'],
            tier_5:  ['Push Notifications', 'Web camera', 'HTTP caching & ETag', 'HTTPS (TLS, keys, certificates)'],
        },
    },
    {
        title: 'Performance',
        subtitle: {
            tier_3: 'Basic. Tier 3',
            4: 'Competent. Tier 4',
            6: 'Proficient. Tier 6',
        },
        topics: {
            tier_3: ['Assets concatenation & minification', 'Image optimization (deteremening the right format, compression rate)', 'SVG vs. images', 'Sprites'],
            4: ['Loading strategies (async, defer, preload, prefetch, lazy images)', 'Responsive images', 'Caching', 'Critical rendering', 'CSS performance (repaint, reflow, filters, resizing, heavy styling)'],
            6: ['JavaScript performance optimisations', 'Garbage collection', 'Profiling', 'Web Vitals optimization'],
        },
    },
    {
        title: 'Tools',
        subtitle: {
            tier_2: 'Basic. Tier 2',
            tier_3: 'Competent. Tier 3',
            4: 'Proficient. Tier 4',
            tier_5:  'Expert. Tier 5',
            tier_7:  'Master. Tier 7',
        },
        topics: {
            tier_2: ['Basic DevTools usage (Elements tab)', 'CSS frameworks (Bootstrap or analog)', 'Graphic software (Photoshop, Sketch, Figma, etc)', 'Basic Git & Git flow'],
            tier_3: ['npm / yarn', 'Templating (Handlebars, Pug, etc.)', 'Basic UNIX terminal commands (file operations, superuser actions, permissions, chmod)'],
            tier_4:  ['Bundlers (webpack, etc)', 'Babel', 'Lighthouse', 'Advanced DevTools', 'TypeScript basics (types, interfaces)', 'Component libraries (Material, Paper, etc)', 'Advanced Git (cherrypick, rebase, reset, reflog)', 'Unit testing tools (Karma, Jasmine, Jest, etc)', 'Configuring code formating and linting tools'],
            tier_5:  ['Docker CLI (image pull/push, run image, execute command in container), basic understanding of Dockerfile', 'GraphQL'],
            tier_7:  ['Advanced TypeScript', 'Basic CD setup (Jenkins, Travis, TeamCity, etc)', 'Reporting tools', '"Dockerfile syntax', 'Docker Compose"'],
        },
    },
    {
        title: 'Patterns & Algorithms',
        subtitle: {
            tier_5:  'Basic. Tier 5',
            6: 'Competent. Tier 6',
            tier_7:  'Proficient. Tier 7',
        },
        topics: {
            tier_5:  ['Singleton', 'Factory', 'Facade', 'Decorator', 'Builder', 'Understanding of MVC (MVVM) architecture and frameworks', 'Functional programming patterns (purity, HOF, currying, compose)', 'Memoization', 'Hash functions', 'Basic anti-patterns (Spaghetti Code, Dead Code)', 'Basic sorting and searching algorithms', 'Complexity (Big-O notation)'],
            6: ['Mediator', 'Adapter', 'Proxy', 'Chain of responsibility', 'Observer', 'Visitor', 'Dynamic Programming approaches', 'Advanced anti-patterns (ex. Golden Hammer, God Class/Object, Anchor Code)'],
            tier_7:  ['Complexity (Theta, Omega notations)', 'Data structures algorithms', 'Greedy Algorithms, Divide and Conquer', 'Advanced algorithms (ex. Natural Merge Sort, Quicker Sort, Sorting Network, Greedy Algorithms Problems (Activity Selection, Huffman Coding, Dijkstra etc.))'],
        },
    },
    {
        title: 'General skills',
        subtitle: {
            tier_2: 'Basic. Tier 2',
            tier_4:  'Competent. Tier 4',
            tier_5:  'Proficient. Tier 5',
            6: 'Expert. Tier 6',
            tier_7:  'Expert. Tier 7',
        },
        topics: {
            tier_2: ['DRY principle', 'Basics of ticket management software (i.e., Jira or Redmine)'],
            tier_4:  ['KISS and YAGNI principles',
                'Single responsibility principle',
                'Generic understanding of refactoring',
                'Scrum basics: roles, meetings, processes, artifacts',
                'Authentication & authorization (concepts, approaches (JWT, Basic, Bearer, Cookie))',
                '"Security (Broken Authentication',
                'Sensitive Data Exposure',
                'Broken Access Control',
                'Security Misconfiguration',
                'Cross-Site Scripting (XSS))"',
                'Unit testing basics (common testing approaches and best practices (AAA pattern, fake & mock objects), qualities of good unit test, signs of hard to test code)'],
            tier_5:  ['Understanding of Work Breakdown Structure (WBS) concept and hierarchy of software requirements: general requirements, epics (or WBS level 1 chunks), user stories, sub-tasks. Able to convert requirements into programing tasks.',
                'Non-functional requirements',
                'Understanding of what frameworks are, what are they needed for and how they work',
                'Basic REST API design principals',
                'Code\'s low coupling, high cohesion',
                'Undestands code "bad smells", knows most common way to fight them (extract method, extract constant, extract interface)',
                'Project documentation creation (Development process description, internal documents (how-tos, known issues, workarounds), release notes, disaster recovery plan, maintenance document, etc)',
                'Understanding of what Functional and Design Specifications are',
                'In common with Continuous Integration and Delivery concepts',
                'Integration and E2E testing',
                'OAuth',
                'Rest of SOLID'],
            6: ['Benefits of going cloud and common building blocks for any of top-3 cloud providers (i.e., EC2, S3 and RDS for AWS)',
                'UML principles (depencency, composition/aggregation, inheritance, cardinality) and tools (Lucidcharts, Draw.io, Visio, PlantUML)',
                'Understanding of what Deployment Specification is',
                'Client-side rendering vs server-side rendering',
                'Test Driven Development concepts'],
            tier_7:  ['Layered Architecture',
                'Microservices Architecture',
                'Micro Frontend',
                'Architecture review process',
                'Able to break down General Requirements into epics and user stories, create and present a high-level WBS',
                'Critical Path Method']
        },
    },
    {
        title: 'Developer Qualities',
        subtitle: {
            tier_2: 'Basic. Tier 2',
            tier_4:  'Competent. Tier 4',
            tier_5:  'Proficient. Tier 5',
            tier_6:  'Expert. Tier 6',
            tier_7:  'Master. Tier 7',
        },
        topics: {
            tier_2: ['Following the existing codestyle of a project'],
            tier_4:  ['Code quality (clean, commented, following best practices)', 'Providing tasks with accurate estimates', 'Able to clarify and justify decisions, ideas and solutions taken'],
            tier_5:  ['Providing features with accurate estimates', 'Autonomous in terms of development (able to find and deliver solutions to problems on their own)', 'Can conduct code reviews and provide useful and understandable feedback'],
            tier_6:  ['Can set up, drive, improve, and control code quality (code review, code style, approaches, etc) or any other practices within a team', 'Can predict impact of changes on application'],
            tier_7:  ['Able to discuss software requirements with the customer and team members, propose changes']
        },
    },
];

export const CONTENT_MAP = {
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