import { DisplayOptions, ChatItem} from "@nlux/react";
import merge from 'lodash/merge';
const displayOptions: DisplayOptions = {
	colorScheme: "light",
	height: '100%'
};
const initialConversation: ChatItem[] = [
    {
        role: 'user',
        message: 'I need help with my order'
    },
    {
        role: 'assistant',
        message: 'Sure! What is your order number?'
    }
];
export const defaultOptions = {
	conversationOptions: {
	},
	personaOptions: {
		assistant: {
			name: '你好，我是你的 AI 助手',
			avatar: 'https://s1.eastbuy.com/s/Avatar-9107634e.png',
			tagline: '您可以尝试点击下方的快捷入口开启体验！',
		},
		user: {
			name: 'You',
			avatar: 'https://s1.eastbuy.com/s/Frame-cb35d3ba.png',
		}
	},
	displayOptions,
	composerOptions: {
		placeholder: '请输入您的问题，使用 Shift + Enter 换行。',
		hideStopButton: true
	},
	initialConversation,
};

export const getChatOptions = (chatConfig:ChatbotConfig) => {
	return merge({}, defaultOptions, chatConfig.aiChatOptions ||chatConfig.options);
};
