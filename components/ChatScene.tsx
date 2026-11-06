import type { ChatMessage } from "@/content/types";

const COLORS = ["#b3261e", "#1b6ca8", "#6a4c93", "#2a7f62", "#a35d00", "#8a3b5e"];

function colorFor(name: string) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return COLORS[h % COLORS.length];
}

export function ChatScene({ title, messages }: { title: string; messages: ChatMessage[] }) {
  return (
    <figure className="chat" aria-label={`Escena de chat ficticia: ${title}`}>
      <figcaption className="chat-head">
        <span className="chat-title">{title}</span>
        <span className="chat-badge">Chat ficticio</span>
      </figcaption>
      <ul className="chat-body">
        {messages.map((m, i) => {
          const system = m.who === "Sistema";
          return (
            <li key={i} className={system ? "msg msg-sys" : m.out ? "msg msg-out" : "msg msg-in"}>
              {!system && !m.out && (
                <span className="msg-who" style={{ color: colorFor(m.who) }}>
                  {m.who}
                </span>
              )}
              <span className="msg-text">{m.text}</span>
            </li>
          );
        })}
      </ul>
      <p className="chat-note">Conversación inventada. Cualquier parecido con tu grupo es pura coincidencia. Pura.</p>
    </figure>
  );
}
