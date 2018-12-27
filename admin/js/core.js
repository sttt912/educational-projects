app = new Vue({
  el: '#app',
  data: {
    name: '',
    checked: true,
    pass: '',
    users: ['Tom','Bob', 'Sam']
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.pass) {
      this.pass = localStorage.pass;
    }
    if (localStorage.checked) {
      this.checked = localStorage.checked;
    }

    if (localStorage.getItem('users')) {
          try {
            this.users = JSON.parse(localStorage.getItem('users'));
          } catch(e) {
            localStorage.removeItem('users');
          }
        }

  },

  methods: {
    persist() {
      localStorage.name = this.name;
      localStorage.pass = this.pass;

      if (localStorage.name=="login" && localStorage.pass=="pass") {
        localStorage.checked = true;
        window.location="admin.html";
      }else{
        localStorage.checked = false;
        document.location.href = "admin.html";
    }

  },
  saveusers() {
      const parsed = JSON.stringify(this.users);
      localStorage.setItem('users', parsed);
    }
},

  computed:{
             enabled: function(){
            if(localStorage.checked == 'true'){
                  return "Доступ разрешен";
                }else{
                  return "Доступ запрещен";
                }
            }
         }
});
