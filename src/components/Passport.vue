<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Паспорт</legend>

    <div class="form__group">
      <label
        for="doctype"
        class="form__label form__label-block form__label-required"
        >Тип документа</label
      >
      <select
        id="doctype"
        class="form__field form__wide-field form__select-field"
        v-model.trim="doctype"
        @input="setDoctype($event.target.value)"
      >
        <option value="passport">Паспорт</option>
        <option value="birth-certificate">Свидетельство о рождении</option>
        <option value="driving-license">Вод. удостоверение</option></select
      ><br />
      <div
        class="error"
        :class="{ error_show: $v.doctype.$error }"
        v-if="!$v.doctype.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label for="batch" class="form__label form__label-block">Серия</label>
      <input
        type="text"
        id="batch"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label for="number" class="form__label form__label-block">Номер</label>
      <input
        type="text"
        id="number"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label for="issued-by" class="form__label form__label-block"
        >Кем выдан</label
      >
      <input
        type="text"
        id="issued-by"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label
        for="date-of-issue"
        class="form__label form__label-block form__label-required"
        >Дата выдачи</label
      >
      <input
        type="text"
        id="date-of-issue"
        class="form__field form__wide-field form__text-field"
        v-model.trim="dateOfIssue"
        @input="setDateOfIssue($event.target.value)"
      />
      <div
        class="error"
        :class="{ error_show: $v.dateOfIssue.$error }"
        v-if="!$v.dateOfIssue.required"
      >
        Field is required
      </div>
    </div>
  </fieldset>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      doctype: "",
      dateOfIssue: "",
    };
  },

  validations: {
    doctype: {
      required,
    },
    dateOfIssue: {
      required,
    },
  },

  methods: {
    setDoctype(value) {
      this.doctype = value;
      this.$v.doctype.$touch();
    },
    setDateOfIssue(value) {
      this.dateOfIssue = value;
      this.$v.dateOfIssue.$touch();
    },
  },
};
</script>
