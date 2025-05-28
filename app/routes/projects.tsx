// app/routes/projects.tsx
import { createRoute } from 'honox/factory';
import profileData from '../../data/profile.json'; import projectsJson from '../../data/projects.json'; // ★ JSONからプロジェクトデータをインポート
import type { ProjectInfo } from '../types/projects';   // ★ 型をインポート
import CommonHeader from '../islands/CommonHeader';
import { generalMessages } from '../locales/translations';
import ProjectList from '../islands/ProjectList';       // ★ ProjectList Islandをインポート

// 型アサーション
const allProjectsData: ProjectInfo[] = projectsJson.projects as ProjectInfo[];

export default createRoute(async (c) => {
  // profileData全体か、必要な部分だけをProjectListに渡すか検討
  // ProjectItemがprofile.social.github.idを必要とするので、それを渡せるようにする
  const relevantProfileData = {
    social: profileData.social,
    // 他にProjectListやProjectItemが必要とするprofileのフィールドがあれば追加
  };

  return c.render(
    <>
      {/* <title>{profileData.name} - Projects</title> */} {/* RootLayoutIslandで設定 */}
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <CommonHeader
          titleContent={generalMessages.projectsTitle}
          descriptionContent={generalMessages.projectsDescription}
        />
        <ProjectList projects={allProjectsData} profile={relevantProfileData} /> {/* ★ Islandを使用 */}
      </div>
    </>
  );
});
