import React, { useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Assistant.css"

const Assistant = () => {

	const CREATE_THREAD_URL = "http://localhost:3000/chat/new";
	const SEND_MESSAGE_URL = "http://localhost:3000/chat/send";
	const GET_LIST_URL = "http://localhost:3000/chat/list";

	const [messages, setMessages] = useState([]);
	const [chat_area_height, setAreaHeight] = useState(25);
	const [textBox, setTextBox] = useState(""); 
	const [isLoading, setIsLoading] = useState(false);
	const [threadId, setThreadId] = useState("");
	const [runId, setRunID] = useState("");

	const divRef = useRef();

	const scrollToElement = () => {
  	const {current} = divRef
   		if (current !== null){
     		current.scrollIntoView({behavior: "smooth"})
   		}
	}	

	function AddMessageUser(message) {
		
		const newParagraph = document.createElement('p');
		newParagraph.className = "message-user";
		newParagraph.textContent = message;
		
		const parent = document.getElementById("chat-area");
		parent.appendChild(newParagraph);

		setMessages([...messages, {"message":message, type:0}]);

		console.log(messages);
		parent.style.height = chat_area_height + 3 + "rem";
		parent.style.marginTop = 2 * messages.length + "rem";
		setAreaHeight(chat_area_height + 3);
	}
	function AddMessagesBot(message) {
		const newParagraph = document.createElement('p');
		newParagraph.className = "message-bot";
		newParagraph.textContent = message;

		const parent = document.getElementById("chat-area");
		parent.appendChild(newParagraph);

		setMessages([...messages, {"message":message, type:1}]);

		console.log(messages);
		parent.style.height = chat_area_height + 3 + "rem";
		parent.style.marginTop = 2 * messages.length + "rem";
		setAreaHeight(chat_area_height + 3);
	}

	const handleChange = (e) => {
		setTextBox(e.target.value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (textBox)
		{
			let currentThreadId = threadId;
			let currentRunId = runId;
			let text = textBox;
			setIsLoading(true);
			setTextBox("");

			AddMessageUser(textBox);
			
			if (!threadId)
			{
				currentThreadId = await initThread();
			}
			currentRunId = await sendMessage(text, currentThreadId);
			
			await getLatestMessage(currentThreadId, currentRunId);
			
		}
	}
	async function initThread()
	{
		const postData = {
			info: 'foo',
		};
		try {
			const response = await fetch(CREATE_THREAD_URL, {
				method: 'POST', // Specify the HTTP method as POST
				headers: {
					'Content-Type': 'application/json', // Indicate the type of content being sent
				},
				body: JSON.stringify(postData), // Convert the JavaScript object to a JSON string for the request body
			})
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setThreadId(data.threadId); // Handle the successful response data
			return data.threadId;
		}
		catch (error) {
			console.error('Error:', error); // Handle any errors during the request
			return null;
		}
	}

	async function sendMessage(message, currentThreadId)
	{
		const postData = {
			"thread_id": currentThreadId,
			"content": message,
		};

		console.log(postData)

		try{
			const response = await fetch(SEND_MESSAGE_URL, {
			method: 'POST', // Specify the HTTP method as POST
			headers: {
				'Content-Type': 'application/json', // Indicate the type of content being sent
			},
			body: JSON.stringify(postData), // Convert the JavaScript object to a JSON string for the request body
			})
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json(); 
			console.log('Success:', data.runId); // Handle the successful response data
			setRunID(data.runId);
			return data.runId;
		}
		catch (error) {
			console.error('Error:', error); // Handle any errors during the request
			return null;
		}
		
	}
	
	async function getLatestMessage(currentThreadId, runId)
	{
		const postData = {
			threadId: currentThreadId,
			runId: runId,
		};
		console.log("RUN ID IN GET MESS: " + runId);
		try {
			const response = await fetch(GET_LIST_URL, {
			method: 'POST', // Specify the HTTP method as POST
			headers: {
				'Content-Type': 'application/json', // Indicate the type of content being sent
			},
			body: JSON.stringify(postData), // Convert the JavaScript object to a JSON string for the request body
		})
		if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			console.log('Success:', data); // Handle the successful response data
			try{
				AddMessagesBot(data.messages[0].content[0].text.value);
				setIsLoading(false);
			}
			catch(error)
			{
				AddMessagesBot("We have encountered an error. Refresh the page to try again!");
				setIsLoading(true);
			}
			
		}
		catch (error) {
			console.error('Error:', error); // Handle any errors during the request
			return null;
		}
	}
	useEffect(scrollToElement, [chat_area_height, messages.length]);

  return (
    <div className="page">
		<div id="chat-area">
			<h1 className="welcome-text">
				Welcome to the AI Assistant. Ask a question to get started.
			</h1>
		</div>
		<div className="input-and-button" ref={divRef}>
			<textarea disabled={isLoading} id="input-box" placeholder="Send message..."  value = {textBox} onChange = {handleChange}>
			</textarea>
			<Button  disabled={isLoading} id="chat-button"  onClick={handleSubmit}>
				Send
			</Button>
		</div>
      </div>)
}

export default Assistant;

