import React from 'react';
type buttonProps = {
  title:string,
  button:string
}
const Button = ({title,button}:buttonProps) => {
  return (
    <section className='z-20'>
      <button className={`${button} `}>
     {title}
      </button>
    </section>
  );
}

export default Button;
