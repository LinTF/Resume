<template>
    <!-- 分類 -->
    <div class="category-btn">
        <button 
            @click="selectedCategory = 'all'" 
            :style="getActiveStyle('all')">全部</button>
        <button 
            v-for="item in categorys" 
            :key="item.category" 
            @click="selectedCategory = item.category" 
            :style="getActiveStyle(item.category)">{{ item.name }}</button>
    </div>

    <!-- 內容 -->
    <div class="row">
        <div class="col-md-4" v-for="word in filteredItems" :key="word.title">
            <a class="work-item" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="workInfo(word.title + '_' + word.note)">
                <img :src="word.moreImgUrl[0]" />
                <div class="mask vertical-center">
                    <div>
                        <h3>{{ word.title }}</h3>
                        <p>{{ word.note }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Works',
        data() {
            return {
                selectedCategory: 'all',
                categorys: [
                    {
                        category: 'frontend',
                        name: '前端（含 UI 設計）'
                    },
                    {
                        category: 'rearend',
                        name: '後端'
                    },
                    {
                        category: 'design',
                        name: '平面設計'
                    }
                ],
                works: [
                    {
                        title: '3M全戶淨水系統',
                        category: 'frontend',
                        note: '網頁切版、網頁版型設計',
                        type: [ 'Bootstrap', 'SCSS', 'Adobe XD' ],
                        description: '我負責設計和切版，介紹 3M 全戶淨水系統產品的使用場景。在這個網頁中，著重於，依照使用者需求的方式呈現產品的特點和優勢，同時使用現代化的設計元素和布局，使網頁看起來更加吸引人。',
                        linkUrl: [
                            {   
                                name: '3M全戶淨水系統',
                                linkUrl: 'https://findmyfilter.com.tw/'
                            }
                        ],
                        moreImgUrl: [
                            require('@/assets/images/code/3m/index.png')
                        ]
                    },
                    {
                        title: '收支分析表',
                        category: 'frontend',
                        note: '全前端',
                        type: [ 'Vue', 'Bootstrap', 'SCSS' ],
                        description: '這是我使用 Vue 完成的第一個 side project。在這個小專案中，深入了解了 Vue 的建立方式、元件的使用方法、props 傳遞、$emit 事件觸發、components 組件、computed 屬性、methods 方法、以及專案的打包等相關技術。',
                        linkUrl: [
                            {
                                name: '收支分析表',
                                linkUrl: 'https://lintf.github.io/IncomePlan/'
                            }
                        ],
                        moreImgUrl: [
                            require('@/assets/images/code/incom/index.png')
                        ]
                    },
                    {
                        title: '統計報表',
                        category: 'rearend',
                        note: '資料庫組合、報表設計',
                        type: [ 'VB.NET', 'MMSQL' ],
                        description: '在專案中，將資料依照客戶需求設計出統計報表，並提供下載。',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/icon/sql.png')
                        ]
                    },
                    {
                        title: '客戶官網套版版型',
                        category: 'frontend',
                        note: '全前端、網頁版型設計',
                        type: [ 'Bootstrap', 'SCSS', 'Sketch' ],
                        description: '負責為客戶設計網站的套版，並提供多種選擇，以滿足客戶的不同需求。並具行動裝置的兼容性，以確保網站在不同設備上都能正常顯示。此外，還負責網站版型設計和前端畫面的切版，並實現各種互動效果，以提高網站的使用體驗。',
                        linkUrl: [
                            {
                                name: '連結 1',
                                linkUrl: 'http://www.cens.com/ishow/s/src/',
                            },
                            {
                                name: '連結 2',
                                linkUrl: 'https://www.cens.com/ishow/a/arcontooltech/',
                            },
                            {
                                name: '連結 3',
                                linkUrl: 'https://www.cens.com/ishow/3/3awire/',
                            }
                        ],
                        moreImgUrl: [
                            require('@/assets/images/code/udn/firm/1.jpg'),
                            require('@/assets/images/code/udn/firm/1-1.png'),
                            require('@/assets/images/code/udn/firm/2.jpg'),
                            require('@/assets/images/code/udn/firm/2-1.png'),
                            require('@/assets/images/code/udn/firm/3.jpg'),
                            require('@/assets/images/code/udn/firm/3-1.png')
                        ]
                    },
                    {
                        title: 'CENS官網改版',
                        category: 'frontend',
                        note: '全前端、網頁版型設計',
                        type: [ 'Bootstrap', 'SCSS', 'Sketch' ],
                        description: '負責改版官網部分頁面，可支援行動裝置，並重新設計版面。',
                        linkUrl: [
                            {
                                name: '新聞頁面',
                                linkUrl: 'https://www.cens.com/cens/html/en/news/news_home.html',
                            },
                            {
                                name: '搜尋結果',
                                linkUrl: 'https://www.cens.com/censv1/en/search_list.jsp?TYPE=prd&QRY=led',
                            },
                            {
                                name: '聯絡我們',
                                linkUrl: 'https://www.cens.com/censv1/en/contactus.jsp',
                            }
                        ],
                        moreImgUrl: [
                            require('@/assets/images/code/udn/cens/news/1.jpg'),
                            require('@/assets/images/code/udn/cens/news/1-1.png'),
                            require('@/assets/images/code/udn/cens/search/2.jpg'),
                            require('@/assets/images/code/udn/cens/search/2-1.png'),
                            require('@/assets/images/code/udn/cens/contact/3.jpg'),
                            require('@/assets/images/code/udn/cens/contact/3-1.png')
                        ]
                    },
                    {
                        title: 'ez訂',
                        category: 'frontend',
                        note: '切版',
                        type: [ 'Bootstrap', 'CSS' ],
                        description: '負責切版影評文章頁面、影評文章內頁以及電影時刻列表頁面，並使用 RWD 技術實現了行動版的可觀賞性。',
                        linkUrl: [
                            {
                                name: '影評文章',
                                linkUrl: 'https://www.ezding.com.tw/article?type=0&page=1'
                            },
                            {
                                name: '影評文章內頁',
                                linkUrl: 'https://www.ezding.com.tw/articlePage?content_id=3403'
                            },
                            {
                                name: '電影時刻',
                                linkUrl: 'https://www.ezding.com.tw/movieInfoIndex?tab=in_theater&page=1'
                            }
                        ],
                        moreImgUrl: [
                            require('@/assets/images/code/ezding/1.jpg'),
                            require('@/assets/images/code/ezding/6.png'),
                            require('@/assets/images/code/ezding/2.jpg'),
                            require('@/assets/images/code/ezding/4.png'),
                            require('@/assets/images/code/ezding/3.jpg'),
                            require('@/assets/images/code/ezding/5.png'),
                        ]
                    },
                    {
                        title: 'Moto7',
                        category: 'frontend',
                        note: '切版',
                        type: [ 'Bootstrap', 'SCSS' ],
                        description: '一個重機愛好者的網站，我負責重機相關文章的行動版切版',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/code/moto7/1.png')
                        ]
                    },
                    {
                        title: 'Cens',
                        category: 'design',
                        note: '展覽 Banner 設計',
                        type: [ 'Adobe Photoshop' ],
                        description: '設計個展覽的 Banner 放置官網首頁等其他曝光地方',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/design/banner/show/杜拜汽配展/banner01.jpg'),
                            require('@/assets/images/design/banner/show/東京照明展/banner-fn.jpg'),
                            require('@/assets/images/design/banner/show/高雄扣件展/banner.jpg'),
                            require('@/assets/images/design/banner/show/AD_2163.jpg')
                        ]
                    },
                    {
                        title: 'Cens',
                        category: 'design',
                        note: '網路大數據時代 DM',
                        type: [ 'Adobe Photoshop' ],
                        description: '網路大數據時代 DM',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/design/dm/大數據時代/網路dm-1.jpg'),
                            require('@/assets/images/design/dm/大數據時代/網路dm-2.jpg'),
                            require('@/assets/images/design/dm/大數據時代/網路dm-3.jpg'),
                            require('@/assets/images/design/dm/大數據時代/網路dm-4.jpg')
                        ]
                    },
                    {
                        title: 'Cens',
                        category: 'design',
                        note: '台灣照明展 DM',
                        type: [ 'Adobe Photoshop' ],
                        description: '台灣照明展 DM',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/design/dm/台灣照明/正反面-4.jpg')
                        ]
                    },
                    {
                        title: 'Cens',
                        category: 'design',
                        note: '秋燈展 DM',
                        type: [ 'Adobe Photoshop' ],
                        description: '秋燈展 DM',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/design/dm/秋燈展/2017秋燈展DM-0502.jpg'),
                            require('@/assets/images/design/dm/秋燈展/2017秋燈展DM-0502-2.jpg')
                        ]
                    },
                    {
                        title: '客戶',
                        category: 'design',
                        note: 'Banner 設計',
                        type: [ 'Adobe Photoshop' ],
                        description: '將客戶要宣傳的 Banner 設計後，放置 Cesns 官網宣傳',
                        linkUrl: [],
                        moreImgUrl: [
                            require('@/assets/images/design/banner/firm/1.jpg'),
                            require('@/assets/images/design/banner/firm/2.jpg'),
                            require('@/assets/images/design/banner/firm/3.jpg'),
                            require('@/assets/images/design/banner/firm/4.jpg'),
                            require('@/assets/images/design/banner/firm/5.jpg')
                        ]
                    }
                ]
            }
        },
        emits: ['emitWork'],
        methods: {
            workInfo(str) {
                const indexNum = this.works.findIndex(work => work.title + '_' + work.note === str);

                this.$emit('emitWork', this.works[indexNum])
            },
            getActiveStyle(category) {
                return category === this.selectedCategory ? { backgroundColor: '#F9B69C', color: '#fff', border: '1px solid #F9B69C' } : { backgroundColor: '#fff' }
            }
        },
        computed: {
            filteredItems() {
                if (this.selectedCategory === 'all') {
                    return this.works;
                } else {
                    return this.works.filter(item => item.category === this.selectedCategory);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .col-md-4 {
        margin-bottom: 30px;
    }

    .category-btn {
        text-align: center;
        margin-bottom: 50px;
        margin-top: 50px;

        button {
            border-radius: 20px;
            padding: 5px 15px;
            margin: 0px 10px;
            background: #fff;
            border: 1px solid #ccc;

            &:hover {
                border: 1px solid #F9B69C;
                color: #F9B69C;
            }
        }
    }

    .work-item {
        position: relative;
        display: block;
        height: 320px;

        img {
            width: 100%;   
            height: 100%;   
            object-fit:cover;
        }

        .mask {
            width: 100%;
            height: 100%;
            background-color: #000000;
            position: absolute;
            opacity: 0;
            top: 0px;

            h3, p {
                color: #fff;
                text-align: center;
            }

            &>div {
                width: inherit;
            }
        }

        &:hover .mask {
            opacity: .8;
            transition: .5s;
        }
    }
</style>