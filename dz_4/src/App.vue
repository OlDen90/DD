<template>
  <div>
    <NavigationPanel></NavigationPanel>
    <ProjectAll></ProjectAll>
    <TasksAll></TasksAll>
    <InputField></InputField>
    <SearchField></SearchField>
    <UsersInfo></UsersInfo>
    <!-- <ExampleOne></ExampleOne>
  <ExampleTwo></ExampleTwo> -->
  </div>
</template>

<script>
import NavigationPanel from "./components/Navigation/NavigationPanel.vue";
import ProjectAll from "./views/ProjectAll.vue";
import TasksAll from "./views/TasksAll.vue";
import InputField from "./components/InputSearch/InputField.vue";
import SearchField from "./components/InputSearch/SearchField.vue";
import UsersInfo from "./components/Users/UsersInfo.vue";
// import ExampleOne from './views/ExampleOne.vue'
// import ExampleTwo from './views/ExampleTwo.vue'

export default {
  components: {
    NavigationPanel,
    ProjectAll,
    TasksAll,
    InputField,
    SearchField,
    UsersInfo,
    // ExampleOne,
    // ExampleTwo,
  },
};
</script>

<style lang="scss">
@import "@/styles/null.scss";
</style>