<script setup>
  
import emailjs from "emailjs-com";

import { onMounted , ref} from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

onMounted(() => {
// Qena coordinates
  const qenaCoords = [26.1551, 32.7160];

  const map = L.map("map").setView(qenaCoords, 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(qenaCoords)
    .addTo(map)
    .bindPopup("Qena, Egypt")
    .openPopup();
});



// Email system


const email_name = ref("");
const email_email = ref("");
const email_phone = ref("");
const email_subject = ref("");
const email_message = ref("");
const sending = ref(false);
const success = ref(null);

const SERVICE_ID = "service_bjfqnoo";
const TEMPLATE_ID = "template_8ggw676";
const PUBLIC_KEY = "P0yJvk1SLUNZEQwD2";

function sendEmail() {
  sending.value = true;
  success.value = null;

  const templateParams = {
    name: email_name.value,
    email: email_email.value,
    phone: email_phone.value,
    subject: email_subject.value,
    message: email_message.value
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      success.value = true;
      email_name.value = "";
      email_email.value = "";
      email_phone.value = "";
      email_subject.value = "";
      email_message.value = "";
    })
    .catch(() => {
      success.value = false;
    })
    .finally(() => {
      sending.value = false;
    });
}

</script>


<!-- <script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      loading: false,
      success: false,
      error: false,
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.success = false;
      this.error = false;

      const formData = new FormData();
      formData.append("access_key", "b5167821-b20f-4266-a56a-0dab15ffe3d7");
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("message", this.form.message);

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.success) {
          this.success = true;
          this.form = { name: "", email: "", message: "" };
        } else {
          this.error = true;
        }
      } catch (err) {
        this.error = true;
      }

      this.loading = false;
    },
  },
};
</script> -->

<template>
    <!-- <div id="map" style="height: 400px;width: 100%;"></div> -->

      <section
      
      class="main-section contact"
      id="review"
 
    >
      <div class="form" dir="ltr">
        <form
           @submit.prevent="sendEmail"

          id="reviewForm"
          action=""
          method="post"
          class="review-form"
          style="text-align: left;height: 101%;"
        >
          <!-- <h2 class="heading-title" style="text-align: center;" dir="rtl" lang="ar">اترك رأيك</h2> -->

          <div class="flex">
            

            <div class="inputBox">
              <span>Name :</span>
              <input type="text" v-model="email_name" id="nameInput" placeholder="Enter your name" name="mailname" required />
            </div>

            <div class="inputBox">
              <span>Your email :</span>
              <input type="email" v-model="email_email" id="emailInput" placeholder="Enter your email" name="mailemail" required />
            </div>

            <div class="inputBox">
              <span>Phone (whatsapp preferred) :</span>
              <input type="tel" v-model="email_phone" id="phoneInput" placeholder="Enter your phone" name="mailphone" />
            </div>

            <div class="inputBox">
              <span>Subject :</span>
              <!-- <input type="text" id="subjectInput" placeholder="Enter subject" name="mailsubject" /> -->
              <select name="" v-model="email_subject" id="subjectInput" required>
                <option value="">Choose a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Freelance Opportunity">Freelance Opportunity</option>
                <option value="Website Development">Website Development</option>
                <option value="Web Application Development">Web Application Development</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Feedback or Suggestions">Feedback or Suggestions</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="inputBox">
              <span>Message :</span>

              <textarea
              v-model="email_message"
                class="form-control"
                id="bodyInput"
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
          </div>

          <div class="inputBox inputBox-btns" id="sendmsg-container">
            
            

     <p  v-if="success === true" class="success">
      Message sent successfully
    </p>

    <p v-if="success === false" class="error">
      Failed to send message. Try again.
    </p>

    <button id="sendmsg"  class="send-msg-btn" name="send" :disabled="sending">
      {{ sending ? "Sending..." : "Send" }}
    </button>
           </div>
           
        </form>
      </div>

      <div class="map-container" id="map-container">
           <div class="map" id="map" ></div>
      </div>
    </section>

</template>


<style scoped>

  

.contact .map-container{
  flex: 1 1 50rem;
}
.contact .map-container .map{
    /* width: 100%; */
    height: 100%;
    border-style: solid;
    border-radius: 2rem;
}



.contact .form{
    flex: 1 1 41rem;

}

.contact .form .review-form{
    
    padding: 2rem;
    width: 100%;
    background-color: rgba(35, 35, 38, 0.859);
    border-radius: 2rem;
    border-style: solid;
    border-color: var(--light-bg);
}

.contact .form .review-form .flex{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}



.contact  .form .review-form .flex .inputBox{
    flex: 1 1 41rem;
}


.contact  .form .review-form .flex .inputBox input,select{
    width:100%;
    padding: 1.2rem 1.4rem;
    font-size:1.6rem;
    color:var(--light-black);
    text-transform: none;
    margin-top: 1.5rem;
    border:var(--border);
    border-radius: 1rem;
    text-align: left;
    background-color: rgba(92, 92, 95, 0.481);

}
.contact  .form .review-form .flex .inputBox textarea{
    width:100%;
    padding: 1.2rem 1.4rem;
    font-size:1.6rem;
    color:var(--light-black);
    text-transform: none;
    margin-top: 1.5rem;
    border:var(--border);
    border-radius: 1rem;
    resize: none;
    text-align: left;
    background-color: rgba(92, 92, 95, 0.481);
}
.contact  .form .review-form .flex .inputBox input:focus{
    background: var(--black);
    color: var(--white);
}


.contact .form .review-form .flex .inputBox input:focus::placeholder{
    color: var(--light-white);
}

.contact .form .review-form .flex .inputBox span{
    font-size:1.5rem;
    color: var(--light-black);

}

.contact .form .review-form .inputBox-btns{
 
display: flex;
justify-content: right;
flex-wrap: wrap;
align-items: center;
gap: 1rem;
}


.contact .form .review-form .inputBox-btns .success{
  min-width: 1rem; width: fit-content;color: greenyellow !important;font-size: 1.5rem;font-weight: 600;margin-top: 2rem;
}

.contact .form .review-form .inputBox-btns .error{
  min-width: 1rem; width: fit-content;color: red !important;font-size: 1.5rem;font-weight: 600;margin-top: 2rem;
}

.contact .form .review-form .send-msg-btn{
    margin-top: 2rem;
    font-size:2rem;
    font-weight: 500;
    border-radius: 2rem;
    background-color: #285AEB;
    color: #eee;
    text-decoration: none;
    padding: 7px 18px;
    margin-left: 0 !important;

    transition: 1s;


    cursor: pointer;
}

.contact .form .review-form .send-msg-btn:hover{
    background-color: #2859ebd2;


}




.contact  .form .review-form .flex .inputBox textarea:focus{
    background: var(--black);
    color: var(--white);
}


.contact .form .review-form .flex .inputBox textarea:focus::placeholder{
    color: var(--light-white);
}
.contact .form .review-form .flex .inputBox textarea::placeholder{
    color: var(--light-black);
}


</style>