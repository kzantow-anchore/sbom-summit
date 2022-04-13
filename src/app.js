import parse from "url-parse";

export function start() {
    const root = document.createElement("div");
    document.appendChild(root);
    const { name } = parse(window.location.href).host;
    root.innerHTML = `Hello ${name}!`;
}
