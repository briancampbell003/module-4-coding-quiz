# module-4-coding-quiz
## Purpose
This project required using HTML, CSS and Javascript to build from scratch an interactive quiz that would test a student's knowledge of Javascript fundamentals. I used simple CSS styling and a fairly sparse html index, spending most of my time in the js file. I approached this project piece-by-piece in a linear fashion, making sure the landing page had a Start Quiz button that worked, that the Start Quiz button would start a timer and lead to the first question, which when answered led to the next question, and so forth.

## Coding Process and Obstacles
I started with the HTML framework and jumped straight into the Javascript. I encountered a major roadblock in my Javascript while trying to write the code for the questions generator function. I had initially tried using multiple arrays because I had wanted to use as little code as possible, and I thought that my declaring all my questions and answers in arrays, I could elegantly generate them successively using something like QuestionArray[i][x] where i would reference the question, and x[0-3] would reference the answer choices.

Ultimately I settled for partial iteration, looping through the questions while manually making reference to the answer choices. It took me awhile to allow the principle of "make it work" take precedence over my desire for perfect efficiecy and elegance, and I had several other lesser roadblocks before completing the project (most significantly storing an array to local storage and parsing it correctly for High Score display), but I am mostly satisified with my final product.

## Future developments
I plan on improving this coding quiz in the future. Currently, when a player calls the GameOver function by answering every question, the timer apparently continues in the background and calls the GameOver function again upon reaching zero. This creates a minor annoyance when the initials form and SaveScore button randomly re-appear on the High Scores page. I hope to iron out this problem in future versions of the quiz.

A second functional improvement that I would like to make also involves the High Scores page. I would like to have my website read the values for the second key in my hiScore objects to let my code display them in descending order. Both of these functional goals for the Coding Quiz are within my reach, but will require more time and attention.

I may also further stylize this webpage while generally keeping the minimal aesthetic.

## Credits
This project came almost entirely from my own faculties, although I would find myself frequently consulting resources like W3Schools and MDN Web Docs for reference. I also benefitted from my tutor Jalen helping me fix my JSON parse and stringify operations in order to correctly display the high scores.



Here is a screenshot:
![screenshot of coding quiz webpage](demo.png)

I hope you appreciate this Coding Quiz, you can quiz yourself at the [deployed GitHub webpage.](https://briancampbell003.github.io/module-4-coding-quiz)