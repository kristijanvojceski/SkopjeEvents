import { Typography, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5005/api/activities")
      .then((response) => setActivities(response.data));
    return () => {};
  }, []);

  return (
    <>
      <Typography variant="h3">SkopjeEvents</Typography>
      <ul>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default App;
