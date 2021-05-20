# Pokédex <img src="src/assets/images/loader.png" alt="Your image title" width="50"/>

## Instalación de Proyecto

```
yarn install
```

### Compilación para desarrollo

```
yarn serve
```

## Tecnologías usadas

- Vue2JS
- Vue-router
- Vuex
- Vuetify
- Saas
- Vue-clipboard2

## Explicación General

- Se optó por trabajar con Vuex con el objetivo de acceder a los filtros de manera global, pues al escalarse los mismos se podrían necesitar en otros lugares al igual que la lista de pokemons.

- Vuetify se utilizó principalmente por el componente de modal, en su mayoría se evitó utilizar los estilos propios de Vuetify pues en el futuro se puede crear un componente modal responsivo y quitar la dependencia de esta librería.

- Saas es utilizado para evitar hacer redudante el código CSS y aplicar algunos criterios de BEM.

- Clipboard2 es una librería que se agregó para realizar el copiado al portapales, la misma nos ofrece un bajo acoplamiento.

- El criterio utilizado para recargar el filtrado de pokemones y su búsqueda de palabras, fue el manejo de un gran volumen de datos. Es por ello que se utilizó watchs para escuchar a cada "filtro" y se utilizó un delay para buscar las palabras pues de lo contrario se pudo utilizar una propiedad computada o un watch al input de búsqueda de manera directa.
