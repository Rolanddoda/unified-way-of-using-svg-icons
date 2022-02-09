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
const defaults = {
  color: "var:primary",
  varPrefix: "q-",
  hoverColor: "white",
  size: sizes[3],
};

export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: defaults.color,
    },

    size: {
      type: String,
      default: defaults.size,
      validator: (val) => Object.keys(sizes).includes(val),
    },

    hoverColor: [Boolean, String],
  },

  computed: {
    dynamicComponent() {
      const name = this.name;

      return defineAsyncComponent(() =>
        import(`./icons/${name.toLowerCase()}.vue`)
      );
    },

    colorBind() {
      const color = !this.color ? defaults.color : this.color;

      return this.getVarOrColorValue(color);
    },

    hoverColorBind() {
      if (this.hoverColor === false) return;

      if (this.hoverColor === true || !this.hoverColor)
        return defaults.hoverColor;
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
        ? str.replace(/^var:/, `var(--${defaults.varPrefix}`) + ")"
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
    :class="{ 'add-hover': !!hoverColorBind }"
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
