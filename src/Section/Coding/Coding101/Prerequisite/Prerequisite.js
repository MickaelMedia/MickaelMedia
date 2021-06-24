import React from 'react';
import Picture from './Ressources/Picture1.jpg';

function Prerequisite() {
    return (
        <div>
            <article>
                <h3>
                    Getting Started
                </h3>
                <p>
                    Feel Like getting started with coding. You are going to need a few things to be honest:
                </p>
                <ol>
                    <li>1-Computer</li>
                    <li>2-Code editing software (Visual Studio)</li>
                    <li>3-Books or a Source of information to learn coding from (youtube,  Codeacademy or College course).</li>
                    <li>4-Patience.</li>
                </ol>
                <p>
                    First Up you are going to need access to a computer. Some types of coding need compiling and interpreting, but for website creation that is not the case. That means that we do not need a super expensive computer. Honestly, your school computer or a 600$ USD laptop is going be more then enough for getting into HTML, CSS, and JS.
                </p>
                <p>
                    Second Up, we are going to choose our editing software. I recommend Visual Studio because I learned how to code with it, so I am biased. You can learn how to code with another software. The only thing I recommend is researching how easy a coding editor is to use and how popular the coding software is. If you realize that there are few guides for your editing software, then it might not be the best idea to use that code editor. After downloading a coding software, you need to make a folder where your projects are going to be saved.  Single documents do not need planning but when you start making multiple folders and files for a document you must follow a tree like organisation where your main file is the root and it expand towards precise section called branches:
                </p>
                <img src={Picture}/>
                <p>
                    Thirdly, you need to create your own library of information. You can use books, videos, and websites to create a reliable source of information. A lot of web developers do tutorials on YouTube that you can follow along to learn specific things like side bars, page transition and another variable.
                </p>
                <p>
                    Lastly, reading all of this and integrating the information is going to take a lot of time. All you need to do is be consistent and have patience.  
                </p>
            </article>
        </div>
    )
}

export default Prerequisite
