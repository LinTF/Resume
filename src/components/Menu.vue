<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">{{ logo }}</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mobile-nav" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" aria-current="page" v-for="(iMenu, index) in menu" v-bind:key="index" :to=iMenu.menuLink>{{ iMenu.menuName }}</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'MenuBlock',
        data() {
            return {
                menu: [
                    {
                        menuName: '首頁',
                        menuLink: '/'
                    },
                    {
                        menuName: '關於我',
                        menuLink: 'about'
                    },
                    {
                        menuName: '作品集',
                        menuLink: 'portfolio'
                    }
                ],
                logo: '林婷芳 作品集'
            }
        }
    }
</script>

<style>

</style>