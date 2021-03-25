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

        return {...toDoListToDo,...toDoListDone};
      }
    },
    methods: {
      add: function(){
        if (this.inputTxt!="") {
          let obj = {
            title: this.inputTxt,
            status: "todo"
          }
          this.toDoList.push(obj);
          this.toDoList.reverse();
          this.inputTxt= "";
          console.log(this.toDoList);
        }
      },
      checked: function(index){
        console.log(this.toDoList[index].status);
        this.toDoList[index].status = "done"
      }
    }












})
