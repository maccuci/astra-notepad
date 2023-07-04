"use client";

import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

const NoteCard = ({ note, onDelete }: { note: Note; onDelete: () => void }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title text-xl font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="lg:prose-xl prose">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 flex justify-end">
          <button
            className="m-2 rounded-xl bg-red-600 px-4 py-3 text-gray-900 transition-colors hover:bg-red-700"
            onClick={onDelete}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
