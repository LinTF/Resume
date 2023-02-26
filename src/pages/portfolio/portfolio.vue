<template>
    <header>
        <menuBlock />
    </header>
    <main>
      
    </main>
  
    <footer>
        <copyRight/>
    </footer>
  </template>
  
  <script>
    import menuBlock from '../../components/Menu.vue';
    import copyRight from '../../components/CopyRight.vue';
  
    export default {
        name: 'Home',
        components: {
            menuBlock,
            copyRight
        }
    }
  </script>
  
  <style>
  
  </style>