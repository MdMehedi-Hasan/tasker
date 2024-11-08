import { useForm } from 'react-hook-form'
import Modal from '../ui/Modal'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/features/tasks/tasksSlice';


export default function AddTaskModal({ isOpen, setIsOpen }) {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset
        // formState: { errors },
    } = useForm()
    const onCancel = () => {
        reset()
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        dispatch(addTask(data));
        onCancel();
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="">Title</label>
                    <input className='rounded' type="text" {...register("title")} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" className='rounded' {...register("description")}></textarea>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Deadline</label>
                    <input className='rounded' type="date" name="" id="" {...register("deadline")} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Assign to </label>
                    <select name="" id="" className='rounded' {...register("assignedTo")}>
                        <option value="Mehedi">Mehedi</option>
                        <option value="Miraz">Miraz</option>
                        <option value="Mohan">Mohan</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Priority</label>
                    <input className='rounded' type="text" {...register("priority")} />
                </div>
                <div className='flex justify-end gap-5'>
                    <button className='btn btn-danger' type='button' onClick={onCancel}>Cancel</button>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>
        </Modal>
    )
}
