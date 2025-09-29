import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";


export default function ActivityDashbord() {
  return (
    <>
      <Grid2 container spacing={3}>
        <Grid2 size={7}>
          <ActivityList
          />
        </Grid2>
        <Grid2 size={5}>
         Event filters go here
        </Grid2>
      </Grid2>
    </>
  );
}
