<template>
  <form @submit.prevent="submit" name="form" id="form" class="form">
    <h1 class="form__name">Форма клиента</h1>
    <div class="form__data">
      <!-- Часть формы "основные данные" -->
      <fieldset class="form__fieldset">
        <legend class="form__legend">Основные данные</legend>

        <div class="form__group">
          <label
            for="last-name"
            class="form__label form__label_block form__label_required"
            >Фамилия</label
          >
          <input
            type="text"
            id="last-name"
            class="form__field form__field_wide form__text-field"
            v-model.trim="mainInfo.lastName"
            @input="setLastName($event.target.value)"
          /><br />
          <div
            class="form__error"
            :class="{ form__error_show: $v.mainInfo.lastName.$error }"
            v-if="!$v.mainInfo.lastName.required"
          >
            Это поле обязательно.
          </div>
        </div>

        <div class="form__group">
          <label
            for="first-name"
            class="form__label form__label_block form__label_required"
            >Имя</label
          >
          <input
            type="text"
            id="first-name"
            class="form__field form__field_wide form__text-field"
            v-model.trim="mainInfo.firstName"
            @input="setFirstName($event.target.value)"
          /><br />
          <div
            class="form__error"
            :class="{ form__error_show: $v.mainInfo.firstName.$error }"
            v-if="!$v.mainInfo.firstName.required"
          >
            Это поле обязательно.
          </div>
        </div>

        <div class="form__group">
          <label for="middle-name" class="form__label form__label_block"
            >Отчество</label
          >
          <input
            type="text"
            id="middle-name"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label
            for="birthdate"
            class="form__label form__label_block form__label_required"
            >Дата рождения</label
          >
          <input
            type="date"
            id="birthdate"
            class="form__field form__field_wide form__text-field"
            v-model.trim="mainInfo.birthdate"
            @input="setBirthdate($event.target.value)"
          /><br />
          <div
            class="form__error"
            :class="{ form__error_show: $v.mainInfo.birthdate.$error }"
            v-if="!$v.mainInfo.birthdate.required"
          >
            Это поле обязательно.
          </div>
        </div>

        <div class="form__group">
          <label
            for="phone-number"
            class="form__label form__label_block form__label_required"
            >Номер телефона</label
          >
          <input
            type="tel"
            format="7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
            id="phone-number"
            class="form__field form__field_wide form__text-field"
            v-model.trim="mainInfo.phoneNumber"
            @input="setPhoneNumber($event.target.value)"
          /><br />
          <span
            class="form__error"
            :class="{ form__error_show: $v.mainInfo.phoneNumber.$error }"
            v-if="!$v.mainInfo.phoneNumber.required"
          >
            Это поле обязательно. </span
          ><span
            class="form__error"
            :class="{ form__error_show: $v.mainInfo.phoneNumber.$error }"
            v-if="!$v.mainInfo.phoneNumber.isPhoneNumber"
            >Недействительный номер.</span
          >
        </div>

        <div class="form__group">
          <label for="sex" class="form__label form__label_block">Пол</label>
          <input
            type="text"
            id="sex"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label
            for="client-group"
            class="form__label form__label_block form__label_required"
            >Группа клиентов</label
          >
          <select
            id="client-group"
            class="form__field form__field_wide form__multiselect-field"
            v-model.trim="mainInfo.clientGroup"
            @input="setClientGroup($event.target.value)"
            multiple
          >
            <option value="vip">VIP</option>
            <option value="problematic">Проблемные</option>
            <option value="mi">ОМС</option></select
          ><br />
          <div
            class="form__error"
            :class="{ form__error_show: $v.mainInfo.clientGroup.$error }"
            v-if="!$v.mainInfo.clientGroup.required"
          >
            Это поле обязательно.
          </div>
        </div>

        <div class="form__group">
          <label for="doctor" class="form__label form__label_block"
            >Лечащий врач</label
          >
          <select
            class="form__field form__field_wide form__select-field"
            id="doctor"
          >
            <option disabled selected value>-- Выбор врача --</option>
            <option value="ivanov">Иванов</option>
            <option value="zhakharov">Захаров</option>
            <option value="chernyshova">Чернышева</option></select
          ><br />
        </div>

        <div class="form__group">
          <label for="disable-sms" class="form__label form__label_inline"
            >Не отправлять СМС</label
          >
          <input
            id="disable-sms"
            type="checkbox"
            class="form__field form__checkbox-field"
          />
        </div>
      </fieldset>

      <!-- Часть формы "адрес" -->
      <fieldset class="form__fieldset">
        <legend class="form__legend">Адрес</legend>

        <div class="form__group">
          <label for="index" class="form__label form__label_block"
            >Индекс</label
          >
          <input
            type="text"
            id="index"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label for="country" class="form__label form__label_block"
            >Страна</label
          >
          <input
            type="text"
            id="country"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label for="region" class="form__label form__label_block"
            >Область</label
          >
          <input
            type="text"
            id="region"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label
            for="city"
            class="form__label form__label_block form__label_required"
            >Город</label
          >
          <input
            type="text"
            id="city"
            class="form__field form__field_wide form__text-field"
            v-model.trim="address.city"
            @input="setCity($event.target.value)"
          /><br />
          <div
            class="form__error"
            :class="{ form__error_show: $v.address.city.$error }"
            v-if="!$v.address.city.required"
          >
            Это поле обязательно.
          </div>
        </div>

        <div class="form__group">
          <label for="street" class="form__label form__label_block"
            >Улица</label
          >
          <input
            type="text"
            id="street"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label for="building" class="form__label form__label_block"
            >Дом</label
          >
          <input
            type="text"
            id="building"
            class="form__field form__field_wide form__text-field"
          />
        </div>
      </fieldset>

      <!-- Часть формы "паспорт" -->
      <fieldset class="form__fieldset">
        <legend class="form__legend">Паспорт</legend>

        <div class="form__group">
          <label
            for="doctype"
            class="form__label form__label_block form__label_required"
            >Тип документа</label
          >
          <select
            id="doctype"
            class="form__field form__field_wide form__select-field"
            v-model.trim="passport.doctype"
            @input="setDoctype($event.target.value)"
          >
            <option value="passport">Паспорт</option>
            <option value="birth-certificate">Свидетельство о рождении</option>
            <option value="driving-license">Вод. удостоверение</option></select
          ><br />
          <div
            class="form__error"
            :class="{ form__error_show: $v.passport.doctype.$error }"
            v-if="!$v.passport.doctype.required"
          >
            Это поле обязательно.
          </div>
        </div>

        <div class="form__group">
          <label for="batch" class="form__label form__label_block">Серия</label>
          <input
            type="text"
            id="batch"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label for="number" class="form__label form__label_block"
            >Номер</label
          >
          <input
            type="text"
            id="number"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label for="issued-by" class="form__label form__label_block"
            >Кем выдан</label
          >
          <input
            type="text"
            id="issued-by"
            class="form__field form__field_wide form__text-field"
          /><br />
        </div>

        <div class="form__group">
          <label
            for="date-of-issue"
            class="form__label form__label_block form__label_required"
            >Дата выдачи</label
          >
          <input
            type="text"
            id="date-of-issue"
            class="form__field form__field_wide form__text-field"
            v-model.trim="passport.dateOfIssue"
            @input="setDateOfIssue($event.target.value)"
          />
          <div
            class="form__error"
            :class="{ form__error_show: $v.passport.dateOfIssue.$error }"
            v-if="!$v.passport.dateOfIssue.required"
          >
            Это поле обязательно.
          </div>
        </div>
      </fieldset>
    </div>

    <div class="form__button-wrapper">
      <button type="submit" class="form__button-submit">Создать</button>
    </div>

    <div
      class="form__message-wrapper"
      :class="{ 'form__message-wrapper_show': showSuccessMessage }"
    >
      <div class="form__message">Запись создана</div>
    </div>
  </form>
