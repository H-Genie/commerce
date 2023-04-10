import { GoogleLogin } from '@react-oauth/google'

const Google = () => {
  return (
    <div className="flex">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          fetch(`/api/auth/sign-up?credential=${credentialResponse.credential}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </div>
  )
}

export default Google
