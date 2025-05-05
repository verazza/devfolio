import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <>
      <title>{profile.name} - About</title>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header class="text-center">
          <h1 class="text-3xl font-bold">About</h1>
          <p class="mt-2 text-gray-600">私の自己紹介や詳細な情報などをお届けします。</p>
        </header>
        <section class="mt-8">
        </section>
      </div>
    </>
  );
});
