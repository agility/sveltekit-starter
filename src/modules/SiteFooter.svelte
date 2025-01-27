<script>

    import { faXTwitter, faInstagram, faSlack, faYoutube } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    const socials = [
		{
			title: "X (Twitter)",
			url: "https://www.twitter.com/agilitycms",
            icon: faXTwitter
    	},
		{
			title: "Instagram",
			url: "https://www.instagram.com/agilitycms",
			icon: faInstagram
        },
		{
			title: "Slack",
			url: "https://agilitycms.com/join-slack",
			icon: faSlack
        },
		{
			title: "YouTube",
			url: "https://www.youtube.com/@AgilityCMS",
			icon: faYoutube
        },
	]

</script>

<footer class="relative px-8 py-6 md:py-4 mt-8 bg-gray-100 dark:bg-black">
    <div class="max-w-screen-xl mx-auto md:flex md:items-center">
        <div class="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative">
            <a href="https://www.agilitycms.com" target="_blank" rel="noreferrer" title="Agility CMS">
                <img src="../agility-logo.svg" alt="Agility CMS" width={90} height={24} />
            </a>
        </div>
        <div class="flex-grow mb-4 md:mb-0">
            <p class="text-center md:text-left text-black/30 dark:text-white/60 text-xs md:ml-8 md:max-w-3xl">
                Powered by Agility. This website and materials found on it are for demo purposes. You can use this to
                preview the content you created on your Agility CMS account.
                <a
                    href="https://github.com/agility/sveltekit-starter"
                    title="View on GitHub"
                    target="_blank"
                    rel="noreferrer"
                    class="dark:text-white/80 mr-2 border-b border-gray-600"
                >
                    GitHub
                </a>
                <a
                    href="https://agilitycms.com/docs"
                    title="Agility Docs"
                    target="_blank"
                    rel="noreferrer"
                    class="dark:text-white/80 mr-1 border-b border-gray-600"
                >
                    Agility Docs
                </a>
                <a
                    href="https://agilitycms.com/contact-us/chat-sales"
                    title="Contact Us"
                    target="_blank"
                    rel="noreferrer"
                    class="dark:text-white/80 border-b border-gray-600"
                >
                    Contact Us
                </a>
            </p>
        </div>
        <div class="flex-1-grow">
            <ul class="flex justify-center md:justify-start gap-8">
                {#each socials as social, index}
                    <li class="mx-4 md:mx-0">
                        <a href={social.url} title={`Follow Agility CMS on ${social.title}`} target="_blank" rel="noreferrer">
                           
                            <FontAwesomeIcon icon={social.icon} size="lg" class="text-primary-500 dark:text-white mr-2"  />
            
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</footer>