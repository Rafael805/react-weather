var React = require('react');

var About = (props) => {
   return (
      <div>
         <h1 className="text-center">About</h1>
         <p>This is a weather application built on React. Feel free to explore the weather temperatures in places around the world!</p>
         <p>
            Here are some of the tools I used:
         </p>
         <ul>
            <li>
               <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
            </li>
            <li>
               <a href="http://openweathermap.org">Open Weather Map</a> - I used the Open Weather Map API to search for weather data by city name. 
            </li>
         </ul>
     </div>
   )
};

module.exports = About;
