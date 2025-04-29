import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById('root'));

class Count extends React.Component {
    state = { num: 0 }

    render() {
        let { num } = this.state;
        return (
            
            <div>
                <span>{num}</span>
                <br />
                <button onClick={() => {
                    num++;
                    this.setState({ num });
                }}>Increment</button>
            </div>
        );
    }
}
root.render(
    <Count />
);