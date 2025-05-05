import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';

export default createRoute(async (c) => {
  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header class="text-center">
          <h1 class="text-4xl font-bold">{profile.name}</h1>
          <p class="text-xl text-gray-600">{profile.title}</p>
          <p class="mt-4">{profile.introduction}</p>
        </header>
      </div>
      <footer class="mt-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  );
});
