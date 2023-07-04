import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/counter'
import { increment, decrement } from '../store/module/counterStore';

const CounterContainer = () => {
    const conuntStore = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} conuntStore={conuntStore}/>
}

export default CounterContainer;
