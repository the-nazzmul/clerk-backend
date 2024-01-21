export interface ITask {
  title: string;
  description: string;
  deadline: string;
  priority: "low" | "medium" | "high";
}
