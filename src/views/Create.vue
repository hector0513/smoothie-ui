<template>
  <v-container>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn
        :color="color"
        text
        @click="
          snackbar = false;
          window.location.reload();
        "
      >
        Close
      </v-btn>
    </v-snackbar>
    <div class="logo">
      <v-btn icon>
        <router-link to="/">
          <v-icon large color="red">mdi-arrow-left</v-icon></router-link
        >
      </v-btn>
      <div>
        <v-icon color="red" x-large>mdi-fire</v-icon>
        <span>Smoothie Match</span>
      </div>
    </div>

    <v-form>
      <v-row class="contenedor">
        <v-col cols="12">
          <v-text-field
            v-model="nombre"
            label="Smoothie name:"
            placeholder=""
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col
              class="d-flex"
              v-for="index in cantidad"
              :key="index"
              cols="6"
            >
              <v-select
                :key="index"
                @change="changeFruta($event, index - 1)"
                :items="itemFrutas"
                label="Frutas"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-btn @click="cantidad++" icon color="green" x-large>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            @change="changeLiquido"
            :items="itemLiquidos"
            label="Liquidos"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            @change="changeProteina"
            :items="itemProteinas"
            label="Proteinas"
          ></v-select>
        </v-col>
        <v-col class="d-flex alineado" cols="8" sm="4" md="3">
          <v-text-field
            label="Smoothie name:"
            placeholder=""
            type="number"
            v-model="porcentaje"
            solo
            ><v-icon slot="append">mdi-percent</v-icon>
          </v-text-field>
          <div><v-icon color="red" x-large>mdi-fire</v-icon></div>
        </v-col>
        <v-col cols="12 d-flex center" md="6">
          <v-btn color="blue" x-large outlined rounded @click="guardar">
            Save It
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
export default {
  name: "Create",
  data() {
    return {
      cantidad: 1,
      frutasSelecionadas: [],
      liquidoSelecionado: "",
      porcentaje: 100,
      proteinaSelecionada: "",
      snackbar: false,
      text: "Saved",
      nombre: "",
      color: "green",
    };
  },
  computed: {
    itemFrutas() {
      if (this.frutas !== undefined) {
        return this.frutas.map((e) => e.nombre);
      } else {
        return [];
      }
    },
    itemProteinas() {
      return this.proteinas.map((e) => e.nombre);
    },
    itemLiquidos() {
      return this.liquidos.map((e) => e.nombre);
    },
  },
  apollo: {
    frutas: gql`
      query {
        frutas {
          id
          nombre
        }
      }
    `,
    liquidos: gql`
      query {
        liquidos {
          id
          nombre
        }
      }
    `,
    proteinas: gql`
      query {
        proteinas {
          id
          nombre
        }
      }
    `,
  },
  methods: {
    changeFruta(e, s) {
      this.frutasSelecionadas[s] = this.frutas.find(
        (fruta) => fruta.nombre === e
      ).id;
    },
    changeLiquido(e) {
      this.liquidoSelecionado = this.liquidos.find(
        (liquido) => liquido.nombre === e
      ).id;
    },
    changeProteina(e) {
      this.proteinaSelecionada = this.proteinas.find(
        (proteina) => proteina.nombre === e
      ).id;
    },
    error(text) {
      this.color = "red";
      this.text = text;
      this.snackbar = true;
    },
    guardar() {
      let correcto = true;
      if (this.nombre == "") {
        correcto = false;
        this.error("Debe Rellenar el nombre");
      }
      if (this.frutasSelecionadas.length < this.cantidad) {
        correcto = false;
        this.error("Debe selecionar todas las frutas");
      }
      if (this.liquidoSelecionado == "") {
        correcto = false;
        this.error("Debe selecionar todas el liquido");
      }
      if (this.proteinaSelecionada == "") {
        correcto = false;
        this.error("Debe Selecionar la proteina");
      }
      if (correcto) {
        this.guardarDB({
          nombre: this.nombre,
          frutas: this.frutasSelecionadas.map((e) => {
            return {
              fruta: e,
            };
          }),
          liquido: this.liquidoSelecionado,
          proteina: this.proteinaSelecionada,
          porcentaje: this.porcentaje,
        });
      }
    },
    async guardarDB(smoothie) {
      const result = await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation newSmoothie($input: SmoothieInput) {
              newSmoothie(input: $input) {
                nombre
                frutas {
                  nombre
                }
                liquido {
                  nombre
                }
                proteina {
                  nombre
                }
              }
            }
          `,
          // Parameters
          variables: {
            input: smoothie,
          },
        })
        .then((e) => {
          this.color = "green";
          this.text = "Guardado";
          this.snackbar = true;
        })
        .catch((e) => this.error("Error de conexion"));

      return result;
    },
  },
  watch: {
    porcentaje(valor) {
      this.porcentaje = Math.abs(valor) % 101;
      return this.porcentaje;
    },
  },
};
</script>
<style>
.logo {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.logo div {
  flex: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.alineado {
  align-content: center;
}
.center {
  justify-content: center;
}
.contenedor {
  width: 80%;
  margin: 0 auto;
}
</style>
