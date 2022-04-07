<template>
  <fieldset class="form__fieldset">
    <legend class="form__legend">Основные данные</legend>

    <div class="form__group">
      <label
        for="last-name"
        class="form__label form__label-block form__label-required"
        >Фамилия</label
      >
      <input
        type="text"
        id="last-name"
        class="form__field form__wide-field form__text-field"
        v-model.trim="lastName"
        @input="setLastName($event.target.value)"
      /><br />
      <div
        class="error"
        :class="{ error_show: $v.lastName.$error }"
        v-if="!$v.lastName.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label
        for="first-name"
        class="form__label form__label-block form__label-required"
        >Имя</label
      >
      <input
        type="text"
        id="first-name"
        class="form__field form__wide-field form__text-field"
        v-model.trim="firstName"
        @input="setFirstName($event.target.value)"
      /><br />
      <div
        class="error"
        :class="{ error_show: $v.firstName.$error }"
        v-if="!$v.firstName.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label for="middle-name" class="form__label form__label-block"
        >Отчество</label
      >
      <input
        type="text"
        id="middle-name"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label
        for="birthdate"
        class="form__label form__label-block form__label-required"
        >Дата рождения</label
      >
      <input
        type="text"
        id="birthdate"
        class="form__field form__wide-field form__text-field"
        v-model.trim="birthdate"
        @input="setBirthdate($event.target.value)"
      /><br />
      <div
        class="error"
        :class="{ error_show: $v.birthdate.$error }"
        v-if="!$v.birthdate.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label
        for="phone-number"
        class="form__label form__label-block form__label-required"
        >Номер телефона</label
      >
      <input
        type="text"
        id="phone-number"
        class="form__field form__wide-field form__text-field"
        v-model.trim="phoneNumber"
        @input="setPhoneNumber($event.target.value)"
      /><br />
      <div
        class="error"
        :class="{ error_show: $v.phoneNumber.$error }"
        v-if="!$v.phoneNumber.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label for="sex" class="form__label form__label-block">Пол</label>
      <input
        type="text"
        id="sex"
        class="form__field form__wide-field form__text-field"
      /><br />
    </div>

    <div class="form__group">
      <label
        for="client-group"
        class="form__label form__label-block form__label-required"
        >Группа клиентов</label
      >
      <select
        id="client-group"
        class="form__field form__wide-field form__multiselect-field"
        v-model.trim="clientGroup"
        @input="setClientGroup($event.target.value)"
        multiple
      >
        <option value="vip">VIP</option>
        <option value="problematic">Проблемные</option>
        <option value="mi">ОМС</option></select
      ><br />
      <div
        class="error"
        :class="{ error_show: $v.clientGroup.$error }"
        v-if="!$v.clientGroup.required"
      >
        Field is required
      </div>
    </div>

    <div class="form__group">
      <label for="doctor" class="form__label form__label-block"
        >Лечащий врач</label
      >
      <select
        class="form__field form__wide-field form__select-field"
        id="doctor"
      >
        <option value="ivanov">Иванов</option>
        <option value="zhakharov">Захаров</option>
        <option value="chernyshova">Чернышева</option></select
      ><br />
    </div>

    <div class="form__group">
      <label for="disable-sms" class="form__label form__label-inline"
        >Не отправлять СМС</label
      >
      <input
        id="disable-sms"
        type="checkbox"
        class="form__field form__checkbox-field"
      />
    </div>
  </fieldset>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      lastName: "",
      firstName: "",
      birthdate: "",
      phoneNumber: "",
      clientGroup: [],
    };
  },

  validations: {
    lastName: {
      required,
    },
    firstName: {
      required,
    },
    birthdate: {
      required,
    },
    phoneNumber: {
      required,
    },
    clientGroup: {
      required,
    },
  },

  methods: {
    setLastName(value) {
      this.lastName = value;
      this.$v.lastName.$touch();
    },
    setFirstName(value) {
      this.firstName = value;
      this.$v.firstName.$touch();
    },
    setBirthdate(value) {
      this.birthdate = value;
      this.$v.birthdate.$touch();
    },
    setPhoneNumber(value) {
      this.phoneNumber = value;
      this.$v.phoneNumber.$touch();
    },
    setClientGroup(value) {
      const index = this.clientGroup.indexOf(value);
      if (index === -1) {
        this.clientGroup.push(value);
      } else {
        this.clientGroup.splice(index, 1);
      }

      this.$v.clientGroup.$touch();
    },
  },
};
</script>
