Page({
  data:{
    // text:"这是一个页面"
    todos: [],
    todo: {}
  },
  onLoad: function(){
      wx.getStorage({
          key: 'oneInfo',
          success: (res) => {
              this.setData({
                  todos: res.data
              })
          }
      })
  },

  editChange: function(e){
      
      if(e.detail){
        var value = e.detail.value;
        if(!value){
            return;
        }
        var currentDate = +new Date;
        var currentTodo = {time: currentDate, info: value};
        this.setData({
            todo: currentTodo
        })
      }
      
      e.detail.value = ''
  },
  addTodo: function(e){
      
      var todos = this.data.todos;
      todos[todos.length] = this.data.todo;

      this.setData({
          todos: todos,
          todo: {}
      });

      this.storeTodo();
  },
  storeTodo: function(){
      wx.setStorage({
          key: 'oneInfo',
          data: this.data.todos
      })
  },
  removeTodo: function(e){
      
      var todoTime = e.target.dataset.eachTodo;
      var removeTodos = [];
      var todos = this.data.todos;

      todos.forEach((item,i) => {
          if(item.time != todoTime){
              removeTodos[removeTodos.length] = item;
          }
      });

      console.log(removeTodos)
      this.setData({
          todos: removeTodos
      });

      this.storeTodo();
  }
})