const changeTextBtn = document.getElementById('changeTextBtn');
const articleContent = document.getElementById('articleContent');

function changeArticleContent() {
    articleContent.innerHTML = `
        <h1>Why do cats purr?</h1>
        <p>Cats purr because they have something to say, which roughly translated is “please keep still and pay attention to me.” 
        Kittens purr to persuade their mothers to keep on nursing them, and pet cats purr when they want to be stroked. The vibrations emanating from the purr certainly have a calming effect on people. Yet sick cats will also purr as a cry for help. So purring doesn’t always mean “I’m happy.” Some researchers have claimed that the vibrations from purring might help heal bone damage in an injured cat.
        And now you are a bit smarter <3 </p>
    `;
}

changeTextBtn.addEventListener('click', changeArticleContent);