</template>

<script>
import { required, helpers } from "vuelidate/lib/validators";

const isPhoneNumber = helpers.regex(
  "phoneNumber",
  /^(7[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2})*$/
);

export default {
  data() {
    return {
      showSuccessMessage: false,
      mainInfo: {
        lastName: "",
        firstName: "",
        birthdate: "",
        phoneNumber: "",
        clientGroup: [],
      },
      address: {
        city: "",
      },
      passport: {
        doctype: "",
        dateOfIssue: "",
      },
    };
  },

  validations: {
    mainInfo: {
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
        isPhoneNumber,
      },
      clientGroup: {
        required,
      },
    },
    address: {
      city: {
        required,
      },
    },
    passport: {
      doctype: {
        required,
      },
      dateOfIssue: {
        required,
      },
    },
  },

  methods: {
    setLastName(value) {
      this.mainInfo.lastName = value;
      this.$v.mainInfo.lastName.$touch();
    },
    setFirstName(value) {
      this.mainInfo.firstName = value;
      this.$v.mainInfo.firstName.$touch();
    },
    setBirthdate(value) {
      this.mainInfo.birthdate = value;
      this.$v.mainInfo.birthdate.$touch();
    },
    setPhoneNumber(value) {
      this.mainInfo.phoneNumber = value;
      this.$v.mainInfo.phoneNumber.$touch();
    },
    setClientGroup(value) {
      const index = this.mainInfo.clientGroup.indexOf(value);
      if (index === -1) {
        this.mainInfo.clientGroup.push(value);
      } else {
        this.mainInfo.clientGroup.splice(index, 1);
      }

      this.$v.mainInfo.clientGroup.$touch();
    },
    setCity(value) {
      this.address.city = value;
      this.$v.address.city.$touch();
    },
    setDoctype(value) {
      this.passport.doctype = value;
      this.$v.passport.doctype.$touch();
    },
    setDateOfIssue(value) {
      this.passport.dateOfIssue = value;
      this.$v.passport.dateOfIssue.$touch();
    },

    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showSuccessMessage = true;
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  position: relative;
  max-width: 1500px;
  margin: 50px auto;
  padding: 0 50px;
}

