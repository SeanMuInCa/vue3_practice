/**
 * 获取任务列表，当前的
 * 有服务器再说了，没有就先local
 */
export function fetch(){
    localStorage.getItem('Todoist');
}