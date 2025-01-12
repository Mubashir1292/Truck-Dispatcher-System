import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="bg-white m-20 p-5 w-4/12">
      <h1 className="text-4xl text-black text-center mb-12">Welcome Back</h1>
      <form>
        <fieldset className="flex flex-col justify-center items-center gap-2">
          <TextField
            label="Enter Email"
            required
            name="email"
            fullWidth
            margin="dense"
          />
          <TextField
            label="Enter Password"
            required
            name="password"
            fullWidth
            margin="dense"
          />
          <Button variant="outlined">Sign In</Button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
