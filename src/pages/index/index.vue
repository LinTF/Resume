<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div class="container">
            <div id="home">
                <div class="row">
                    <div class="col-md-6">
                        <div class="block-title">
                            <h2># 常用工具與技能</h2>
                        </div>

                        <div>
                            <skill :onlyMainSkill="true" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="block-title">
                            <h2># 最新經歷</h2>
                        </div>
                        <div>
                            <experience :onlyNewestJob="true" />
                        </div>
                    </div>
                </div>
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
    import skill from '../../components/Skill.vue';
    import experience from '../../components/Experience.vue';
    import contact from '../../components/Contact.vue';
    import copyRight from '../../components/CopyRight.vue';
    
    export default {
        name: 'Home',
        components: {
            menuBlock,
            contact,
            copyRight,
            skill,
            experience
        }
    }
  </script>
  
  <style>
  
  </style>