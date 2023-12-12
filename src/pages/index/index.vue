<template>
    <header>
        <menuBlock />
    </header>
    <main>
        <div id="index-top">
            <div class="container">
                <h1>Hi! 我是 Iris</h1>
                <div class="block-title">
                    <h2>軟體工程師</h2>
                </div>
                <div>
                    <ul class="tag-block">
                        <li class="tag">專長｜前端開發</li>
                        <li class="tag">專長｜後端開發</li>
                        <li class="tag">專長｜資料庫應用</li>
                        <li class="tag">專長｜UI 設計</li>
                        <li class="tag" style="background-color: #d78b4a;">New｜前端框架 - Vue</li>
                        <li class="tag" style="background-color: #d78b4a;">New｜Node.js</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <div id="home">
                <div class="row">
                    <div class="col-xxl-4 col-lg-6">
                        <div class="block-title">
                            <h2># 常用工具與技能</h2>
                        </div>

                        <div>
                            <skill :onlyMainSkill="true" />
                        </div>
                    </div>
                    <div class="col-xxl-4 col-lg-6">
                        <div class="block-title">
                            <h2># 最新經歷</h2>
                        </div>
                        <experience :getNewestJob="true" />
                    </div>
                    <div class="col-xxl-4">
                        <div class="block-title">
                            <h2># 紀錄</h2>
                        </div>
                        <div class="row">
                            <recordBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <router-link to="./portfolio">
            <div class="portfolio">
                點我看作品
                <span class="arrow">&rarr;</span>
            </div>
        </router-link>

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
    import recordBlock from './Record.vue';
    
    export default {
        name: 'Home',
        components: {
            menuBlock,
            contact,
            copyRight,
            skill,
            experience,
            recordBlock,
        }
    }
  </script>
  
  <style scoped lang="scss">
    #contact {
        margin-top: 0px;
    }

    .navbar {
        margin-bottom: 0px;
    }

    a {
        font-size: 23px;
        color: #fff;
        letter-spacing: 2px;
        text-decoration:none;

        .portfolio {
            background-color: #D7A590;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
            
            .arrow {
                left: 0;
                opacity: 0;
                transform: translate(-100%, -50%);
                transition: transform 0.5s ease;
            }

            &:hover {
                background-color: #f8f9fa;
                color: #D7A590;

                .arrow {
                    opacity: 1;
                    position: relative;
                    transform: translate(0, -50%);
                    display: inline-block;
                    top: 17px;
                    color: #D7A590;
                }
            }
        }
    }

    .timeline {
        padding: .5rem;
    }

    ::v-deep .skill-icon {
        img {
            height: 50px !important;
        }
    }

    .tag-block {
        margin-top: 20px;
        margin-bottom: 0px;

        li {
            list-style-type: none;
        }

        .tag {
            background-color: #81ac9e;
            text-align: center;
            padding: 5px 10px;
            border-radius: 20px;
            color: #fff;
            margin: 5px 10px;
            display: inline-block;
            white-space: nowrap;
        }
    }
  </style>