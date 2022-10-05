<template>
  <div class="control columns is-vcentered p-0 m-0">
    <label
      for="input"
      class="column is-pulled-left is-three-quarters">
        {{ label }}
    </label>
    <CustomInput
      class="is-pulled-right p-0 pr-1 m-0 is-one-quarter"
      id="input"
      name="input"
      @input="$emit('update:value', $event.target.value)"
      :value="value"
      />
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'NumberInputField',
  components: {
    CustomInput,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>
<style scoped>
.active {
  background-color: hsl(204, 86%, 53%);
  color: hsl(0, 0%, 96%);
}
</style>
