const Navi = () => {
  return (
    <nav class="bg-gray-200 py-4">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul class="flex justify-center space-x-16 list-none">
          <li><a href="/" class="text-gray-700 hover:text-blue-500">HOME</a></li>
          <li><a href="/about" class="text-gray-700 hover:text-blue-500">ABOUT</a></li>
          <li><a href="/projects" class="text-gray-700 hover:text-blue-500">PROJECTS</a></li>
          <li><a href="/contact" class="text-gray-700 hover:text-blue-500">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navi
