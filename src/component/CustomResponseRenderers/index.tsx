import { ResponseRenderer,ResponseRendererProps } from '@nlux/react';
import './style.css'
import IconPark from '../IconPark/index';
import { useContext } from 'react';
import { ChatConfigContext } from '../..';

const CustomResponseRenderers:ResponseRenderer<string> = (props:ResponseRendererProps<string>) => {
    const chatConfig = useContext(ChatConfigContext);
    console.log('CustomResponseRenderers',props)
    const params:AnswerInfo<string> = {
        ...props
    }

    return (
        <>
            <div className="colourful-response-renderer">
                <div className="response-container">{props.content}</div>
                <div className="rating-container">
                    <div className='tool-btn' onClick={() => chatConfig?.answerEvents?.praiseClick?.(params)}>
                        <IconPark name='dianzan' size={14}/>
                    </div>
                    <div className='tool-btn reverse'  onClick={() => chatConfig?.answerEvents?.blameClick?.(params)}>
                        <IconPark name='dianzan' size={14}/>
                    </div>
                    <div className='tool-btn'  onClick={() => chatConfig?.answerEvents?.copyClick?.(params)}>
                        <IconPark name='icon-copy-14px' size={14}/>
                    </div>
                    <div className='tool-btn'  onClick={() => chatConfig?.answerEvents?.collectClick?.(params)}>
                        <IconPark name='icon-copy-14px' size={14}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomResponseRenderers