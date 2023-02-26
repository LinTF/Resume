<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href='index.html'>{{ logo }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mobile-nav" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" v-for="(iMenu, index) in menu" v-bind:key="index" :href=iMenu.menuLink>{{ iMenu.menuName }}</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'menuBlock',
        data() {
            return {
                menu: [
                    {
                        menuName: '首頁',
                        menuLink: 'index.html'
                    },
                    {
                        menuName: '關於我',
                        menuLink: 'about.html'
                    },
                    {
                        menuName: '作品集',
                        menuLink: 'portfolio.html'
                    }
                ],
                logo: '林婷芳 作品集'
            }
        }
    }
</script>

<style>

</style>