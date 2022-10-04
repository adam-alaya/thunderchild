<template>
  <div class="modal" :class="{'is-active': isActive}">
    <div class="modal-background" @click="$emit('close-modal')" @keydown="()=>{}"></div>
    <div class="modal-content">
      <div class="section big-section">
        <header class="modal-card-head">
          <div class="modal-card-title logo">
            <span class="logo-left">Report</span><span class="logo-right">Bug</span>
          </div>
        </header>
        <div>
          <div class="inputs">
            <CustomInput label="Name" value="" isText class="text-input"/>
            <CustomInput label="Slack Username" value="" isText class="text-input"/>
            <CustomInput label="Bug Description" value="" isTextarea class="text-input"/>
          </div>

        </div>
        <button
          class="button feedback-button"
          @click.prevent="() => {}">
          Send
        </button>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="$emit('close-modal')">
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CustomInput from '@/components/CustomInput.vue';

export default {
  name: 'Bug-Modal',
  components: {
    CustomInput,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-card-head {
  width: 100%;
  height: 50px;
}
.inputs {
  &.text-input {
    display: inline-block !important;
    width: 40px !important;
    margin: 5%;
  }
}
.feedback-button {
  font-family: 'Fira Sans', sans-serif;;
  background-color: #31BFA0;
  margin: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  border-radius: 8px;
  transition: all ease-in-out 0.2s;
  box-shadow: 1px 1px 12px 2px rgba(0,0,0,0.2);
  &:hover {
    transition: all ease-in-out 0.2s;
    box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.3);
    background-color: #37c0a3;
    border:2px solid #31BFA0;
    font-size: 1.1em;
  }
}
</style>
