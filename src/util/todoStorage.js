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