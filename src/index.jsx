import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById('root'));

let data = [{
    id: 1,
    title: 'Welcome to this study' 
}, {
    id: 2,
    title: 'Hope you can learn React well'
}, {
    id: 3,
    title: 'Feel free to ask me any questions'
}]
root.render(
    <>
        <h2>News Today</h2>
        <ul>
            {data.map((item) => {
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    </>
);