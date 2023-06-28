<template>
  <div>
    <section class="project-task" v-if="tasks.length > 0">
      <div class="container">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task"></TaskItem>
      </div>
    </section>
    <TaskPlug v-else></TaskPlug>
  </div>
</template>

<script>
import TaskItem from "@/components/Tasks/TaskItem.vue";
import TaskPlug from "@/components/Plugs/TaskPlug.vue";
import tasksData from "@/components/Tasks/tasksData.js";

export default {
  components: {
    TaskItem,
    TaskPlug,
  },
  data() {
    return {
      tasks: tasksData, // Предполагаю что тут будут задачи из сервера
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/project-task.scss";
</style>
