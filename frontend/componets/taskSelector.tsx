import { Task } from "@/types/task";
import { Button, Text, XStack } from "tamagui";

const taskSelector = ({
  tasks,
  onClick,
}: {
  tasks: Task[];
  onClick: (task: Task) => void;
}) => {
  return (
    <XStack flexWrap="wrap">
      {tasks.map((task) => (
        <Button
          key={task.taskId}
          width="20%"
          height={40}
          onPress={() => onClick(task)}
        >
          <Text>{task.taskName}</Text>
        </Button>
      ))}
    </XStack>
  );
};

export default taskSelector;
