<template>
  <div class="home">
    <DisclaimerMsg />
    <div class="columns">
    <BugModal :isActive="modalActive" @closeModal="toggleModal"/>
    <div class="column is-one-fifth">
      <OptionsBox
        :typeSelection="typeSelection"
        @download="downloadPaymentFile"
        @typeSelector="typeSelectionChange"
        @optSelector="optSelectionChange"
      />
    </div>
    <div class="column-content column is-four-fifths">
      <ComplexView
        ref="complexView"
        v-if="typeSelection===TYPE.COMPLETE"
        :opt-selection="optSelection"
      />
      <SimpleView ref="simpleView" v-if="typeSelection===TYPE.SIMPLE"/>
      <img src="../assets/bug.png"
           alt="report bug icon"
           class="is-pulled-right bug-container image is-32x32"
           @keydown="()=>{}"
           @click="toggleModal"
      />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import OptionsBox from '@/components/OptionsBox.vue';
import { SELECTIONS, TYPE } from '@/components/constants';
import DisclaimerMsg from '@/components/DisclaimerMsg.vue';

import '@vuepic/vue-datepicker/dist/main.css';
import ComplexView from '@/views/ComplexView.vue';
import SimpleView from '@/views/SimpleView.vue';
import BugModal from '@/components/BugModal.vue';

export default {
  name: 'HomeView',
  components: {
    DisclaimerMsg,
    BugModal,
    SimpleView,
    ComplexView,
    OptionsBox,
  },
  data() {
    return {
      SELECTIONS,
      TYPE,
      modalActive: false,
      optSelection: SELECTIONS.OPT_OUT,
      typeSelection: TYPE.COMPLETE,
    };
  },
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
    optSelectionChange(option) {
      this.optSelection = option;
    },
    typeSelectionChange(option) {
      this.typeSelection = option;
    },
    downloadPaymentFile(data) {
      const ref = this.typeSelection === TYPE.COMPLETE
        ? this.$refs.complexView : this.$refs.simpleView;
      ref.downloadPaymentFile(data);
    },
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,600&display=swap');
// For Testing
@mixin random-bgr() {
  background: rgb(random(255), random(255), random(255));
}

//.column {
//  @for $i from 0 to 6 {
//    &:nth-child(#{$i}) {
//      @include random-bgr();
//    }
//  }
//}

#app {
  min-height: 100vh;
  background-color: #D9D9D9;
}

header {
  background-color: #fff;
  width: 100vw;
  padding: 20px !important;
}

.home {
  padding: 0 10px;
  padding-right: 4%;
  background-color: #D9D9D9;
  padding-top: 20px !important;
  min-height: 100vh;
}
.bug-container {
  position: fixed !important;
  bottom: 10px;
  right: 50px;
  background-color: rgba(0,0,0,0);
  transition: all ease-in-out 0.2s;
  &:hover {
    transition: all ease-in-out 0.2s;
    scale: 120%;
  }
}

.column {
  padding-top: 0;
  padding-bottom: 0;
}

label.column {
  padding: 0.4em;
}

.columns:not(:last-child) {
  margin-bottom: 0;
}

.section {
  background-color: #fff;
  border-radius: 8px;
  margin: 7px 7px;
  padding: 0 !important;
  height: 250px;
  box-shadow: 2px 2px 12px 2px rgb(30 30 30 / 0.2);
  position: relative;
  &.big-section {
    height: 500px;
  }
  &.options {
    height: 550px;
  }
  * {
    text-align: left;
  }

  h1 {
    padding: 10px !important;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    font-family: 'Fira Sans', sans-serif;
  }

  .total-field {
    padding: 1px !important;
    background-color: #D9D9D9;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0 0 8px 8px;
  }

  .number-field {
    padding: 8px 10px !important;
    input {
      border: none;
    }
  }
}
</style>
