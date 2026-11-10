function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inline(src: string): string {
  let out = escapeHtml(src);
  out = out.replace(/!\[([^\]]*)\]\(((?:\/|https?:\/\/)[^\s)]+)\)/g, (_, alt, href) => {
    const safeHref = String(href).replace(/"/g, "%22");
    const safeAlt = String(alt).replace(/"/g, "&quot;");
    return `<img src="${safeHref}" alt="${safeAlt}" loading="lazy" />`;
  });
  out = out.replace(/\[([^\]]+)\]\(((?:\/|https?:\/\/)[^\s)]+)\)/g, (_, text, href) => {
    const safeHref = String(href).replace(/"/g, "%22");
    const external = /^https?:\/\//.test(href);
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${safeHref}"${attrs}>${text}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  return out;
}

export function renderMarkdown(src: string): string {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let para: string[] = [];
  let inQuote = false;
  let inList: "ul" | "ol" | null = null;

  const flushPara = () => {
    if (para.length) {
      html.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };
  const closeList = () => {
    if (inList) {
      html.push(`</${inList}>`);
      inList = null;
    }
  };
  const closeQuote = () => {
    if (inQuote) {
      html.push("</blockquote>");
      inQuote = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushPara();
      closeList();
      closeQuote();
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      flushPara();
      closeList();
      closeQuote();
      const level = h[1].length + 1;
      html.push(`<h${level}>${inline(h[2])}</h${level}>`);
      continue;
    }
    if (line.startsWith("> ")) {
      flushPara();
      closeList();
      if (!inQuote) {
        html.push("<blockquote>");
        inQuote = true;
      }
      html.push(`<p>${inline(line.slice(2))}</p>`);
      continue;
    }
    const ol = line.match(/^(\d+)\.\s+(.*)$/);
    const ul = line.match(/^[-*]\s+(.*)$/);
    if (ol || ul) {
      flushPara();
      closeQuote();
      const kind = ol ? "ol" : "ul";
      if (inList !== kind) {
        closeList();
        html.push(`<${kind}>`);
        inList = kind;
      }
      html.push(`<li>${inline((ol ? ol[2] : ul![1]))}</li>`);
      continue;
    }
    para.push(line);
  }
  flushPara();
  closeList();
  closeQuote();
  return html.join("\n");
}
