import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'
import './styles.module.css'
export default function TheProblemCard(){
    return (
      <div class={clsx("problemBanner",styles.problemBanner)}>
         <h1 className={clsx("problemHeading",styles.problemHeading)}>The Problem</h1>
         <p class={clsx("problemText",styles.problemText)}>How do we start a SaaS startup? How do we get it up and running? </p>
         <div className={clsx("imageContainer",styles.imageContainer)}>
              <img className={clsx("box-border rounded-sm border-none align-middle leading 6 ",styles.problemImage)} src={"/img/problem.png"} alt="The Problem Diagram"></img> 
         </div>
      </div>
    );
}