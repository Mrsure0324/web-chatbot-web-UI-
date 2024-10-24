import React from 'react';
import Chatbot from './Chatbot';

const ChatbotContainer: React.FC = () => {
	return (
		<>
			<div className={`webchat-container`} >
				<Chatbot />
			</div>
		</>
	);
};

export default ChatbotContainer;
