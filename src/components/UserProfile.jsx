import { useEffect, useState } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [userId]);

    if (!user) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="mt-2 text-gray-600">{user.email}</p>
        </div>
    );
}

export default UserProfile;
