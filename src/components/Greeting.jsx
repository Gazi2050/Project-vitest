function Greeting({ name }) {
    return <h1 className="text-2xl font-bold text-blue-500 text-center">Hello, {name || "World"}!</h1>;
}

export default Greeting;