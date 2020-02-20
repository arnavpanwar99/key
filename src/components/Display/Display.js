import React from 'react';
import s from './Display.module.scss';

class Display extends React.Component{
    
    componentDidMount(){
        window.addEventListener('keypress', this.handleKeypress)
    }

    componentWillUnmount(){
        window.removeEventListener('keypress', this.handleKeypress)
    }

    handleKeypress = ({ key, charCode }) => {
        this.setState({ code: charCode, visual: charCode!==32?key:'spacebar' });
    }

    state={
        code: 32,
        visual: 'spacebar',
    }

    render() {
        const { code, visual } = this.state;
        return (
            <>
                <div className={s.wrap}>
                    <div className={s.wrap_text}>{code}</div>
                    <div className={s.wrap_visual}>{visual}</div>
                </div>
            </>
        );
    }
}

export default Display;