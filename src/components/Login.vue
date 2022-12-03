<template>
  <div class="container-body">
    <div class="container-main">
      <div class="campos">
        <div class="titulo"><h1>INGRESAR</h1></div>
        <label for=""><h2>Correo Electronico</h2></label>
        <input
          type="email"
          class="form-control"
          placeholder=""
          id="inputs"
          v-model="form.email"
        />

        <label for=""> <h2>Contraseña</h2> </label>
        <input
          type="password"
          class="form-control"
          placeholder=""
          id="inputs"
          v-model="form.password"
        />
         <div class="message">
              <span v-if="errors.password">{{ errors.password[0] }}</span>

              <span v-if="message">{{ message }}</span>
            </div>

        <button id="boton" class="btn btn-primary" @click="login()">
          INGRESAR
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.container-main {
  display: flex;
  flex-flow: column;
  height: 50vh;
  align-items: center;
  align-content: center;
  padding: 5rem;
  font-family: fantasy;
}
.campos {
  display: flex;
  flex-flow: column;
  height: fit-content;
  width: 50%;
  border: 5px solid rgb(195, 255, 0);
  border-radius: 2rem;
  align-items: center;
  background: peachpuff;
}
.titulo {
  margin-bottom: 5rem;
  text-align: center;
}
.inputs {
  background: none;
}

label {
  margin: 1rem;
}
#inputs {
  width: 50%;
}

#boton {
  font-family: Arial, Helvetica, sans-serif;
  margin: 2rem;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors:{}
    };
  },

methods:{
  async login() {
      try {
        const rs = await this.axios.post("/api/login", this.form);
     this.$router.push({
              name: "Account",
            });
       

       
        
      } catch (e) {
        this.errors = {};
        this.message = null;

        if (e.response.data.errors) this.errors = e.response.data.errors;
        else if (e.response.data.message)
          this.message = e.response.data.message;
      }
    },
}
};
</script>