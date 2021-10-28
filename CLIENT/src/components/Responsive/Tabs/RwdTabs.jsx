import React from 'react';
import RwdIntro from './RwdIntro';
import RwdProgress from './RwdProgress';
import RwdFormerStudent from './RwdFormerStudent';
import { useState } from 'react';

function RwdTabs(props) {
    const [contentOne, setContentOne] = useState(false);
    const [contentTwo, setContentTwo] = useState(false);
    const [contentThree, setContentThree] = useState(false);
    return (
        <div className="rwd-tabs">
            <div className="tabs__title">
                <div className={contentOne ? "title title-active" : "title"} onClick={() => {
                      setContentOne(!contentOne);
                      setContentTwo(false);
                      setContentThree(false);
                }}>
                    <span>CyberSoft là ai?</span>
                    <i className={contentOne ? "fa fa-angle-down fa-rotate" : "fa fa-angle-down"}></i>
                </div>
                <div className={contentOne ? "title__content title__content-active" : "title__content"}>
                    <RwdIntro />
                </div>
            </div>

            <div className="tabs__title">
                <div className={contentTwo ? "title title-active" : "title"} onClick={() => {
                    setContentTwo(!contentTwo)
                    setContentOne(false);
                    setContentThree(false);
                }}>
                    <span>Học tập tại CyberSoft</span>
                    <i className={contentTwo ? "fa fa-angle-down fa-rotate" : "fa fa-angle-down"}></i>
                </div>
                <div className={contentTwo ? "title__content title__content-active" : "title__content"}>
                    <RwdProgress />
                </div>
            </div>

            <div className="tabs__title">
                <div className={contentThree ? "title title-active" : "title"} onClick={() => {
                     setContentThree(!contentThree)
                     setContentOne(false);
                     setContentTwo(false);
                }}>
                    <span>Cựu học viên</span>
                    <i className={contentThree ? "fa fa-angle-down fa-rotate" : "fa fa-angle-down"}></i>
                </div>
                <div className={contentThree ? "title__content title__content-active" : "title__content"}>
                    <RwdFormerStudent />
                </div>
            </div>
        </div>
    );
}

export default RwdTabs;