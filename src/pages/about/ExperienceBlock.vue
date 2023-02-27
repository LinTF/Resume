<template>
    <div id="experience">
        <div class="block-title">
            <h2># 經歷</h2>
        </div>
        <div class="timeline">
            <experience />
        </div>
    </div>
</template>

<script>
    import experience from '@/components/Experience.vue';

    export default {
        name: 'ExperienceBlock',
        components: {
            experience
        }
    }
</script>

<style>

</style>