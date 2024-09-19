export type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export enum FilterEnum {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed"
}
