
<template>
  <div>
    <section class="project-task" v-if="tasks.length > 0">
      <InputField :placeholder="inputPlaceholder" :showIcon="true" :value="inputValue"></InputField>
      <SearchField :placeholder="searchPlaceholder" :showIcon="false" :value="searchValue"></SearchField>
      <div class="container">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task"></TaskItem>
      </div>
    </section>
    <PlugAll v-else :plugInfo="tasksPlugInfo"></PlugAll>
    <CreateTask></CreateTask>
  </div>
</template>

<script>
import InputField from "@/components/InputSearch/InputField.vue";
import SearchField from "@/components/InputSearch/SearchField.vue";
import TaskItem from "@/components/Tasks/TaskItem.vue";
// import TaskPlug from "@/components/Plugs/TaskPlug.vue";
import tasksData from "@/components/Tasks/tasksData.js";
import PlugAll from "@/components/Plugs/PlugAll.vue";
import CreateTask from "@/components/Tasks/CreateTask.vue";

export default {
  components: {
    InputField,
    SearchField,
    TaskItem,
    // TaskPlug,
    PlugAll,
    CreateTask,
  },
  data() {
    return {
      tasks: tasksData, // Предполагаю что тут будут задачи из сервера
      inputPlaceholder: "Поиск123...",
      inputValue: "",
      searchPlaceholder: "Поиск123456...",
      searchValue: "",

      tasksPlugInfo: "Не создана ни одна задача",
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/project-task.scss";
</style>
