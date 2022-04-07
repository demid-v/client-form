<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Адрес</legend>

    <div class="form__group">
      <label for="index" class="form__label form__label-block">Индекс</label>
      <input
        type="text"
        id="index"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label for="country" class="form__label form__label-block">Страна</label>
      <input
        type="text"
        id="country"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label for="region" class="form__label form__label-block">Область</label>
      <input
        type="text"
        id="region"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label
        for="city"
        class="form__label form__label-block form__label-required"
        >Город</label
      >
      <input
        type="text"
        id="city"
        class="form__field form__wide-field form__text-field"
        v-model.trim="city"
        @input="setCity($event.target.value)"
      /><br />
      <div
        class="error"
        :class="{ error_show: $v.city.$error }"
        v-if="!$v.city.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label for="street" class="form__label form__label-block">Улица</label>
      <input
        type="text"
        id="street"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label for="building" class="form__label form__label-block">Дом</label>
      <input
        type="text"
        id="building"
        class="form__field form__wide-field form__text-field"
      />
    </div>
  </fieldset>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      city: "",
    };
  },
  validations: {
    city: {
      required,
    },
  },

  methods: {
    setCity(value) {
      this.city = value;
      this.$v.city.$touch();
    },
  },
};
</script>
