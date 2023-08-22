<template>
  <div>
    <section class="project-task" v-if="projects.length > 0">
      <InputField :placeholder="inputPlaceholder" :showIcon="true" :value="inputValue"></InputField>
      <SearchField :placeholder="searchPlaceholder" :showIcon="false" :value="searchValue"></SearchField>
      <div class="container">
        <ProjectItem v-for="project in projects" :key="project.id" :project="project"></ProjectItem>
      </div>
    </section>
    <PlugAll v-else :plugInfo="projectPlugInfo"></PlugAll>
  </div>
</template>

<script>
import InputField from "@/components/InputSearch/InputField.vue";
import SearchField from "@/components/InputSearch/SearchField.vue";
import ProjectItem from "@/components/Project/ProjectItem.vue";
import projectsData from "@/components/Project/projectsData.js";
import PlugAll from "@/components/Plugs/PlugAll.vue";

export default {
  components: {
    InputField,
    SearchField,
    ProjectItem,
    PlugAll,
  },
  data() {
    return {
      projects: projectsData, // Предполагаю что тут будут проекты из сервера
      inputPlaceholder: "Поиск123...",
      inputValue: "",
      searchPlaceholder: "Поиск123456...",
      searchValue: "",

      projectPlugInfo: "Не создан ни один проект",
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/project-task.scss";
</style>