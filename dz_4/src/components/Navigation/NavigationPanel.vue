<template>
    <header class="header">
        <div class="header__container">
            <div class="header__menu">
                <nav class="menu__body">
                    <ButtonNav href="#" text="Проекты" />
                    <ButtonNav href="#" text="Задачи" />
                    <ButtonNav href="#" text="Пользователи" />
                    <ButtonNav :disabledCondition="true" href="#" text="Отключенная кнопка" />
                    <DropdownButton href="#" :logo-src="logoSrc"></DropdownButton>
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
    // methods: {

    // }
}
</script>

<style lang="scss">
@import '@/components/Navigation/NavigationPanel.scss';
</style>


