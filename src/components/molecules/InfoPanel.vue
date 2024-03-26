<template>
    <section class="info">
        <div class="info-panel">
            <header class="info-header">
                <h1 class="title">Saldo total</h1>
            </header>
            <div class="info-main">
                <span class="result">R$ {{ accountValue }}</span>
                <img src="@/assets/share.svg" width="24px" />
                <p class="performance">rendendo 124%</p>
            </div>
    
            <footer class="info-footer">
                <img src="@/assets/bubble.svg" width="24px" />
                <p class="text-footer">Painel de estatísticas</p>
                <span class="span-footer">últimos 7 dias</span>
            </footer>
        </div>
        <div class="info-buttons">
            <BaseButton color="send" size="lg">
                <img style="margin-right: 26px" src="@/assets/send.svg" />
                Enviar dinheiro
            </BaseButton>
            <BaseButton color="send" size="sm">+</BaseButton>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
import BaseButton from "../atoms/BaseButton.vue";

export default {
  name: "InfoCard",
  components: { BaseButton },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      account: state => state.account
    }),
    accountValue() {
      return this.account.value
    }
  }
}
</script>

<style scoped>
.info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: white;
    width: 100%;
    height: 100px;
    background: #202027;
    margin: 80px 0px 60px 0px;
}

.info-panel {
    width: 350px;
    margin: 0px 0px 0px 0vw;
    height: 220px;
}

.title {
    margin: 30px 0px 0px 0px;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
}

.info-footer {
    width: 320px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 10px;
    height: 26%;
}

.text-footer {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
}

.span-footer {
    font-size: 14px;
    font-weight: 500;
    color: #A3A3A3;
}

.title {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
}

.info-body {
    display: flex;
    justify-content: flex-start;
    gap: 150px;
    padding: 5px;
    height: 30%;
}

.info-main {
    display: flex;
    gap: 10px;
}

.result {
    margin-top: 4px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
}

.performance {
    margin-top: 18px;
    font-size: 14px;
    font-weight: 400;
}

.info-buttons {
    display: flex;
    gap: 10px;
    margin-top: 50px;
}
</style>
