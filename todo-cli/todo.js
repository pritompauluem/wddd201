const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => item.dueDate < today && !item.completed);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today && !item.completed);
  };

  const dueLater = () => {
    return all.filter((item) => item.dueDate > today && !item.completed);
  };

  const toDisplayableList = (list) => {
    let result = "";
    list.forEach((item) => {
      result += `[${item.completed ? "x" : " "}] ${item.title}${
        item.dueDate !== today ? " " + item.dueDate : ""
      }\n`;
    });
    return result.trim();
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
