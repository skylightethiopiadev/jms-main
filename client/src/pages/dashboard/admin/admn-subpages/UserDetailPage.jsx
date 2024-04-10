import { useNavigate } from 'react-router-dom'

const UserDetailPage = () => {

    // hooks
    const navigate = useNavigate()
    return <div className="w-full">
        <div className="flex items-center justify-center py-5 font-bold text-3xl">
            <h1>Detail Page</h1>
        </div>
        <div className="flex items-center justify-center">
            <button onClick={() => {
                navigate(-1)
            }} className="px-3 py-1 bg-gray-700 text-gray-50 rounded-md">back</button>
        </div>
  </div>;
};

export default UserDetailPage;
