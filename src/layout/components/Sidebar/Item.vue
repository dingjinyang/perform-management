<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    meta: {
      type: Object,
      default: () => {
        return {
          title: "",
          icon: ""
        };
      }
    }
  },
  render(h, context) {
    const { icon, text } = context.props.meta;
    const vnodes = [];

    if (icon) {
      vnodes.push(<svg-icon icon-class={icon} style="margin-right:10px" />);
    }

    if (text) {
      vnodes.push(<span slot="title">{text}</span>);
    }
    return vnodes;
  }
};
</script>