.form__name {
  text-align: center;
  margin-bottom: 40px;
}

.form__data {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 70px;
  justify-content: center;
}

.form__fieldset {
  padding: 40px 60px;
  // width: calc((100% - (50px * 2)) / 3);
  min-width: 400px;
  list-style: none;
  background-color: rgba(199, 225, 255, 0.541);
  border-color: rgb(0, 0, 0);
  border-radius: 20px;
}

.form__legend {
  text-align: center;
  letter-spacing: 1.2pt;
}

.form__group:not(:last-child) {
  margin-bottom: 10px;
}

.form__field {
  padding: 1px 2px;
}

.form__field:not(:last-child) {
  margin-bottom: 3px;
}

.form__field_wide {
  width: 100%;
}

.form__label {
  margin-bottom: 3px;
}

.form__label_block {
  display: block;
}

.form__label_inline {
  padding-right: 8px;
}

.form__label_required::after {
  content: "\002A";
}

.form__error {
  display: none;
  font-size: 11pt;
  font-style: italic;
}

.form__error_show {
  display: block;
}

.form__button-wrapper {
  text-align: center;
}

.form__button-submit {
  width: 150px;
  height: 45px;
  background-color: rgb(159, 189, 216);
  border: 1px solid black;
  font-size: 16pt;
}

.form__message-wrapper {
  display: none;
  position: absolute;
  width: 200px;
  height: 50px;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  vertical-align: middle;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
}

.form__message {
  position: relative;
  top: 45%;
  transform: translateY(-50%);
}

.form__message::before {
  content: "✔";
  color: rgb(69, 221, 115);
  margin-right: 5px;
}

.form__message-wrapper_show {
  display: block;
}
</style>
