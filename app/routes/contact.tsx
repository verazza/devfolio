import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <>
      <title>{profile.name} - Contact</title>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header class="text-center">
          <h1 class="text-3xl font-bold">Contact</h1>
          <p class="mt-2 text-gray-600">連絡や問い合わせは以下から。</p>
        </header>
        <section class="mt-8 flex flex-col items-center">
          <a href={profile.social.x} target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition duration-200">X-@verazza_</a>
          <span class="mt-2">または</span>
          <a href={`mailto:${profile.contact.email}`} class="mt-2 text-gray-300 hover:text-white transition duration-200">{profile.contact.email}</a>
        </section>
      </div>
    </>
  );
});
