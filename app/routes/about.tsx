// app/routes/about.tsx
import { createRoute } from 'honox/factory';
import profileDataForRoute from '../../data/profile.json'; // profile全体をインポート
import aboutJsonData from '../../data/about.json';     // about.jsonをインポート
import type { AboutData } from '../types/about';
import type { ProfileData } from '../types/profile';   // profile全体の型をインポート
import CommonHeader from '../islands/CommonHeader';
import { generalMessages } from '../locales/translations';
import AboutContent from '../islands/AboutContent';

// 型アサーション
const typedAboutData: AboutData = aboutJsonData as AboutData;
const typedProfileData: ProfileData = profileDataForRoute as ProfileData;

export default createRoute(async (c) => {
  // c.set('pageTitle', ...); // RootLayoutIslandで処理されるので、ここでは不要

  return c.render(
    <>
      {/* <title>{typedProfileData.name} - About</title> */} {/* RootLayoutIslandで設定 */}
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <CommonHeader
          titleContent={generalMessages.aboutTitle}
          descriptionContent={generalMessages.aboutDescription}
        />
        <AboutContent
          aboutData={typedAboutData}
          profile={typedProfileData} // profileデータ全体か、必要な部分だけを渡す
        />
      </div>
    </>
  );
});
