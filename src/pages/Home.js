import React from 'react';
import './Home.css';

const Home = ({ isDarkMode }) => {
  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="left-side">
        <h3> G A Mackey Demo Server: </h3>
        <table>
          <tbody>
            <tr>
              <td valign="top">
                Welcome to my Demo Server. I use this server for research and educational purposes.
                There should be some interesting toys here in the near future. Thanks for your patience!
                <br /><br />
                <b>Services:</b>
                <ul>
                  <li> Application Development </li>
                  <li> Business Systems Analysis</li>
                  <li> SQL Development</li>
                  <li> Systems Integration </li>
                  <li> Process Mapping </li>
                  <li> Process Re-engineering</li>
                  <li> Report Development</li>
                </ul>
                <br /><br />
                <div className="contact-info">
                  <b>Contact Information:</b><br />
                  Email : <a href='mailto:mackey.va01@gmail.com'>mackey.va01@gmail.com</a><br />
                  <table>
                    <tbody>
                      <tr>
                        <td valign='middle'>
                          <a href='https://github.com/glitch64?tab=repositories'>
                            <img src="githubicon.jpg" alt="Visit My Github" title="Visit My GitHub" />
                          </a>
                        </td>
                        <td valign='middle'>
                          <a href='https://www.linkedin.com/in/g-alan-mackey-32aa42a/'>
                            <img src="linkedinicon.jpg" alt="Visit My LinkedIn" title="Visit My LinkedIn"/>
                          </a>
                        </td>
                      </tr>
					  <tr><td><img src="uc.png" width="75"/></td></tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td valign="middle" valign="top">
                <img src="technologytiny.jpg" width="200" alt="HLM"/><br/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="right-side">
        <div className="feature-title">
          <h5> Features </h5>
        </div>
        <div className="feature-home">
          <table className="feature-home-table">
            <tbody>
              <tr>
                <td valign='top'>
                  <b>
                    <a href="http://mackey.solutions:3000">Chatrooms Application using NodeJS</a>
                  </b>
                  <br/><br/>
                  <div className="contact-info">
                    NEW: ChatGPT rooms. I've integrated my gpt-3.5-turbo LLM with the Chatrooms Application.
                    2 new rooms: Science and Programmer Expert and Ancient History Expert.
                    (they're lonely and live in their chat rooms...pay them a visit.)
                    <br /> <br />
                    <img src="chatroom2sm.jpg" alt="Chat Room"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
