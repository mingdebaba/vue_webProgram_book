Vue.createApp({
    data:function(){
        return {
            todoTitle:'',
            todoDescription:'',
            searchWord:'',
            todoCategories:[],
            hideDoneTodo:true,
            order:'desc',
            categoryName:'',
            selectedCategory:'',
            todos:[],
            categories:[],
        }
    },
    computed:{
        function(){
            return this.todoTitle !== ''
        },
        canCreateCategory:function(){
            return this.categoryName !=='' && !this.existsCategory
        },
        existsCategory:function(){
            const categoryName = this.categoryName
            return this.categories.indexOf(categoryName) !== -1
        },
    },
    methods:{
        createTodo:function(){
            if(!this.canCreateTodo){
                return
            }

            this.todos.push({
                id:'todo-' + Date.now(),
                title:this.todoTitle,
                description:this.todoDescription,
                categories:this.todoCategories,
                dateTime:Date.now(),
                done:false,
            })
            this.todotitle =''
            this.todoDescription=''
            this.todoCategories = []
        },
        createCategory:function(){
            if(!this.canCreateCategory){
                return
            }
            this.categories.push(this.categoryName)
            this.categoryName = ''
        },
    },
}).mount('#app')