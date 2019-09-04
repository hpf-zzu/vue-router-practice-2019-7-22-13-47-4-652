import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo: function (state,content){
            state.todoList.push({
                status:'active',
                content:content
            })
        },
        handleToggleActive: function (state,index){
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        handleFilter(state, currentFilter){
            state.currentFilter = currentFilter;
        },

        // methods: {
        //     handleToggleActive: function (index) {
        //         this.$store.state.todoList[index].status = 
        //         this.$store.state.todoList[index].status === 'completed' ? 'active' : 'completed';
        //     }
        // }
        initTodos: function(state,todos){
            state.todoList = todos;

        },
        addTodos: function(state,){

        }

    },
    actions: {
        fetchTodos (context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function(response){
                context.commit('initTodos',response.data);
                console.log(response)}).catch(function(error){
                console.log(error.response);
            });

        },
        createTodos(context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
                content: "play",
                status: "active"}).then(function(response){
                    context.dispatch("createTodos");

                }).catch(function(error){
                    alert(error.response);
                    console.log(error.response)
                })

        },
        updateTodos(context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/132";
            axios.put(url,{
                id: 132,
                content: "playing222222",
                status: "active"
            }).then(function(response){
                context.dispatch("createTodos")
            }).catch(function(error){
                console.log(error.response);
            })


        }


    }
}
