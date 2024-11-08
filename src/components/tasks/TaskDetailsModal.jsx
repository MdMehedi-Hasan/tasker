import { useSelector } from "react-redux";
import Modal from "../ui/Modal";
const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { userSpecificTasks } = useSelector((state) => state.tasksSlice);
  const specTask = userSpecificTasks?.find((item) => item?.id === id);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={specTask?.title}>
      <p>{specTask?.description}</p>
    </Modal>
  );
};

export default TaskDetailsModal;
 