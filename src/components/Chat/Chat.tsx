'use client';
import { useChat } from 'ai/react';

export const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <main >
            <section className="mb-auto m">
                {messages.map(m => (
                    <div className="mb-4" key={m.id}>
                        {m.role === 'user' ? 'User: ' : 'AI: '}
                        {m.content}
                    </div>
                ))}
            </section>
            <form  onSubmit={handleSubmit}>
                <input
                    
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Say something..."
                />
                <button
                    
                    type="submit"
                >
                    Send
                </button>
            </form>
        </main>
    );
}