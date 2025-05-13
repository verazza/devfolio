import { createRoute } from 'honox/factory';

import profile from '../../data/profile.json';

const getGitUrlComponent = (repo: string) => {
  const gitUrl: string = `https://github.com/${profile.name}/${repo}`
  return (
    <>
      <a href={gitUrl}>{repo}</a>
    </>
  )
}

function ProjectItem({
  title,
  description,
  details,
  points,
  statement,
  link,
}: {
  title: string;
  description: string | any;
  details: string | any;
  points: string[];
  statement: string;
  link?: string;
}) {
  const githubUrl =
    link || `https://github.com/${profile.name}/${title.replace(/\s+/g, '-')}`;

  return (
    <article>
      <h3 class="text-2xl font-semibold">{title}</h3>
      <p class="mt-2 text-gray-300">{description}</p>
      <p class="mt-2 text-gray-400">{details}</p>
      <ul class="mt-2 list-disc list-inside text-gray-400">
        {points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
      <p class="mt-2 text-gray-400">{statement}</p>
      <a
        class="text-blue-500 underline mt-2 inline-block"
        href={githubUrl}
        target="_blank"
      >
        GitHubで見る
      </a>
    </article>
  );
}

export default createRoute(async (c) => {
  return c.render(
    <>
      <title>{profile.name} - Projects</title>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header class="text-center">
          <h1 class="text-3xl font-bold">Projects</h1>
          <p class="mt-2 text-gray-600">過去のプロジェクトや実績などを紹介します。</p>
        </header>
        <section class="mt-8 space-y-10">
          <ProjectItem
            title="mcp"
            description="mcpサーバーをCloudflare-Workersにデプロイし、AIと連携する。あくまで自分用に分析などに役立てています。"
            details="@"
            points={[
              "分析に役立つ",
              "verazza-初めてのAI連携プロジェクト",
              "誰でも自作関数をAIが利用するために作成できる"
            ]}
            statement="いずれ、Xで毎日コミット数報告してくれるサービスGithubitterのようなものを作れると思う。というか作りたいよね。乞うご期待。"
          />

          <ProjectItem
            title="hono-worker"
            description="現在閲覧中のウェブのソースコード。honoフレームワークにより高速にクライアントにリソースを提供します。"
            details="過去にExpress.jsで書いた経験をそのまま流用できて、コードを作るのにはそこまで苦はありませんでした。CloudflareのWorkersで配信もできるので、ある程度セキュリティも保証されます。"
            points={[
              "honoフレームワーク + xbasic",
              "Next.jsライクなファイルシステムルーティング",
            ]}
            statement="ていうかこれ、honoフレームワークの良いところ並べてるだけだぞ..."
          />

          <ProjectItem
            title="devkit"
            description="WSLで手作りのOSをインポートし、VSCodeを使わず、Neovim + CLI 環境で開発を完結させたいという思いから始まったプロジェクトです。"
            details="Neovim設定、LSP、DAP、デバッグツールなどをDocker上で再現でき、誰でも安全に同じ環境をすぐに構築できます。WSLへのインポートも自動化したスクリプトにより容易です。セキュリティ（ソースコードが隠されない）、再現性、移植性を重視しました。"
            points={[
              "ArchLinux + Docker + Neovim + LSP/DAP",
              "CLIベースの快適な開発体験",
              "DockerからWSLへの手軽なインポートをサポート",
            ]}
            statement="Neovim環境を他人に共有できるようになったのは非常に大きな成果でした。"
          />

          <ProjectItem
            title="kishax"
            description={
              <>
                Kishaxで実際に使っているJavaプラグイン。画像リンクから地図マップを描写したり、参加通知をDiscordへ送ったり、サーバーの起動・停止を認証ユーザーに対し、許可したり、もうほんと色々な機能を有しています。
              </>
            }
            details={
              <>
                認証ユーザーは、{getGitUrlComponent("kishax-web")}のログインページにログインしたユーザーが該当します。
              </>
            }
            points={[
              "画像リンクからマップ描写が可能に",
              "サーバーの起動停止をプレイヤーに委ねられる",
            ]}
            statement=""
          />

          <ProjectItem
            title="nvim"
            description="私の開発環境のお供であるNeovimの設定ファイル郡"
            details="数々のプラグインや自作関数とキーマップにより、作業を効率化できること間違いないです。LSPには、mason-lspやnvim-metalsを採用しています。"
            points={[
              "私が育てた最高のエディター設定",
              "Mason / LSP / Telescope / Overseer などのNeovim拡張",
            ]}
            statement=""
          />

          <ProjectItem
            title="fx"
            description="Javaの後継言語とも呼ばれるScalaで何か簡単なゲームを作りたいという思いから、テトリスを自作してみることを決意。"
            details="ScalaFXを使うことで、GUI操作を実現しています。"
            points={[
              "私、verazzaのScalaでの一番最初のプロジェクト",
              "未完成ではあるが、徐々に機能を盛り込みつつある",
            ]}
            statement="一番最初にしては、難しいな！テトリス。"
          />

          <ProjectItem
            title="dotfiles"
            description="CLI中心の生活を支えるドットファイル群です。"
            details="環境構築の自動化・再現性を意識し、私の開発環境でのドットファイルが集約されています。"
            points={[
              "Bash, tmux, starship 等",
              "Mason / LSP / Telescope / Overseer などのNeovim拡張",
            ]}
            statement="CLIにこだわる私の開発思想を反映した設定集です。"
          />
          <p>
            詳しくは、<a href={profile.social.github.url}>github-@verazza</a>&nbsp;をチェック。
          </p>
        </section>
      </div>
    </>
  );
});
