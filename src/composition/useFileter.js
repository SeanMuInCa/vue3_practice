import {ref, onMounted, onUnmounted, computed} from 'vue';
import {filter} from '../util/todoStorage';

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
    
    const filtedData = computed(() => {
        return filter(todos.value, filterKeyRef.value);
    })
    //外面需要用到的东西要返回
    return {
        filterKeyRef,filtedData
    }
}