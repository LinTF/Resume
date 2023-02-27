<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div class="container">
            <div id="about">
                <selfBlack />
                <hr />
                <skillBlock />
                <hr />
                <experienceBlock />
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
    import menuBlock from '@/components/Menu.vue';
    import selfBlack from './Self.vue';
    import skillBlock from './SkillBlock.vue';
    import experienceBlock from './ExperienceBlock.vue';
    import contact from '@/components/Contact.vue';
    import copyRight from '@/components/CopyRight.vue';
  
    export default {
        name: 'About',
        components: {
            menuBlock,
            selfBlack,
            skillBlock,
            experienceBlock,
            contact,
            copyRight
        }
    }
  </script>
  
  <style>
  
  </style>