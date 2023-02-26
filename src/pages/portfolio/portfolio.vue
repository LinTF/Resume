<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div id="contact">
            <contact />
        </div>
    </main>
  
    <footer>
        <copyRight/>
    </footer>
  </template>
  
  <script>
    import menuBlock from '../../components/Menu.vue';
    import copyRight from '../../components/CopyRight.vue';
    import contact from '../../components/Contact.vue';
  
    export default {
        name: 'Home',
        components: {
            menuBlock,
            contact,
            copyRight
        }
    }
  </script>
  
  <style>
  
  </style>