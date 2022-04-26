import React from 'react';
import react from '../images/react.png';
import js from '../images/js.png';
import php from '../images/php.png';
import bootstrap from '../images/bootstrap.png';
import sass from '../images/sass.png';
import redux from '../images/redux.png';
import firebase from '../images/firebase.png';
import html from '../images/html.png';
import css from '../images/css.png';
import word from '../images/word.png';
import excel from '../images/excel.png';
import mysql from '../images/mysql.png';
import coding from '../images/coding.png';

function Skills() {
    return (
        <div className="content-container">

            <p className="description">If you are looking for a software developer you are in the right place, and I'm so exited to get to work right this very moment.
                i am a professional at computer operating systems.</p>
            <img className="coding" src={coding} />
            <h1 className="title">What I have mastered</h1>
            <div className="grid">
                <div className="item">
                    <img className="item-img" src={react} />
                    <p className="item-title">React</p>
                    <p className="item-content">We will build a small game during this tutorial.You might be tempted to skip it because you’re not building games— but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={redux} />
                    <p className="item-title">Redux</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={js} />
                    <p className="item-title">JavaScript</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={sass} />
                    <p className="item-title">Sass</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={php} />
                    <p className="item-title">php</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={firebase} />
                    <p className="item-title">Firebase Database</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={bootstrap} />
                    <p className="item-title">Bootstrap</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={html} />
                    <p className="item-title">HTML</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={css} />
                    <p className="item-title">CSS</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>

                <div className="item">
                    <img className="item-img" src={word} />
                    <p className="item-title">Microsoft Word</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={excel} />
                    <p className="item-title">Microsoft Excel</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
                <div className="item">
                    <img className="item-img" src={mysql} />
                    <p className="item-title">MySQL</p>
                    <p className="item-content">We will build a small game during this tutorial.
                        You might be tempted to skip it because you’re not building games
                        — but give it a chance. The techniques you’ll learn in the tutorial
                        are fundamental to building any React app,</p>
                    <p className="learn-more">Learn more</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>I'm a Computer Hardware buff!</h1>
                    <p>I'v build a lot of computer desktop. By now I'm working for Naruto Center in Iraq
                        as a computer Buff!</p>
                </div>
            </div>
        </div>
    )
}

export default Skills