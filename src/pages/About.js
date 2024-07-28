import React from 'react';
import './About.css';

const About = ({ isDarkMode }) => (
  <div className={`about-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <table>
	<tr>
	<td>
	<h3>About Us</h3> 
	</td>
	</tr>
	<tr>
	<td>
 <img src="uc.png" width="333"/>
     </td>
	 </tr>
	 </table>
  </div>
);

export default About;
