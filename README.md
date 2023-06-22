FORMULA ONE PROJECT 

Goals of the project: 

- Practice accessing information asynchronously (using asynchronous JavaScript) from APIs and using it to update the DOM.

- Understand server communication, including how to make requests and what's returned by the fetch function.

- Differentiate between asynchronous (async) and synchronous code.

- Utilize ES6 syntax, such as destructuring and arrow functions.

- Learn about variable declarations, logical operators, callback functions, and scope.

- Explore iterators like forEach, map, and filter.

- Manipulate the DOM by adding, updating, and grabbing content, as well as implementing event listeners.


In this project, I aimed to create an app focused on Formula One racers. By fetching data from our API, we can obtain information about each racer, including their points, career, team, country, name, and image.

To achieve this, we applied our knowledge of JavaScript, HTML, CSS, and API fetching. We learned about variable usage, arrow functions, and callback functions. Additionally, we utilized scope and employed the "filter" method in our code.

The concept behind the website is simple: users input the name of a Formula One racer, and the app displays all the available information about that racer. With this in mind, I started by creating a free API called db.json. This API contains an array of objects, each representing a racer and containing their name, image, points, information, career, team, and country. To ensure a successful connection to the server, I tested the API using Postman and confirmed a 200 response.

Next, I focused on my HTML code, including the webpage title, body, and several ID classes that we can work with in our JavaScript code (using getElementById). I created a search bar with an ID and included references to the CSS and JavaScript files in my HTML.