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
                    <p>
                        畢業於輔仁大學經濟學系，在一個契機下學習了網站建置，享受寫程式的過程，從中也得到成就感，從WordPress套版到網頁設計，再到系統開發，從中學會前後端程式、資料庫操作、UI設計，同時兼顧使用者體驗．
                        <br />
                        喜歡分享事物與自我挑戰，期許自己未來能有更多元的嘗試與目標．
                    </p>
                </div>
            </div>
        </div>
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
                        <experience :onlyNewestJob="true" />
                    </div>
                </div>
            </div>
        </div>

        <a href="../portfolio.html">
            <div class="portfolio">
                點我看作品
                <span class="arrow">&rarr;</span>
            </div>
        </a>

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
  </style>