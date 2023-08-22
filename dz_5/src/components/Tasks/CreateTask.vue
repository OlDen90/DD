<template>
  <section class="create-task__container">
    <div class="create-task">
      <div class="create-task__body">
        <div class="create-task__title-shell">
          <h2 class="create-task__title">Создание задачи</h2>
        </div>
        <form @submit.prevent="createTask" class="create-task__form">
          <div class="create-task__form-shell">
            <div class="create-task__name">
              <label>Название <span>*</span></label>
              <input class="create-task__name-input" v-model="title" placeholder="Введите текст..." required>
            </div>

            <div class="create-task__description">
              <label>Описание</label>
              <textarea v-model="description" placeholder="Введите текст..."></textarea>
            </div>

            <div class="create-task__project" @click="toggleDropdown" :class="{ 'create-task__project-active': active }">
              <label>Проект <span>*</span></label>
              <div class="create-task__project-select">
                <span class="create-task__project-icon">
                  <IconDropdown class="create-task__project-btn-drop-down" v-if="showIcon" :icon-path="customIconPath"
                    :icon-width="customIconWidth" :icon-height="customIconHeight" :icon-view-box="customIconViewBox" />
                </span>
                <select v-model="project" required>
                  <option class="create-task__project-option" disabled value="">
                    Выберите проект
                  </option>
                  <!-- Тут будут варианты проектов -->
                </select>
              </div>
            </div>

            <!-- <select class="create-task__project-select" v-model="project" required>
                <option class="create-task__project-option" disabled value="">
                  Выберите проект
                  <span class="create-task__project-icon">
                    <IconDropdown class="create-task__project-btn-drop-down" v-if="showIcon" :iconPath="customIconPath"
                      :iconWidth="customIconWidth" :iconHeight="customIconHeight" :iconViewBox="customIconViewBox" />
                  </span>
                </option>
                Тут будут варианты проектов
              </select> -->


            <label class="create-task__executor">Исполнитель</label>
            <select class="create-task__executor-select" v-model="assignee">
              <option class="create-task__executor-option" value="">Не назначен</option>
              <!-- тут будут исполнители -->
            </select>
          </div>

          <div class="create-task__btns">
            <button class="create-task__btn-cancel" type="button" @click="cancel">Отмена</button>
            <button class="create-task__btn-create" type="submit">Создать задачу</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import IconDropdown from '@/components/Button/IconDropdown.vue';

export default {
  components: {
    IconDropdown,
  },
  props: {
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      title: '',
      description: '',
      project: '',
      assignee: '',

      active: false,
      customIconPath: 'M6.99999 4.95L2.04999 0L0.635986 1.414L6.99999 7.778L13.364 1.414L11.95 0L6.99999 4.95Z',
      customIconWidth: '14',
      customIconHeight: '8',
      customIconViewBox: '0 0 14 8',
    };
  },
  methods: {
    toggleDropdown() {
      if (!this.active) {
        this.active = true;
        this.$nextTick(() => {
          this.addClickOutsideEvent();
        });
      } else {
        this.active = false;
        this.removeClickOutsideEvent();
      }
    },
    addClickOutsideEvent() {
      document.addEventListener('click', this.handleOutsideClick);
    },
    removeClickOutsideEvent() {
      document.removeEventListener('click', this.handleOutsideClick);
    },
    handleOutsideClick(event) {
      if (
        this.$refs.menuBtn &&
        this.$refs.menuBtnSubList &&
        !this.$refs.menuBtn.contains(event.target) &&
        !this.$refs.menuBtnSubList.contains(event.target)
      ) {
        this.active = false;
        this.removeClickOutsideEvent();
      }
    },
    createTask() {
      // Обработка создания задачи, например, отправка данных на сервер
    },
    cancel() {
      // Обработка отмены создания задачи, например, перенаправление на другую страницу
    },

  },
};
</script>

<style lang="scss">
@import "@/components/Tasks/CreateTask.scss";
</style>
