      const Counter = {
        data() {
          return {
            counter: 0,
          };
        },
        mounted() {
          setInterval(() => {
            this.counter++;
          }, 1000);
        },
      };
      Vue.createApp(Counter).mount("#counter");
//***************************************************************************** */
      
      const AttributeBinding = {
        data() {
          return {
            message: "Страница загружена " + new Date().toLocaleString(),
          };
        },
      };
      Vue.createApp(AttributeBinding).mount("#bind-attribute");
//***************************************************************************** */

      const EventHandling = {
        data() {
          return {
            message: "Привет, Vue.js!",
          };
        },
        methods: {
          reverseMessage() {
            this.message = this.message.split("").reverse().join("");
          },
        },
      };
      Vue.createApp(EventHandling).mount("#event-handling");
//***************************************************************************** */
 
    const TwoWayBinding = {
        data() {
            return {
                message: 'Привет, Vue!'
            }
        }
    }

    Vue.createApp(TwoWayBinding).mount('#two-way-binding')
//***************************************************************************** */

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    },
    methods: {
        changeVisible:function(){
            this.seen = !this.seen
        }
    }
}
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
//***************************************************************************** */

const ListRendering = {
    data() {
        return {
            todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
    }
}
}

Vue.createApp(ListRendering).mount('#list-rendering')
//***************************************************************************** */

const ComponentsApp = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}

const app = Vue.createApp(ComponentsApp)

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

app.mount('#components-app')

