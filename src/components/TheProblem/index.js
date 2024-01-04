import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css'
import './styles.module.css'
export default function TheProblemCard(){
    return (
      <div class={clsx("problemBanner",styles.problemBanner)}>
         <h1 className={clsx("problemHeading",styles.problemHeading)}>The Problem</h1>
         <p class={clsx("problemText",styles.problemText)}> How do i build a cloud based SaaS? </p>
         <div className={clsx("imageContainer",styles.imageContainer)}>
              <img className={clsx("box-border rounded-sm border-none align-middle leading 6 ",styles.problemImage)} src={"/img/problem_statement.svg"} alt="The Problem Diagram"></img> 
         </div>
      </div>
    );
}