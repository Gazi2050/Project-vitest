import { useCounter } from "../../hooks/useCounter";

function Counter() {
    const { count, increment } = useCounter();

    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-4 border border-gray-300 rounded-lg shadow-md mx-auto w-[20%]">
            <p data-testid="counter-value" className="text-2xl font-semibold text-white">
                {count}
            </p>
            <button
                onClick={increment}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
                Increment
            </button>
        </div>
    );
}

export default Counter;
