import { doLogout } from "@/app/actions"


const Logout = () => {
  return (
    <form action={doLogout}>
        <button type="submit" className="bg-red-400 hover:bg-red-500 p-2 rounded-full mt-10 font-bold">
            Logout
        </button>
    </form>
  )
}

export default Logout