import React, { createContext } from 'react'
import ChatbotContainer from './component/ChatbotContainer'

export const ChatConfigContext = createContext<ChatbotConfig>({
    endpoint: '/chat',
})

const Chatbot:React.FC<ChatbotConfig> = (props) => {
    return (
        <>
            <ChatConfigContext.Provider value={props}>
                <ChatbotContainer />
            </ChatConfigContext.Provider>
        </>
    )
}
export default Chatbot;