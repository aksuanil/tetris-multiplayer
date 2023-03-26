import React, { useEffect, useRef } from 'react';
import { Button } from '../../../../Components/Button';
import Container from '../../../../Components/Container/Container';
import { Input } from '../../../../Components/Input';
import { Messages } from '../../types';
import styles from './Chat.module.scss';
type Props = {
  messages: Messages;
  emitMessage: (message: string) => void;
};

export default function Chat({ messages, emitMessage }: Props) {
  const chatRef = useRef<HTMLFieldSetElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emitMessage(e.target.chatInput.value);
    e.target.chatInput.value = '';
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className={styles.chat}>
      <Container color="#ce4242" ref={chatRef} className={styles.chatBox}>
        <legend>Chat</legend>
        {messages.map((item, index) => (
          <div className={styles.chatBoxMessage} key={index}>
            <div>{item.username}:</div> {item.message}
          </div>
        ))}
      </Container>
      <form className={styles.messageBar} onSubmit={handleSubmit}>
        <Input name="chatInput" inputType="themeRed" />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
