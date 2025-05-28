/**
 * 文字列内のバッククォートで囲まれた部分を <code> タグに置き換えます。
 * @param text 加工する文字列
 * @returns 文字列とJSX要素の配列
 */
export function parseAndStyleInlineCode(text: string | undefined | null): (string | any)[] {
  if (!text) return ['']; // textがundefinedやnullの場合は空の配列要素を返すか、空文字列を返す

  const parts: (string | any)[] = [];
  // バッククォートで囲まれた部分を見つける正規表現 (非貪欲マッチ `+?`)
  const regex = /`([^`]+?)`/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // バッククォートの前の部分を追加
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // バッククォートで囲まれた部分を <code> タグでラップして追加
    // スタイルはTailwind CSSのクラスで直接指定する例
    const capturedText = match[1]; // ★ 一度変数に代入
    parts.push(
      <code class="bg-slate-700 text-emerald-400 px-1.5 py-0.5 rounded-md text-sm font-mono mx-0.5" >
        {capturedText}
      </code>
    );
    lastIndex = regex.lastIndex;
  }

  // 最後のマッチ以降の残りのテキストを追加
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // もし何もマッチしなかった場合は、元のテキストをそのまま配列に入れて返す
  if (parts.length === 0 && text) {
    return [text];
  }

  return parts;
}
