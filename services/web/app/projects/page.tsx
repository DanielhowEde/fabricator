import { createProject } from "./actions";

export default function ProjectsPage() {
  return (
    <form action={createProject}>
      <input name="name" />
      <button type="submit">Create</button>
    </form>
  );
}