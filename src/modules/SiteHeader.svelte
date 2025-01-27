<script lang="ts">
    export let header: any;
    const { logo, links, title } = header;
  </script>
  
  <div class="site-header max-w-screen-xl mx-auto flex flex-row justify-between items-center">
    <div class="flex items-center">    
        <img src={logo.url} alt={logo.alt} class="max-w-[140px]" />

        <h1 class="text-2xl ml-4 font-bold dark:text-white">{title}</h1>
    </div>

     <nav class="w-1/2 flex justify-end">
          <ul class="flex flex-row gap-16">
              {#each links as link}
                <li class="bg-gray-150 p-2">
                    <a
                    class="text-black dark:text-white hover:text-primary-500 dark:hover:text-white/80 hover:border-b border-primary-500 p-4" 
                    href={link.path === '/home' ? '/' : link.path} 
                    use:link
                    >
                        {link.menuText}
                    </a>
                </li>
              {/each}
          </ul>
      </nav>
  </div>