import React from 'react';
import './Portfolio.css';

const Portfolio = ({ isDarkMode }) => (
  <div className={`portfolio-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
  <table>
	<tr>
	<td>
    <h4>Portfolio / Projects / Examples</h4>
		</td>
	</tr>
	<tr>
	<td>
    <p>Below are some of the projects I have worked on:</p>
    <ul>
      <li><a href="http://mackey.solutions:3000">Chat Rooms Application</a> : Built with :NodeJS (Socket.io / Express / http / axios / fs)</li>
    </ul>
	     </td>
	</tr>
	<tr>
	<td>
<img src="uc.png" width="150" />
	</td>
	</tr>
	 </table>
  </div>
);

export default Portfolio;
