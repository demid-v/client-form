<template>
  <div class="carousel">
    <div class="carousel__form">
      <h1 class="carousel__header">Форма клиента</h1>
      <div class="carousel__wrapper">
        <button
          v-show="activeFieldset > 1"
          class="carousel__button carousel__button-prev"
          @click="showPrevCard"
        >
          <Next />
        </button>
        <div class="carousel__window">
          <form
            @submit.prevent="submit"
            name="client-form"
            id="client-form"
            class="client-form carousel__cards"
            :class="fieldsetClassObj[activeFieldset] + '-active'"
            ref="carouselCards"
          >
            <component v-for="(card, index) in cards" :is="card" :key="index" />
          </form>
        </div>
        <button
          v-show="activeFieldset < 3"
          class="carousel__button carousel__button-next"
          @click="showNextCard"
        >
          <Next />
        </button>
      </div>
      <button
        type="submit"
        form="client-form"
        value="Submit"
        class="form__submit-button"
      >
        Создать
      </button>
    </div>
  </div>
</template>

<script>
import Attributes from "./Attributes.vue";
import Address from "./Address.vue";
import Passport from "./Passport.vue";
import Next from "../assets/icons/Next.vue";

export default {
  components: { Attributes, Address, Passport, Next },

  data() {
    return {
      cards: [Attributes, Address, Passport],
      activeFieldset: 1,
      fieldsetClassObj: { 1: "first", 2: "second", 3: "third" },
    };
  },

  methods: {
    showPrevCard() {
      this.activeFieldset--;
    },
    showNextCard() {
      this.activeFieldset++;
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss">
.carousel {
  display: block;
  position: relative;
  margin: auto;
  height: 100%;
}

.carousel__header {
  text-align: center;
  margin-bottom: 30px;
}

.carousel__wrapper {
  position: relative;
  width: 600px;
}

.carousel__form {
  display: flex;
  flex-direction: column;
}

.carousel__window {
  position: relative;
  width: 500px;
  height: 700px;
  overflow-x: hidden;
  margin: 0 auto;
}

.carousel__cards {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.5s;
}

.first-active {
  left: 0px;
}
.second-active {
  left: -500px;
}

.third-active {
  left: -1000px;
}

.carousel__button {
  position: absolute;
  top: 0px;
  width: 120px;
  height: 100%;
  font-size: 100pt;
  border: 0px;
  opacity: 0.4;
  transition: opacity 0.5s;
  cursor: pointer;
  background: linear-gradient(
    -0.25turn,
    rgba(239, 239, 239, 1),
    rgba(239, 239, 239, 0.1)
  );
}

.carousel__button > svg {
  width: 50%;
}

.carousel__button:hover {
  opacity: 1;
}

.carousel__button-prev {
  transform: scaleX(-1) translateX(100%);
  left: 0;
}

.carousel__button-next {
  right: 0;
  transform: translateX(100%);
}

.form__fieldset {
  padding: 40px 60px;
  margin: 20px;
  width: 460px;
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

.form__field:not(:last-child) {
  margin-bottom: 3px;
}

.form__wide-field {
  width: 100%;
}

.form__label {
  margin-bottom: 3px;
}

.form__label-block {
  display: block;
}

.form__label-inline {
  padding-right: 8px;
}

.form__label-required::after {
  content: "\002A";
}

.form__submit-button {
  width: 150px;
  height: 45px;
  margin: 10px auto 0;
  background-color: rgb(159, 189, 216);
  border: 1px solid black;
  font-size: 16pt;
}

.error {
  display: none;
  font-size: 11pt;
  font-style: italic;
}

.error_show {
  display: block;
}
</style>
