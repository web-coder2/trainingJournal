<template>
  <div class="page-wrapper">
    <nav class="navbar navbar-expand-md bg-dark navbar-dark">
      <router-link class="navbar-brand text-danger fst-italic" :to="'/'">TrainingJournal</router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li v-for="item in items" class="nav-item" :key="item.to">
            <router-link class="nav-link" :to="item.to">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid mt-5 mb-5">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: 'index', to: '/' },
        { label: 'login', to: '/login' },
        { label: 'workouts', to: '/workouts' },
        { label: 'trainings', to: '/trainings' },
      ],
    }
  },
}
</script>