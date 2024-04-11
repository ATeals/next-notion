import { useState } from "react";

export const ModalWapper = ({
  close,
  isOpen,
  ...props
}: React.HTMLProps<HTMLDivElement> & { close?: () => unknown; isOpen: boolean }) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close?.();
    }
  };

  return (
    isOpen && (
      <div
        {...props}
        onClick={onClick}
        className="fixed top-0 left-0 w-screen h-dvh bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        {props.children}
      </div>
    )
  );
};

interface LanguageBadgeInput {
  language: string;
  color: string;
}

export const LanguageBadgeModal = ({
  onSubmit,
}: {
  onSubmit?: (value?: LanguageBadgeInput) => unknown;
}) => {
  const [input, setInput] = useState<LanguageBadgeInput>({ language: "", color: "" });

  const hadnleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(input);
  };

  return (
    <div className="bg-white w-[500px] p-2">
      <form onSubmit={hadnleSubmit} className="w-full h-full flex flex-col">
        <label htmlFor="language">언어 이름</label>
        <input
          id="language"
          type="text"
          className="border-[0.1rem] border-gray-300 rounded-lg p-2 mb-10"
          value={input.language}
          onChange={(e) => setInput((prev) => ({ ...prev, language: e.target.value }))}
        />

        <label htmlFor="color">색상 코드</label>
        <input
          type="text"
          id="color"
          className="border-[0.1rem] border-gray-300 rounded-lg p-2 mb-10"
          value={input.color}
          onChange={(e) => setInput((prev) => ({ ...prev, color: e.target.value }))}
        />

        <span className="text-gray-500">
          언어와 색상은{" "}
          <a href="https://simpleicons.org/" target="_black" className="text-primary-lg">
            여기
          </a>
          를 참조
        </span>

        <button className="w-full p-2 bg-primary-lg rounded-lg text-white">생성</button>
      </form>
    </div>
  );
};
