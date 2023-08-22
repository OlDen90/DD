<template>
  <div>
    <NavigationPanel></NavigationPanel>
    <router-view></router-view>
    <!-- <ProjectAll></ProjectAll>
    <TasksAll></TasksAll> -->
    <!-- <InputField></InputField>
    <SearchField></SearchField> -->
    <!-- <UsersInfo></UsersInfo> -->
  </div>
</template>

<script>
import NavigationPanel from "./components/Navigation/NavigationPanel.vue";
// import ProjectAll from "./views/ProjectAll.vue";
// import TasksAll from "./views/TasksAll.vue";
// import InputField from "./components/InputSearch/InputField.vue";
// import SearchField from "./components/InputSearch/SearchField.vue";
// import UsersInfo from "./components/Users/UsersInfo.vue";

export default {
  components: {
    NavigationPanel,
    // ProjectAll,
    // TasksAll,
    // InputField,
    // SearchField,
    // UsersInfo,
  },
};
</script>

<style lang="scss">
@import "@/styles/null.scss";
</style>