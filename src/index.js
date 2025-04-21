import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>Hi Astral!</div>
);

fetch('/jian/subscriptions/recommended_collections')
    .then(res => res.json())
    .then(value => console.log(value));


fetch('/zhi/news/latest')
    .then(res => res.json())
    .then(value => console.log(value));