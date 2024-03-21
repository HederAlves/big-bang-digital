<template>
  <button :class="propsClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "sm",
    },
  },
  computed: {
    propsClass() {
      return ["btn", `btn-${this.color}`, `btn-${this.size}`];
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn {
  font: "Poppins";
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: transparent;
  border: none;
}

.btn-primary-outline {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  background-color: transparent;
  color: #686868;
  border: 1px solid #686868;
  background: #ffffff;
}

.btn-secondary {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  background-color: #ff6969;
  color: #ffffff;
  border: none;
}

.btn-send {
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  background-color: #7986fe;
  color: #ffffffff;
  border: none;
}

.btn-sm {
  width: 50px;
  height: 37px;
}

.btn-lg {
  width: 254px;
  height: 37px;
}
</style>
