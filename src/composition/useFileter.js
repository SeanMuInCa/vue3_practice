import {ref, onMounted, onUnmounted} from 'vue';
import {filter} from '../util/todoStorage';

export default function useFilter(todos){
    const validHash = ['all', 'completed', 'active'];
    const filterKeyRef = ref("all");//筛选条件
    const onHashChange = () => {
        console.log(location.hash);
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
    
    //外面需要用到的东西要返回
    return {
        filterKeyRef,
    }
}