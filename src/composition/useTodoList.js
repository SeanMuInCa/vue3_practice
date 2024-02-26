import { ref, watchEffect } from "vue";
import * as todoStorage from "../util/todoStorage";
export default function useTodoList() {
	const todos = ref(todoStorage.fetch());
	watchEffect(() => {
		todoStorage.save(todos.value);
	});
    return { todos };
}
