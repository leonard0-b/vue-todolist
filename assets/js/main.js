var app = new Vue ({
  el: "#root",
    data: {
      inputTxt: "",
      toDoList: [],
    },
    computed: {
      toDoListComputed: function() {
        let toDoListDone = this.toDoList.filter((todoitem) => todoitem.status == "done");
        let toDoListToDo = this.toDoList.filter((todoitem) => todoitem.status == "todo");

        return [...toDoListToDo,...toDoListDone];
      }
    },
    methods: {
      add: function(){
        if (this.inputTxt!="") {
          let obj = {
            title: this.inputTxt,
            status: "todo"
          }
          this.toDoList.unshift(obj);
          this.inputTxt= "";
          console.log(this.toDoList);
        }
      },
      checked: function(todoitem){
        let index = this.toDoList.indexOf(todoitem)
        this.toDoList[index].status = "done"
      },
      edit: function (todoitem) {
        let index = this.toDoList.indexOf(todoitem)
        this.inputTxt = todoitem.title;
        this.toDoList.splice(index, 1);
      },
      trash: function(todoitem) {
        let index = this.toDoList.indexOf(todoitem)
        this.toDoList.splice(index, 1)
      }
    }












})
