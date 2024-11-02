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
  },
  components: {
    'todo-item': {
      props: ['todo'],
      // template: `<li>{{ "Это одна из задач" }}</li>`
      template: `<li>{{ todo.text }}</li>`
    }
  }
}

const с_app = Vue.createApp(ComponentsApp)

// альтернативный способ регистрации компонентов в приложении app

// app.component('todo-item', {
  //   props: ['todo'],
  //   template: `<li>{{ todo.text }}</li>`
  // })
  
  с_app.mount('#components-app')
  //***************************************************************************** */
  
  const vm_app = Vue.createApp({
    data() {
      return { count: 4 }
    },
    // components: {
      // 'comp': {
        // template:'<div>Hi</div>',
        // style: 'font-size: 32px;'
        // }
        // }
        template:'{{count}}',
      })
      
  //***************************************************************************** */
  
  const vm = vm_app.mount('#vm_app')
  
  console.dir(vm.count) // => 4
  // console.log(vm.template)
  //***************************************************************************** */
  const dynamic_attr = {
    data() {
      return {
        a:'title',
        b: null,
        c: 'variable test'
      }
    },
    methods: {
      change_attr:function(){
        if(this.a !== null) {
          this.a = null
        } else {
          this.a = 'title'
        }
      }
    }
    // template:'<a href="#" :[a]="dinamyc_attrr">link</a>',
    
  }
  Vue.createApp(dynamic_attr).mount('#v_attr')
  
//***************************************************************************** */
  const interpolation = {
    data(){
      return {
        msg:'Это текст записанный в переменную. Если изменить тексте в переменной msg, то он изменится и на странице HTML.',
        vonce:"Директива v-once не отслеживает изменения переменной.",
        vhtml:"директива V-HTML выводит данные переменной как HTML верстку",
        rawHtml: '<span style="color: red; font-size:30px">Это html разметка обёрнутая в span</span>'
      }
    },
    methods:{
      add_simbol:function(){
        this.msg = this.msg + '!'
        this.vonce = this.vonce + '!'
      }
    }

  }
  Vue.createApp(interpolation).mount("#interpolar")

//***************************************************************************** */

const watchers = {
  data(){
    return{
      firstName: 'John',
      lastName: 'Dou',
      fullName:'',
    }
  },
  watch:{
    firstName(val){
      this.fullName = val + " " + this.lastName
    },
    lastName(val){
      this.fullName = this.firstName + " " + val
    }
  }
}

Vue.createApp(watchers).mount('#watchers')