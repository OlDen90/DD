<template>
    <header class="header">
        <div class="header__container">
            <div class="header__menu">
                <nav class="menu__body">

                    <router-link to="/projects" class="nav-link" :class="{ active: $route.path === '/projects' }">
                        <ButtonNav href="#" text="Проекты" :showText="true" />
                    </router-link>
                    <router-link to="/tasks" class="nav-link" :class="{ active: $route.path === '/tasks' }">
                        <ButtonNav href="#" text="Задачи" :showText="true" />
                    </router-link>
                    <!-- <ButtonNav href="#" text="Проекты" :showText="true" />
                    <ButtonNav href="#" text="Задачи" :showText="true" /> -->
                    <ButtonNav href="#" text="Пользователи" :showText="true" />
                    <ButtonNav :disabledCondition="true" href="#" text="Отключенная кнопка" :showText="true" />
                    <DropdownButton :showIcon="true" title="Меню" :showTitle="true" />
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import ButtonNav from '@/components/Button/ButtonNav.vue'
import DropdownButton from '@/components/Button/DropdownButton.vue'
export default {
    components: {
        ButtonNav,
        DropdownButton,
    },
}
</script>

<style lang="scss">
@import '@/components/Navigation/NavigationPanel.scss';
</style>


