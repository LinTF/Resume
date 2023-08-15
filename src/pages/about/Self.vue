<template>
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
</template>

<script>
    import platform from '@/components/Platform.vue';

    export default {
        name: 'Self',
        data() {
            return {
                photoUrl: require('@/assets/images/me.png'),
                greet: 'Hi！我是林婷芳',
                jobTitle: '軟體工程師',
                selfText: '畢業於輔仁大學經濟學系，充滿好奇的我對網站相當有興趣。統合所學專長，將分析與邏輯應用在工作上，透過不斷的學習精進，在訂定目標後走上coding之路成為軟體工程師。除了撰寫程式，也涵蓋UI設計與平面設計，能有效率的達成目標並持續成長。'
            }
        },
        components: {
            platform
        }
    }
</script>

<style>

</style>