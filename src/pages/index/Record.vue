<template>
    <div class="block-bg" style="margin-bottom: 20px;">
        <div>
            <h6># Git</h6>
            <ul>
                <li v-for="item in gitList" :key="item">
                    <a :href="item.link" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="block-bg">
        <div>
            <h6># medium</h6>
            <ul>
                <li v-for="item in mediumList" :key="item">
                    <a :href="item.link" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'record',
        data() {
            return {
                gitList:[
                    {
                        name: 'Resume',
                        link: 'https://github.com/LinTF/Resume'
                    },
                    {
                        name: 'IncomePlan',
                        link: 'https://github.com/LinTF/IncomePlan'
                    },
                    {
                        name: 'TodoList',
                        link: 'https://github.com/LinTF/TodoList'
                    }
                ],
                mediumList: [
                    {
                        name: 'First vue project — 收支分析',
                        link: 'https://medium.com/@tingfanglin/first-vue-project-%E6%94%B6%E6%94%AF%E5%88%86%E6%9E%90-66bb2b7bc8fd'
                    },
                    {
                        name: '[Vue] 使用CLI建立專案（Mac M1 max）',
                        link: 'https://medium.com/@tingfanglin/vue-%E4%BD%BF%E7%94%A8cli%E5%BB%BA%E7%AB%8B%E5%B0%88%E6%A1%88-mac-m1-max-50a91020e9e3'
                    },
                    {
                        name: 'Asp.net 刪除檔案 (VB)',
                        link: 'https://medium.com/@tingfanglin/asp-net-%E5%88%AA%E9%99%A4%E6%AA%94%E6%A1%88-vb-8588b8adfc80'
                    },
                    {
                        name: 'Asp.net 更換SQL內容文字 (VB)',
                        link: 'https://medium.com/@tingfanglin/asp-net-%E6%9B%B4%E6%8F%9Bsql%E5%85%A7%E5%AE%B9%E6%96%87%E5%AD%97-vb-dd40cf9bded4'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .block-bg {
        background-color: #f8f9fa;
        padding: .5rem;
        border-radius: 15px;

        &>div {
            margin-top: 2rem;

            li {
                padding: 1px 0px;
            }
        }
    }
</style>