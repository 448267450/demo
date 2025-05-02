import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById('root'));

let text = "Astral's Learning sessions";
root.render(
    <div>
        {text}
        
    </div>
);