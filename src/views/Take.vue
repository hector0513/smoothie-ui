<template>
  <v-container>
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
    <div v-for="(item, value) in items" :key="value">
      <v-treeview
        open-on-click
        item-key="mdi-fire"
        class="bordes"
        dense
        :items="item"
      >
        <template v-slot:prepend="{ item }">
          <v-icon color="blue" v-if="item.icon">
            {{ item.icon }}
          </v-icon>
        </template>
        <template v-slot:append="{ item }">
          <v-icon color="green" v-if="item.icon">
            {{ "mdi-heart" }}
          </v-icon>
          <span v-if="item.value">{{ item.value }}</span>
          <v-icon color="red" v-if="item.icon">
            {{ "mdi-fire" }}
          </v-icon>
          <span v-if="item.porcentaje">{{ item.porcentaje }}</span>
        </template></v-treeview
      >
    </div>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
// @ is an alias to /src

export default {
  name: "Create",
  computed: {
    items() {
      let count = 0;
      if (this.mySmoothie !== undefined) {
        return this.mySmoothie.map((value) => {
          count++;
          return [
            {
              id: count,
              name: value.nombre,
              icon: "fas fa-hashtag",
              porcentaje: `${value.porcentaje}%`,
              value:
                value.frutas
                  .map((e) => e.valor)
                  .reduce((a, b) => {
                    return a + b;
                  }) + value.liquido.valor,
              children: [
                {
                  id: count + 1,
                  name: value.frutas.map((e) => e.nombre).join(", "),
                },
                { id: count + 2, name: value.liquido.nombre },
                { id: count + 3, name: value.proteina.nombre },
              ],
            },
          ];
        });
      } else {
        return [];
      }
    },
  },
  apollo: {
    mySmoothie: gql`
      {
        mySmoothie {
          nombre
          proteina {
            nombre
          }
          liquido {
            nombre
            valor
          }
          frutas {
            nombre
            valor
          }
          porcentaje
        }
      }
    `,
  },
};
</script>
<style scoped>
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
.bordes {
  border: 0.04rem solid black;
  border-radius: 0.5rem;
  font-weight: bold;
  margin: 1rem 0;
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
