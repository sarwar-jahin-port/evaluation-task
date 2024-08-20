import { getUsers } from '@/postApi'

const UsersTable = async () => {
    const users = await getUsers();
    // console.log(users);
    return (
        <table className='min-w-full border border-gray-300'>
            <thead className='bg-gray-100'>
                <tr className='border-b-2'>
                    <th className='border border-gray-300 px-4 py-2'>ID</th>
                    <th className='border border-gray-300 px-4 py-2'>NAME</th>
                    <th className='border border-gray-300 px-4 py-2'>PHONE</th>
                    <th className='border border-gray-300 px-4 py-2'>EMAIL</th>
                    <th className='border border-gray-300 px-4 py-2'>CITY</th>
                </tr>
            </thead>
            <tbody>
            {
                users?.map(({id, name, phone, email, address}) => <tr key={id}>
                    <td className='border border-gray-300 px-4 py-2'>{id}</td>
                    <td className='border border-gray-300 px-4 py-2'>{name}</td>
                    <td className='border border-gray-300 px-4 py-2'>{phone}</td>
                    <td className='border border-gray-300 px-4 py-2'>{email}</td>
                    <td className='border border-gray-300 px-4 py-2'>{address?.city}</td>
                </tr>)
            }
            </tbody>
        </table>
    )
}

export default UsersTable