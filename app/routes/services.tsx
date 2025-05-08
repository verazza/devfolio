import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <header>
          <h1 class="text-3xl font-bold">Services</h1>
          <p class="mt-2 text-gray-600">技術提供・運営しているサービス一覧</p>
        </header>

        <section class="mt-12 space-y-12 text-left">
          <article>
            <h2 class="text-2xl font-semibold">📝 技術ブログ</h2>
            <p class="mt-2 text-gray-300">
              &emsp;CLI中心の開発環境、セキュリティ、ツール活用に関する技術記事を不定期に発信中です。
              <br />
              Qiitaでも同じく発信しています。
            </p>
            <div class="mt-6 flex space-x-4 items-center text-blue-500 leading-none">
              <a href="/blog" rel="noopener noreferrer" target="_blank">ブログを読む</a>
              <span class="text-gray-400 not-italic">もしくは</span>
              <a href={profile.social.qiita.url} rel="noopener noreferrer" target="_blank">Qiitaでブログを読む</a>
            </div>
          </article>

          <article>
            <h2 class="text-2xl font-semibold">🎮 Kishax - Minecraft Server</h2>
            <p class="mt-2 text-gray-300">
              &emsp;Java版と統合版の両方に対応した、小規模で安全なコミュニティサーバーです。
              <br />
              ガイドや説明文などが英語にも対応していて、日本以外の海外の人でも安心して入れます。
              <br />
              独自プラグインやKishaxアカウント連携により、BOT対策やセキュリティも強化したり、
              プレイヤーが好きなときにサーバーを起動できる環境が整っています。
            </p>
            <ul class="mt-2 list-disc list-inside text-gray-400">
              <li>英語対応でグローバル</li>
              <li>いつでも専用のサーバーを起動可能（サバイバル、MOD、マップ等）</li>
              <li>学生や20代中心のフレンドリーなコミュニティ</li>
              <li>統合版プレイヤーも参加可能</li>
              <li>開発者・運営メンバー募集中</li>
            </ul>
            <p class="mt-2 text-gray-400">
              編集中のポータルサイト：<a href={profile.social.kishax.url} class="text-blue-500 underline" rel="noopener noreferrer" target="_blank">kishax.net</a>
              <br />
              Discordサーバー：<a href={profile.social.kishax.discord} class="text-blue-500 underline" rel="noopener noreferrer" target="_blank">参加はこちら</a>
            </p>
          </article>
        </section>
      </div>
    </>
  );
});
