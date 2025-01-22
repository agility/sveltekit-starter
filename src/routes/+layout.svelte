<script>
  import Footer from "../modules/Footer.svelte";
  import Header from "../modules/Header.svelte";
  // this imports tailwindcss styles
  import '../app.css';
</script>

<main>
  <Header />

  <section>
    <slot></slot>
  </section>

  <Footer />
</main>
