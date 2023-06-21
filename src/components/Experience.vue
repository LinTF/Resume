<template>
    <div class="timeline">
        <ul class="line">
            <li v-for="(info, index) in filterCompanyJob" :key="index">
                <h5 class="time-item">{{ info.name }}</h5>
                <h6 class="time-item">{{ info.title }}｜{{ info.jobRange }}</h6>
                <ul class="job">
                    <li v-for="(job, index) in info.job" :key="index">{{ job }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Experience',
        props: {
            getNewestJob: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                companyJob: [
                    {
                        name: '大武科技股份有限公司',
                        title: '軟體工程師',
                        jobRange: '2018/09~2022/09',
                        job: ['前後端系統開發', '資料庫操作與資料表規劃', '網站視覺與版面規劃'],
                        isNew: true
                    },
                    {
                        name: '經濟日報',
                        title: '網頁設計師',
                        jobRange: '2016/09~2018/08',
                        job: ['cens.com官網改版（網站版面設計/前端程式撰寫）', '客戶網站公版（規劃/設計/前端程式撰寫）', '國內外展覽相關視覺製作（展覽網站/Banner/EDM）', '官網廣告版位Banner設計', '平面DM設計'],
                        isNew: true
                    },
                    {
                        name: '夏娃數位行銷',
                        title: '網頁設計師',
                        jobRange: '2015/10~2016/05',
                        job: ['網站製作與規劃', '教育訓練', '客戶溝通'],
                        isNew: false
                    }
                ]
            }
        },
        computed: {
            filterCompanyJob() {
                if (this.getNewestJob === true) {
                    const twoNewExperience = this.companyJob.splice(0, 2);
                    return twoNewExperience;
                } else {
                    return this.companyJob;
                }
            }
        }
    }
</script>

<style>

</style>