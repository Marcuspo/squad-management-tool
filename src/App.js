import NavBar from "./components/Bar/NavBar"
import Main from "./components/Main/Main"
import Top5 from "./components/Top5/Top5"

import "bootstrap/dist/css/bootstrap.min.css"
import { Grid } from "@material-ui/core"

function App() {
  return (
    <div>
      <NavBar />
      <Grid container spacing={1}>
        <Grid container item xs spacing={3}>
          <Main />
        </Grid>
        <Grid container item xs spacing={3}>
          <Top5 />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
