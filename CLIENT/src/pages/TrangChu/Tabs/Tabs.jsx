import React, { useState } from 'react';
import Intro from './Intro';
import Progress from './Progress';
import FormerStudent from './FormerStudent';

function Tabs(props) {
    const [tabs, setTabs] = useState(1)
    return (
        <div className="tabs">
            <div className="tabs__title">
                <div className={tabs === 1 ? "title title-active" : "title"} onClick={() => {
                    setTabs(1)
                }}>
                    CyberSoft là ai?
                </div>
                <div className={tabs === 2 ? "title title-active" : "title"} onClick={() => {
                    setTabs(2)
                }}>
                    Học tập tại CyberSoft
                </div>
                <div className={tabs === 3 ? "title title-active" : "title"} onClick={() => {
                    setTabs(3)
                }}>
                    Cựu học viên
                </div>
            </div>

            <div className="tabs__content">
                <div className={tabs === 1 ? "content content-active" : "content"}>
                    <Intro />
                </div>
                <div className={tabs === 2 ? "content content-active" : "content"}>
                    <Progress />
                </div>
                <div className={tabs === 3 ? "content content-active" : "content"}>
                    <FormerStudent />
                </div>
            </div>
        </div>
    );
}

export default Tabs;