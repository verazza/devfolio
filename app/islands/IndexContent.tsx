import { usePageLang } from '../hooks/pageLang';
import { translate } from '../utils/i18n';
import { generalMessages } from '../locales/translations';

// もし RootLayoutIsland から profile データの一部を props で渡すなら型定義が必要。

const IndexContent = () => {
  const { lang } = usePageLang();
  // console.log('[HomePageContent Island] Rendered. Current lang:', lang);

  return (
    <div class="text-center">
      <p class="text-xl text-gray-400 mt-2 underline font-bold">{translate(generalMessages.homeDescription2, lang)}</p>
      <p class="mt-4 text-gray-400">{translate(generalMessages.homeDescription3, lang)}</p>
      <div class="mt-6 space-x-4">
        <a href="/about" class="text-blue-400 underline hover:text-blue-300">{translate(generalMessages.aboutTitle, lang)}</a>
        <a href="/projects" class="text-blue-400 underline hover:text-blue-300">{translate(generalMessages.projectsTitle, lang)}</a>
        <a href="/services" class="text-blue-400 underline hover:text-blue-300">{translate(generalMessages.servicesTitle, lang)}</a>
        <a href="/contact" class="text-blue-400 underline hover:text-blue-300">{translate(generalMessages.contactTitle, lang)}</a>
      </div>
    </div>
  );
};

export default IndexContent;
