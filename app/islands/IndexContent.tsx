// app/islands/IndexContent.tsx
import { usePageLang } from '../hooks/pageLang';
import { translate } from '../utils/i18n';
import { generalMessages } from '../locales/translations';

const IndexContent = () => {
  const { lang } = usePageLang();
  // console.log('[IndexContent Island] Rendered. Current lang:', lang);

  return (
    <div class="text-center"> {/* 親要素がtext-centerなので、リンクのブロックも中央寄せになります */}
      <p class="text-xl text-gray-400 mt-2 underline font-bold">
        {translate(generalMessages.homeDescription2, lang)}
      </p>
      <p class="mt-4 text-gray-400">
        {translate(generalMessages.homeDescription3, lang)}
      </p>

      {/* リンクコンテナ */}
      {/* モバイル (デフォルト): 2列グリッド、アイテム間のギャップは4 */}
      {/* mdブレークポイント以上 (デスクトップ): flexレイアウトで横一列、アイテム間のスペースは6 */}
      <div
        class="mt-8 grid grid-cols-2 gap-4 
               md:flex md:flex-row md:flex-nowrap md:justify-center md:space-x-6"
      >
        <a href="/about" class="text-blue-400 underline hover:text-blue-300 py-1 px-2"> {/* 適度なパディングを追加 */}
          {translate(generalMessages.aboutTitle, lang)}
        </a>
        <a href="/projects" class="text-blue-400 underline hover:text-blue-300 py-1 px-2">
          {translate(generalMessages.projectsTitle, lang)}
        </a>
        <a href="/services" class="text-blue-400 underline hover:text-blue-300 py-1 px-2">
          {translate(generalMessages.servicesTitle, lang)}
        </a>
        <a href="/contact" class="text-blue-400 underline hover:text-blue-300 py-1 px-2">
          {translate(generalMessages.contactTitle, lang)}
        </a>
      </div>
    </div>
  );
};

export default IndexContent;
