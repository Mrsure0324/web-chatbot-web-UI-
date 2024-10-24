import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatBot from './index'
import "./types.d.ts"
import "./index.css"

const chatConfig:ChatbotConfig = {
	endpoint: '/api/chat',
	displayByDefault: false, // 默认不展示 AI 助手聊天框
	aiChatOptions: { // aiChatOptions 中 options 会传递 aiChat 组件，自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat
		conversationOptions: { // 自定义取值参考：https://docs.nlkit.com/nlux/reference/ui/ai-chat#conversation-options
			conversationStarters: [{
					prompt: '阿里云什么时间成立的？'
				},
				{
					prompt: '为什么说弹性是云的最大优势?'
				},
				{
					prompt: '为什么选择阿里云？'
				},
			]
		},
	},
	dataProcessor: {
		/**
		 * 在向后端大模型应用发起请求前改写 Prompt。
		 * 可以用于总结网页场景，在发送前将网页内容包含在内，同时避免在前端显示这些内容。
		 * @param {string} prompt - 用户输入的 Prompt
		 */
		rewritePrompt(prompt: string) {
			return prompt;
		}
	},
	answerEvents: {
		/**
		 * 点击「好评」按钮时触发的回调函数
		 */
		praiseClick() {
			console.log('好评');
		},
		/**
		 * 点击「差评」按钮时触发的回调函数
		 */
		blameClick() {
			console.log('差评');
		}
	}
}

const chatbotContainer = document.createElement("div");
document.body.appendChild(chatbotContainer);
ReactDOM.createRoot(chatbotContainer).render(
	<React.StrictMode>
		<ChatBot {...chatConfig} />
	</React.StrictMode>,
)
