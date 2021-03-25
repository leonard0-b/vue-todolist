var app = new Vue ({
  el: "#root",
    data: {
      inputTxt: "",
      toDoList: [
        {
          title: "xx",
        },
        {
          title: "yy",
        },
        {
          title: "zz",
        },
      ],
    },
    methods: {
      add: function(){
        if (this.inputTxt!="") {
          let obj = {
            title: this.inputTxt
          }
          this.toDoList.push(obj);
          this.inputTxt="";
        }
      }
    }












})
