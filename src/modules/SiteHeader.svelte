<script lang="ts">
    export let header: any;
    export let links: any;
    const { logo } = header.items[0].fields;
  </script>
  
  <div class="site-header max-w-screen-xl mx-auto flex flex-row justify-between items-center">
     <img src={logo.url} alt={logo.alt} class="max-w-[140px]" />
       <nav class="w-1/2 flex justify-end">
          <ul class="flex flex-row gap-16">
              {#each links as link}
                <li class="bg-gray-150 p-2">
                    <a
                    class="text-black dark:text-white border-b border-white p-4" 
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