<script>
import { defineAsyncComponent } from "vue";

const sizes = {
  sm: {
    size: 16,
    strokeWidth: 1,
  },
  md: {
    size: 24,
    strokeWidth: 1,
  },
  lg: {
    size: 32,
    strokeWidth: 2,
  },
  xl: {
    size: 48,
    strokeWidth: 2.5,
  },
};

export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "var:slate",
    },

    size: {
      type: String,
      default: "md",
      validator: (val) => Object.keys(sizes).includes(val),
    },

    hoverColor: [Boolean, String],
  },

  computed: {
    dynamicComponent() {
      return defineAsyncComponent(() =>
        import(`./icons/${this.name.toLowerCase()}.vue`)
      );
    },

    colorBind() {
      return this.getVarOrColorValue(this.color);
    },

    hoverColorBind() {
      if (!this.hoverColor) return;

      if (this.hoverColor === true) return "white";
      return this.getVarOrColorValue(this.hoverColor);
    },

    svgSize() {
      return sizes[this.size].size;
    },

    strokeWidth() {
      return sizes[this.size].strokeWidth;
    },
  },

  methods: {
    getVarOrColorValue(str) {
      return str.startsWith("var:")
        ? str.replace(/^var:/, "var(--q-") + ")"
        : str;
    },
  },
};
</script>

<template>
  <component
    :is="dynamicComponent"
    class="svg-icon"
    :width="svgSize"
    :height="svgSize"
    :stroke-width="strokeWidth"
    :class="{ 'cursor-pointer add-hover': !!hoverColor }"
  />
</template>

<style lang="scss" scoped>
.svg-icon {
  color: v-bind(colorBind);
  transition: color 0.2s ease-in-out;

  &.add-hover:hover {
    color: v-bind(hoverColorBind);
  }
}
</style>
