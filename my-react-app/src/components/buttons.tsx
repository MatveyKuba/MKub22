import { BUTTONS, filterToAll } from './constants/category-filters'
import todosStore from '../store/todosStore'

const Buttons = () => {
    return (
        <div>
            <button
                className="category_button"
                onClick={async () =>
                    await todosStore.getTodoByFilter(filterToAll)
                }
            >
                {BUTTONS.ALL}
            </button>
            <button
                className="category_button"
                onClick={async () => await todosStore.getTodoByFilter(true)}
            >
                {BUTTONS.DONE}
            </button>
            <button
                className="category_button"
                onClick={async () => await todosStore.getTodoByFilter(false)}
            >
                {BUTTONS.UNDONE}
            </button>
        </div>
    )
}
export default Buttons
