<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div class="container">
            <div id="about">
                <div id="self">
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-4">
                            <div>
                                <img :src= photoUrl class="photo" />
                            </div>
                        </div>
                        <div class="col-sm-4 vertical-center">
                            <div>
                                <h2>{{ greet }}</h2>
                                <h4>{{ jobTitle }}</h4>
                                <p>{{ selfText }}</p>
                                <platform />
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                </div>
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
    import platform from '../../components/Platform.vue';
    import contact from '../../components/Contact.vue';
    import copyRight from '../../components/CopyRight.vue';
    
  
    export default {
        name: 'About',
        components: {
            menuBlock,
            contact,
            copyRight,
            platform
        },
        data() {
            return {
                photoUrl: require('../../assets/images/me.png'),
                greet: 'Hi！我是林婷芳',
                jobTitle: '軟體工程師',
                selfText: '一位對凡事充滿好奇與興趣的工程師，畢業於輔仁大學經濟學系，雖非資訊科系畢業，但對網站相當有興趣．透過不斷的學習精進，在訂定目標後走上coding之路，並從中得到成就感．除了寫程式以外，涉略UI設計與平面設計，在工作上都能有所發揮．'
            }
        }
    }
  </script>
  
  <style>
  
  </style>