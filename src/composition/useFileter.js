import {ref, onMounted, onUnmounted, computed} from 'vue';
import {filter,count} from '../util/todoStorage';

export default function useFilter(todos){
    const validHash = ['all', 'completed', 'active'];
    const filterKeyRef = ref("all");//筛选条件
    const onHashChange = () => {
        const hash = location.hash.replace(/#\/?/, '');
        if(validHash.includes(hash))
        {
            filterKeyRef.value = hash;
        }else{
            location.hash = '';
            filterKeyRef.value = 'all';
        }
    }
    onMounted(() => {
        window.addEventListener('hashchange', onHashChange);
    });

    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashChange);
    });
    //筛选后的数组
    const filtedData = computed(() => {
        return filter(todos.value, filterKeyRef.value);
    })

    //未完成的条目
    const unfinished = computed(() => {
        return count(todos.value);
    })

    //外面需要用到的东西要返回
    return {
        filterKeyRef,filtedData,unfinished
    }
}