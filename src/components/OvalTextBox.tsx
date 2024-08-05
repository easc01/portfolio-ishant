export default function OvalTextBox({ text, className }: { text: string, className?: string }) {
  return <div className={`rounded-full h-max px-2 py-1 bg-[#122c3d] text-aqua-blue ${className}`}>
    {text}
  </div>
}