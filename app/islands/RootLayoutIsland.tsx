import { useState, useEffect, PropsWithChildren } from 'hono/jsx';
import HamburgerNav from './HamburgerNav';
import { Language } from '../types/common';
import type { SiteConfig } from '../types/siteConfig';
import { PageLangContextProvider } from '../hooks/pageLang';
import type { ProfileData } from '../types/profile';
import PrevNextNavigation from './PrevNextNavigation';

type RootLayoutIslandProps = PropsWithChildren<{
  profile: ProfileData;
  initialLang?: Language;
  currentPath: string;
  siteConfig: SiteConfig;
}>;

const LS_LANG_KEY = 'maekawa_dev_lang'; // localStorageのキー

export default function RootLayoutIsland({ children, profile, initialLang = 'ja', currentPath, siteConfig }: RootLayoutIslandProps) {
  const [lang, setLangOriginal] = useState<Language>(() => {
    if (typeof localStorage !== 'undefined') {
      const storedLang = localStorage.getItem(LS_LANG_KEY);
      if (storedLang && (storedLang === 'ja' || storedLang === 'en')) {
        // console.log('[RootLayoutIsland InitialState] Found lang in localStorage:', storedLang);
        return storedLang as Language;
      }
    }
    // console.log('[RootLayoutIsland InitialState] No lang in localStorage, using initialLang:', initialLang);
    return initialLang;
  });

  useEffect(() => {
    // console.log('[RootLayoutIsland Effect] Language is now:', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LS_LANG_KEY, lang);
      // console.log(`[RootLayoutIsland Effect] Saved lang "${lang}" to localStorage.`);
    }
  }, [lang]);

  // console.log('[RootLayoutIsland Render] Rendering with lang:', lang);


  const shouldShowPrevNext = siteConfig.showPrevNextOnHomePage ? true : currentPath !== '/';

  return (
    <>
      <HamburgerNav
        profile={{ name: profile.name }}
        lang={lang}
        setLang={setLangOriginal}
      />
      <PageLangContextProvider value={{ lang }}>
        <div>{children}</div>
        {/* ★ JSON設定と現在のパスに基づいて表示を制御 */}
        {shouldShowPrevNext && <PrevNextNavigation currentPath={currentPath} />}
      </PageLangContextProvider>
      <footer class="mt-12 text-center text-gray-400 bg-gray-800 border-t border-gray-700 py-6 shadow-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.copyrighter || profile.name}.
          {/* ★ スマートフォン表示 (smブレークポイント未満) でのみ改行 */}
          <br class="sm:hidden" />
          {/* デスクトップ表示時にスペースが入るように */}
          {' '}
          All rights reserved.
        </p>
      </footer>
    </>
  );
}
