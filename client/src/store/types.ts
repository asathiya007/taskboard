export interface FormData {
    id: string; 
    todoName: string; 
    todoDesc: string; 
}
export interface RootState {
    todos: Array<FormData>; 
}