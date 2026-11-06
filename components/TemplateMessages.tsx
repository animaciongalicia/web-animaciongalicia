"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";

type Props = {
  title?: string;
  fields: { key: string; label: string; value: string }[];
  messages: { label: string; text: string }[];
};

export function TemplateMessages({ title, fields, messages }: Props) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.key, f.value])),
  );

  const fill = (t: string) => t.replace(/\{(\w+)\}/g, (_, k: string) => values[k] || `{${k}}`);

  return (
    <section className="block">
      {title && <h2>{title}</h2>}
      <div className="fields">
        {fields.map((f) => (
          <label key={f.key} className="field">
            <span>{f.label}</span>
            <input
              type="text"
              value={values[f.key]}
              onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
            />
          </label>
        ))}
      </div>
      <ul className="copylist">
        {messages.map((m) => {
          const text = fill(m.text);
          return (
            <li key={m.label} className="copyitem">
              <div>
                <strong className="copy-label">{m.label}</strong>
                <span className="copy-text">{text}</span>
              </div>
              <CopyButton text={text} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
