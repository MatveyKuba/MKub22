import { BiCheck } from 'react-icons/bi'

function Check({ isCompleted }: { isCompleted: boolean }) {
    return (
        <div className="Check">
            {isCompleted && <BiCheck size={20} className="check_item" />}
        </div>
    )
}

export default Check
