import "./App.css";
import React from "react";
import {UP, DOWN} from './constants';

function App() {
	const {ipcRenderer} = window.require("electron");
	const up = () => {
    	ipcRenderer.send(UP, 'send');
	};
    const down = () => {
        ipcRenderer.send(DOWN, 'send');
    };

    return (
        <div>
            <h1>버튼</h1>
            <div>
                <button onClick={up}>up</button>
                <button onClick={down}>down</button>
            </div>
        </div>
    );
}
export default App;
