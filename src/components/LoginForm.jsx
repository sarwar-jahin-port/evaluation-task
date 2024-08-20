import { doSocialLogin } from '@/app/actions'
import React from 'react'

const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
        <button 
            type='submit'
            name='action'
            value='google'
            className="bg-green-400 hover:bg-green-500 p-4 rounded-full font-bold my-10">Login with google</button>
    </form>
  )
}

export default LoginForm