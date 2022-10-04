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
          <form class="inputs" id="bug-form" ref="bug-form">
            <CustomInput
              label="Name"
              input-id="user_name"
              isText
              class="text-input"
              :value="user_name"
              @input="(ev)=> this.user_name = ev.target.value"
            />
            <CustomInput
              label="Slack Username"
              input-id="slack_username"
              isText
              class="text-input"
              :value="slack_username"
              @input="(ev)=> this.slack_username = ev.target.value"
            />
            <CustomInput
              label="Bug Description"
              input-id="message"
              isTextarea
              class="text-input"
              :value="message"
              @input="(ev)=> this.message = ev.target.value"
            />
            <button
              class="button feedback-button"
              @click.prevent="sendEmail"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
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
import emailjs from 'emailjs-com';

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
  data() {
    return {
      slack_username: '',
      user_name: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      try {
        emailjs.sendForm(
          process.env.VUE_APP_EMAIL_SERVICE_ID,
          process.env.VUE_APP_EMAIL_TEMPLATE_ID,
          this.$refs['bug-form'],
          process.env.VUE_APP_EMAIL_USER_ID,
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.user_name = '';
      this.slack_username = '';
      this.message = '';
      this.$emit('close-modal');
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
