import React from 'react';

const Blogs = () => {
    return (
        <div>
            
            <h1>Blogs </h1>
            <hr></hr>
            <div className='bg-white my-5'>
            <h3>What is Symantic Tag</h3>
            Symantic means something that is meaningful. In previous version of html some tag are not user friendly ,also not SEO friendly. HTML5 brings the concept of Symantic Tag. From the symanic tag a normal user can understand easily about tag and their task. such as Header tag use to keep header  of a website. Search Engine can easily recognize that this field is used for header/heading. nav tag are used for keep navigation.
            some most used symantic tag is:
            <ul>
                <li>Header</li>
                <li>Nav</li>
                <li>Section</li>
                <li>Article</li>
                <li>Main</li>
                <li>Summary</li>
                <li>Footer</li>

            </ul>
        </div>

        <div className='bg-white my-5'>
            <h3>What is contex API</h3>
            <article>
                The Context API is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application.The React Context API is a way for a React app to effectively produce global variables that can be passed around.The React context api is safe to use in production with the version 16.3 or latest. The reason for adding context api is to avoid the passing of props if there is a chain of children components.

                Without the use of context api, we have to pass the props through all the intermediate components. The other alternative solution is to use third party library such as Redux for maintaining a central store.
            </article>
            </div>
        </div>
    );
};

export default Blogs;