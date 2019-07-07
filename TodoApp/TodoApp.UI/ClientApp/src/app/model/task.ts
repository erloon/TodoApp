export interface Task {
  _id?: { $oid: string };
  userId: string,
  name: string;
  create: string;
  end?: string;
  isDone: boolean;
}
