/**
 * 获取任务列表，当前的
 * 有服务器再说了，没有就先local
 */
export function fetch(){ 
    const list = localStorage.getItem('Todoist');
    if(list) return JSON.parse(list);
    return [];
}
/**
 * 保存所有任务
 * @param {*} todos 
 */
export function save(todos)
{
    localStorage.setItem('Todoist',JSON.stringify(todos));
}

export function generateId(){
    return Date.now() + Math.random().toString(16).substring(2,4);
}

export function filter(todos, filterKey = 'all'){
    if(filterKey === 'all') return todos;
    else if(filterKey === 'active'){
        return todos.filter(item => item.isDone === false);
    }else if(filterKey === 'completed'){
        return todos.filter(item => item.isDone === true);
    }
    throw new Error("invalid input");
}