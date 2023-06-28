<template>
  <div>
    <section class="project-task" v-if="projects.length > 0">
      <div class="container">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        ></ProjectItem>
      </div>
    </section>
    <ProjectPlug v-else></ProjectPlug>
  </div>
</template>

<script>
import ProjectItem from "@/components/Project/ProjectItem.vue";
import ProjectPlug from "@/components/Plugs/ProjectPlug.vue";
import projectsData from "@/components/Project/projectsData.js";

export default {
  components: {
    ProjectItem,
    ProjectPlug,
  },
  data() {
    return {
      projects: projectsData, // Предполагаю что тут будут проекты из сервера
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/project-task.scss";
</style>