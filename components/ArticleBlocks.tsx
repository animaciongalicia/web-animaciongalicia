import type { Block } from "@/content/types";
import { ChatScene } from "./ChatScene";
import { CopyList } from "./CopyList";
import { TemplateMessages } from "./TemplateMessages";
import { GameList } from "./GameList";
import { Ideas } from "./Ideas";
import { Checklist } from "./Checklist";
import { Steps } from "./Steps";
import { PlayGame } from "./PlayGame";

export function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.text}</h2>;
          case "p":
            return <p key={i}>{b.text}</p>;
          case "chat":
            return <ChatScene key={i} title={b.title} messages={b.messages} />;
          case "copylist":
            return <CopyList key={i} title={b.title} items={b.items} />;
          case "template":
            return <TemplateMessages key={i} title={b.title} fields={b.fields} messages={b.messages} />;
          case "steps":
            return <Steps key={i} title={b.title} items={b.items} />;
          case "checklist":
            return <Checklist key={i} title={b.title} items={b.items} />;
          case "games":
            return <GameList key={i} items={b.items} />;
          case "ideas":
            return <Ideas key={i} title={b.title} budget={b.budget} items={b.items} />;
          case "play":
            return <PlayGame key={i} />;
        }
      })}
    </>
  );
}
