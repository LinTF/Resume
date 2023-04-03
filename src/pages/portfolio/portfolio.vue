<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div class="container">
            <div id="portfolio">
                <works @emitWork="getWorkInfo" />
                
                <lightBox :propsWorkInfo="workInfo" />
            </div>
        </div>

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
    import works from '../../components/Works.vue';
    import lightBox from '../../components/LightBox.vue';
  
    export default {
        name: 'Home',
        data() {
            return {
                workInfo: {}
            }
        },
        components: {
            menuBlock,
            contact,
            copyRight,
            works,
            lightBox
        },
        methods: {
            getWorkInfo(val) {
                this.workInfo = val;
            }
        }
    }
  </script>
  
  <style>
  
  </style>