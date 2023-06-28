<template>
  <div>
    <NavigationPanel></NavigationPanel>
    <ProjectAll></ProjectAll>
    <TasksAll></TasksAll>
    <UsersInfo></UsersInfo>
    <!-- <ExampleOne></ExampleOne>
  <ExampleTwo></ExampleTwo> -->
  </div>
</template>

<script>
import NavigationPanel from "./components/Navigation/NavigationPanel.vue";
import ProjectAll from "./views/ProjectAll.vue";
import TasksAll from "./views/TasksAll.vue";
import UsersInfo from "./components/Users/UsersInfo.vue";
// import ExampleOne from './views/ExampleOne.vue'
// import ExampleTwo from './views/ExampleTwo.vue'

export default {
  components: {
    NavigationPanel,
    ProjectAll,
    TasksAll,
    UsersInfo,
    // ExampleOne,
    // ExampleTwo,
  },
};
</script>

<!-- dist\assets\Baranov_V_V.png -->

<style lang="scss">
@import "@/styles/null.scss";
</style>