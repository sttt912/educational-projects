app = new Vue({
    el: '#app',
    data:{
    stat: '',
    txt: '',
    val: '', //index
    todo: [
      {txt:'iPhone 7', stat:'Зроблено'}
    ]
    },
    mounted(){

      if (localStorage.getItem('todo')) {
            try {
              this.todo = JSON.parse(localStorage.getItem('todo'));
            } catch(e) {
              localStorage.removeItem('todo');
            }
          }

    },


//localStorage.clear();

    computed:{
                filteredList: function(){ //фильтр
                    var comp = this.stat;
                    return this.todo.filter(function (elem) {

                        if(comp==='') return true;
                        else return elem.stat.indexOf(comp) > -1;
                    })
                }
            },

    methods:{

      save() { //сохраняем
          const parsed = JSON.stringify(this.todo);
          localStorage.setItem('todo', parsed);
        },

        addt(text,clas,val){ //додаем
                Vue.set(this.todo, val, {txt:text, stat:clas});
            }

    }

});
