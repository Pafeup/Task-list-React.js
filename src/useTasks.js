import { useLocalStorage } from "./useLocalStorage";

const useTasks = () => {
    const [hideDone, setHideDone] = useLocalStorage("hideDone", false);
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const toggleHideDone = () => {
        setHideDone((hideDone) => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            };

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => (
            {
                ...task,
                done: true
            })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };


    return {
        tasks,
        addNewTask,
        setAllDone,
        toggleTaskDone,
        removeTask,
        toggleHideDone,
        hideDone,
    };
};
export default useTasks;