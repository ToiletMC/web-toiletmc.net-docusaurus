export default function TPlusText({ text }: { text: string }): JSX.Element {
  return (
    <span
      style={{
        backgroundImage: "linear-gradient(to right, #dbe2ff, #5b75ee)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
      }}
    >{text == null ? "[T+]" : text}</span>
  );
}
