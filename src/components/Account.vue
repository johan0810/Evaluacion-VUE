<template>
  <div class="container-body">
    <div class="container">
      <h1><b>ESTUDIANTES</b></h1>
      <label>
        <h1>Agregar Estudiante</h1>

        <input
          type="text"
          class="form-control"
          v-model="new_students.name"
          placeholder="Nombre"
        />

        <h1>Actualizar Estudiantes</h1>
        <div class="agrr">
          <input
            type="text"
            class="form-control"
            v-model="edit_students.name"
            placeholder="Nombre"
          />
          <button class="btn btn-danger" @click="cancel()">Cancel</button>
        </div>
        <button class="btn btn-primary" @click="update()">Guardar</button>

        <button class="btn btn-success" @click="store()">Agregar</button>
      </label>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Del Estudiante</th>
            <!-- <th scope="col">Notas</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, i) in list_students" :key="i">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ s.name }}</td>

            <td>
              <button class="btn btn-danger" @click="destroy(s.id)">
                eliminar
              </button>
              <label for="">
                <button class="btn btn-primary" @click="edit(s)">Editar</button>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style>
#boton {
  color: black;
}

.agrr{
  display: flex;
}
</style>


<script>
export default {
  data() {
    return {
      list_students: {},
      new_students: {},
      edit_students: [],
      copy_edit_students: {},
    };
  },

  mounted() {
    this.index();
  },

  methods: {
    async index() {
      let response = await axios.get("http://127.0.0.1:8000/api/students");
      this.list_students = response.data.students;
    },

    async store() {
      await axios.post("http://127.0.0.1:8000/api/students", this.new_students);
      (this.new_students = {}), this.index();
      console.log(this.list_students);
    },

    async destroy(id) {
      // let id=this.Delete.id;
      await axios.delete("http://127.0.0.1:8000/api/students/" + id);
      this.index();
    },

    edit(students) {
      this.edit_students = students;

      Object.assign(this.copy_edit_students, this.edit_students);
    },

    async update() {
      let id = this.edit_students.id;
      await axios.put(
        "http://127.0.0.1:8000/api/students/" + this.edit_students.id,
        this.edit_students
      );
      (this.edit_students = {}), console.log(this.list_students);
      this.index();
    },
    cancel() {
      Object.assign(this.edit_students, this.copy_edit_students);
    },
  },
};
</script>