import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <>
      <title>{profile.name} - About</title>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header class="text-center">
          <h1 class="text-3xl font-bold">About</h1>
          <p class="mt-2 text-gray-600">私の自己紹介や経歴をお届けします。</p>
        </header>
        <section class="mt-8 space-y-4">
          <h2 class="text-2xl font-semibold">私について</h2>
          <p>
            &emsp;verazzaです。性別は男性で、現在は21歳で大学生をしています。
            <br />
            ある種のソフトウェアエンジニアと言っていいのかわかりませんが、
            <br />
            私のポリシーは、
          </p>
          <p class="mt-6 text-lg text-gray-300 text-center">
            「{profile.policy}」
          </p>
          <p>
            です。
            <br /><br />
            別に、特段、VSCodeを毛嫌いしているわけではないんですよ？
            <br /><br />
            実際、私も最初の3年はお世話になりました。しかし、あるときNeovimというCLIで動くエディターを見つけたんです。他にも、NanoやVimなどありますよね。これを最初使ったときは、「なんだこれ、jkキーで上下、hlキーで左右へカーソルを動かすのめんどくせ！」って思いました。でも、段々と使っているうちに、マウス操作よりも早くなってきて、また、自分でエディターをカスタマイズすることの楽しさも相まって、完全にVSCodeよりも好きになったんです。それが私をCLIの道に引きずり込んだ所以です。
          </p>
          <br />
          <h2 class="text-2xl font-semibold">経歴</h2>
          <p>
            &emsp;プログラミングを大学1年生のときに趣味で初めて以来、4年継続しています。
            <br />
            振り返ると、最初私がやっていたのは、マインクラフト、通称マイクラでした。その頃、Linuxに憧れがあったのかUbuntuでマイクラサーバーを立てて、私の友達と一緒に遊んでいました。
            <br />
            （旧FMC鯖、現Kishax鯖）
            <br /><br />
            そこであるとき、「簡単なウェブサーバーを作ってみたい」とかでApacheを触っていると、運よく公開ができまして...。
            <br />
            そこからですね、webサーバーで使える言語として、なんとなくphpを始めました。
            <br />
            (今では懐かしい思ひ出...)
            <br />
            今は公開はしていませんが、動画や写真なども投稿できる完全な掲示板を作ったんですよ。その後に、バックドア攻撃を仕掛けられて以来、私はphpに対する信頼を失ってしまいましたが...。
            <br /><br />
            &emsp;それから、一段落して、「マイクラのプラグインを作ってみたい」と漠然と思って、Javaを始めましたね。最初は、phpに比べて、書くことが多いなと思いましたが、今では、あれは安全性のために必要なことだったんだと理解しているし、あの頃の、書いたコードをマイクラ内でデバッグするという作業はとても良い経験だと思っています。
            <br />
            (コード編集をして、ビルドしてJarにして、マイクラのpluginsフォルダに入れて、サーバーを起動して、私がそのサーバーに入って...。)
            <br />
            心折れたときも何度かありましたね。このときにはすでに私の書くphpよりもJavaの方が完全に優位だった思います。
            <br /><br />
            そんなときに、「フルスタックjs」という言葉を知って、「私のウェブサーバーもjsだけでかけるのであれば、そうしよう！」と思って、Node.jsで、今までphpで書いていたログインページをjsに変換することを目的に、jsを学び、ある程度、書けるようになりました。
            <br /><br />
            そこからは、早かったです。jsの安全性を上げるために、typescript、通称tsを学んで、今度は、jsからtsで書いてみようなど考えました。
            <br /><br />
            そんなこんなで、今に至ります。
            <br /><br />

            <h2 class="text-2xl font-semibold">最後に</h2>
            &emsp;今では自分でブログなども書いて情報発信をしています。ぜひ興味のある方は、<a href="/blog">私のブログ</a>&nbsp;を見てみてください。<a href={profile.social.qiita.url}>Qiita-@verazza</a>&nbsp;でも同様に配信しています。
            <br />
            また、上で話した、私が育てたエディターNeovimの設定やプロジェクトやプロジェクト要項は、<a href="/projects">PROJECTS</a>&nbsp;で確認できます。
          </p>
        </section>
      </div>
    </>
  );
});
