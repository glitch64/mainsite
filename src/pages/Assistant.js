import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { ThemeContext } from '../contexts/ThemeContext';
import './Assistant.css';

const Assistant = () => {
    const [prompt, setPrompt] = useState('');
    const [file, setFile] = useState(null);
    const [responses, setResponses] = useState([]);
    const [threadId, setThreadId] = useState(null);
    const { theme } = useContext(ThemeContext);
    const responseEndRef = useRef(null);

    const scrollToBottom = () => {
        responseEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [responses]);

    const handleSubmit = async () => {
        const currentPrompt = prompt;
        setPrompt('');

        try {
            // Add the user's prompt to the responses array
            setResponses(prevResponses => [...prevResponses, { role: 'user', content: `<b>User:</b> ${currentPrompt}<br/>` }]);

            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                
                // Make the file upload API call
                await axios.post('http://72.167.43.38:5000/api/upload', formData);
                setFile(null); // Clear the file input after upload
            }

            // Make the prompt API call
            const res = await axios.post('http://72.167.43.38:5000/api/prompt', { prompt: currentPrompt, thread_id: threadId });
            setThreadId(res.data.thread_id);

            // Process the response to replace \n with <br/> and extract the value
            const formattedResponse = res.data.response.replace(/\n/g, '<br/>');

            // Append the assistant's response to the responses array
            setResponses(prevResponses => [...prevResponses, { role: 'assistant', content: formattedResponse }]);
        } catch (error) {
            console.error("Error submitting prompt or uploading file:", error);
        }
    };

    return (
        <div className={`assistant-page ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
		 
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                           <h3>OpenAI Assistant</h3><br/>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top">
                            <div>
                                <h4>Conversation:</h4>
                                <div className="response-area">
                                    {responses.map((res, index) => (
                                        <div key={index} className={`response ${res.role}`} dangerouslySetInnerHTML={{ __html: res.content }}>
                                        </div>
                                    ))}
                                    <div ref={responseEndRef} />
                                </div>
                            </div>
                        </td>
                    </tr>
 
                    <tr>
                        <td valign="top">
                            <div>
							<h4>User Prompt:</h4>
                                <textarea
                                    className="textarea"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Enter your prompt here"
                                ></textarea>
                                <table><tbody><tr><td valign="top">
                                <button className="submitbutton" onClick={handleSubmit}>Submit</button>
								</td><td valign="top">
                                <input className="filebutton"
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                </td></tr></tbody></table>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
 
export default Assistant;