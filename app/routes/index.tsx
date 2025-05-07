import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h1 class="text-4xl font-bold">{profile.name}</h1>
        <p class="text-xl text-gray-400 mt-2">{profile.title}</p>
        <p class="mt-6 text-lg text-gray-300">
          {profile.policy}
        </p>
        <p class="mt-4 text-gray-400">
          NeovimとCLIを愛するフルスタックエンジニアです。安全性・再現性・効率性を大切にしながら、堅牢な開発環境とウェブサービスを構築しています。
        </p>
        <div class="mt-6 space-x-4">
          <a href="/about" class="text-blue-400 underline hover:text-blue-300">About</a>
          <a href="/projects" class="text-blue-400 underline hover:text-blue-300">Projects</a>
          <a href="/services" class="text-blue-400 underline hover:text-blue-300">Services</a>
          <a href="/services" class="text-blue-400 underline hover:text-blue-300">Contact</a>
        </div>
      </div>
    </>
  );
});

