<template>
    <ul>
        <li v-for="(item, index) in platform" :key="index">
            <a :href= item.href :target= item.target>
                <i :class= item.text></i>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'platform',
        data() {
            return {
                platform: [
                    {
                        href: '#contact',
                        text: 'fa-solid fa-envelope-open-text',
                        target: "_self"
                    },
                    {
                        href: 'https://www.linkedin.com/in/lin-ting-fang-8a391776/',
                        text: 'fa-brands fa-linkedin',
                        target: "_blank"
                    },
                    {
                        href: 'https://medium.com/me/stories/public',
                        text: 'fa-brands fa-medium',
                        target: "_blank"
                    },
                    {
                        href: 'https://github.com/LinTF',
                        text: 'fa-brands fa-github',
                        target: "_blank"
                    }
                ]
            }
        }
    }
</script>

<style>

</style>