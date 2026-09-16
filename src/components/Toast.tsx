import { BiCheckCircle } from "react-icons/bi";

interface ToastProps {
  message: string;
  onDone: () => void;
}

export function Toast({ message, onDone }: ToastProps) {
  return (
    <div
      onAnimationEnd={onDone}
      className="border-4 border-gray-500 dark:border-white animate-fadeInAndOut fixed bottom-24 right-4 z-50 flex items-center gap-2 rounded-full dark:bg-night px-5 py-3 dark:text-white shadow-lg bg-white text-black"
    >
      <BiCheckCircle className="text-xl text-[#4DD4C6]" />
      <span className="font-medium">{message}</span>
    </div>
  );
}
