<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div class="container">
            <div id="about">
                <selfBlack />
                <hr />
            </div>
        </div>
        <div id="contact">
            <contact />
        </div>
    </main>
  
    <footer>
        <copyRight />
    </footer>
  </template>
  
  <script>
    import menuBlock from '../../components/Menu.vue';
    import selfBlack from './Self.vue';
    import contact from '../../components/Contact.vue';
    import copyRight from '../../components/CopyRight.vue';
  
    export default {
        name: 'About',
        components: {
            menuBlock,
            selfBlack,
            contact,
            copyRight
        }
    }
  </script>
  
  <style>
  
  </style>