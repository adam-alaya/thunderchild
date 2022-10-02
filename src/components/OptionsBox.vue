<template>
  <div class="section options">
    <h1 class="mb-1">Options</h1>
    <form>
      <div class="radiobtn">
        <input
          type="radio"
          id="simple"
          v-model="typeSelector"
          :value=TYPE.SIMPLE
          @change="$emit('typeSelector', TYPE.SIMPLE)"
        />
        <label for="simple">Simple</label>
      </div>
      <div class="radiobtn">
        <input
          type="radio"
          id="complete"
          v-model="typeSelector"
          :value=TYPE.COMPLETE
          @change="$emit('typeSelector', TYPE.COMPLETE)"
          checked
        />
        <label for="complete">Complete</label>
      </div>
    </form>
    <div v-if="typeSelector===TYPE.COMPLETE">
      <hr />
      <form>
        <div class="radiobtn">
          <input
            type="radio"
            id="optIn"
            name="optSelector"
            value="optIn"
            @change="$emit('optSelector', SELECTIONS.OPT_IN)"
          />
          <label for="optIn">Opt In</label>
        </div>
        <div class="radiobtn">
          <input
            type="radio"
            id="optOut"
            name="optSelector"
            value="optOut"
            @change="$emit('optSelector', SELECTIONS.OPT_OUT)"
            checked
          />
          <label for="optOut">Opt Out</label>
        </div>
      </form>
    </div>
    <hr />
    <CustomInput
      label="Client ID"
      :value="data.clientId"
      @input="(ev)=> this.data.clientId = parseFloat(ev.target.value)"
    />
    <CustomInput
      label="Client Name"
      :value="data.clientName"
      is-text
      @input="(ev)=> this.data.clientName = ev.target.value"
    />
    <CustomInput
      label="Claim Date"
      :value="data.claimDate"
      is-date
      @input="(ev)=> this.data.claimDate = ev.target.value"
    />
    <button
      class="button download-button"
      @click.prevent="$emit('download', data)">
        Download
    </button>
  </div>
</template>
<script>

import CustomInput from '@/components/CustomInput.vue';
import { SELECTIONS, TYPE } from '@/components/constants';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'OptionsBox',
  components: {
    CustomInput,
  },
  props: {},
  data() {
    return {
      SELECTIONS,
      TYPE,
      typeSelector: TYPE.COMPLETE,
      data: {
        claimDate: null,
        clientName: null,
        clientId: null,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
$accentcolor: #fff;
$lightcolor: #fff;
$darkcolor: #444;

.options {
  position: relative;
}

.download-button {
  font-family: 'Fira Sans', sans-serif;;
  background-color: #31BFA0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 8px 8px;
  transition: all ease-in-out 0.2s;
  box-shadow: 1px 1px 12px 2px rgba(0,0,0,0.2);
  &:hover {
    transition: all ease-in-out 0.2s;
    box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.3);
    background-color: #37c0a3;
    border:2px solid #31BFA0;
  }
}

hr {
  border: 2px solid #eee;
}

form {
  max-width: 250px;
  position: relative;
  font-size: 15px;
}
.radiobtn {
  position: relative;
  display: block;
  label {
    display: block;
    background: lighten($accentcolor, 30%);
    color: $darkcolor;
    border-radius: 5px;
    padding: 0 10px;
    border: 2px solid lighten($accentcolor, 20%);
    margin-bottom: 5px;
    cursor: pointer;
    &:after,
    &:before {
      content: "";
      position: absolute;
      right: 11px;
      top: 0;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      background: lighten($accentcolor, 15%);
      border: 1px solid $darkcolor;
    }
    &:before {
      background: transparent;
      transition: 0.1s width cubic-bezier(0.075, 0.82, 0.165, 1) 0s,
      0.3s height cubic-bezier(0.075, 0.82, 0.165, 2) 0.1s;
      z-index: 2;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 13px;
      background-position: center;
      width: 0;
      height: 0;
      background-color: #31BFA0;
    }
  }
  input[type="radio"] {
    display: none;
    position: absolute;
    width: 100%;
    appearance: none;
    &:checked + label {
      background: lighten($accentcolor, 15%);
      animation-name: blink;
      animation-duration: 1s;
      border-color: $accentcolor;
      &:after {
        background: $accentcolor;
      }
      &:before {
        top: 3px;
        right: 14px;
        width: 17px;
        height: 17px;
      }
    }
  }
}

@keyframes blink {
  0% {
    background-color: lighten($accentcolor, 15%);
  }
  10% {
    background-color: lighten($accentcolor, 15%);
  }
  11% {
    background-color: lighten($accentcolor, 20%);
  }
  29% {
    background-color: lighten($accentcolor, 20%);
  }
  30% {
    background-color: lighten($accentcolor, 15%);
  }
  50% {
    background-color: lighten($accentcolor, 20%);
  }
  45% {
    background-color: lighten($accentcolor, 15%);
  }
  50% {
    background-color: lighten($accentcolor, 20%);
  }
  100% {
    background-color: lighten($accentcolor, 15%);
  }
}
</style>
