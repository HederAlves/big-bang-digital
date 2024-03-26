<template>
    <section class="card">
        <header class="card-header">
            <h1 class="title">{{ title }}</h1>
        </header>
    
        <body class="card-body">
            <span class="result">R$ {{ value }}</span>
        </body>
    
        <footer class="card-footer">
            <BaseButton color="primary-outline" size="lg">Ver mais detalhes</BaseButton>
            <BaseButton color="primary-outline" size="sm">
                <img src="@/assets/menu.svg" />
            </BaseButton>
        </footer>
    </section>
</template>

<script>
import BaseButton from "../atoms/BaseButton.vue"

export default {
  name: "InfoCard",
  components: { BaseButton },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
    color: black;
    width: 351px;
    height: 209px;
    box-shadow: 0px 7px 30px 0px #00000012;
    background: #ffffff;
}

.card-header {
    padding: 18px;
    height: 30%;
}

.title {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
}

.card-body {
    padding: 5px;
    height: 30%;
}

.result {
    padding: 18px;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
}

.card-footer {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    padding: 5px;
    height: 30%;
}
</style>
