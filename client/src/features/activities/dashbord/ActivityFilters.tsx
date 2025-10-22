import { FilterList, Event } from "@mui/icons-material";
import {
  Box,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useStore } from "../../../lib/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useAccount } from "../../../lib/hooks/useAccount";  // adjust path as needed
import { useNavigate } from "react-router";

const ActivityFilters = observer(function ActivityFilters() {
  const {
    activityStore: { setFilter, setStartDate, filter, startDate },
  } = useStore();

  const { currentUser } = useAccount();
  const navigate = useNavigate();

  function handleFilterChange(value: string) {
    // Redirect unauthenticated users trying to set restricted filters
    if ((value === "isGoing" || value === "isHost") && !currentUser) {
      navigate("/login");
      return;
    }
    setFilter(value);
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, borderRadius: 3 }}
    >
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              color: "primary.main",
            }}
          >
            <FilterList sx={{ mr: 1 }} />
            Filters
          </Typography>
          <MenuList>
            <MenuItem selected={filter === "all"} onClick={() => handleFilterChange("all")}>
              <ListItemText primary="All events" />
            </MenuItem>
            <MenuItem selected={filter === "isGoing"} onClick={() => handleFilterChange("isGoing")}>
              <ListItemText primary="I'm going" />
            </MenuItem>
            <MenuItem selected={filter === "isHost"} onClick={() => handleFilterChange("isHost")}>
              <ListItemText primary="I'm hosting" />
            </MenuItem>
          </MenuList>
        </Box>
      </Paper>
      <Box component={Paper} sx={{ width: "100%", p: 3, borderRadius: 3 }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
            color: "primary.main",
          }}
        >
          <Event sx={{ mr: 1 }} />
          Select date
        </Typography>
        <Box
          sx={{
            "& .react-calendar": {
              width: "100%",
              border: "none",
              fontFamily: "inherit",
            },
          }}
        >
          <Calendar value={startDate} onChange={(date) => setStartDate(date as Date)} />
        </Box>
      </Box>
    </Box>
  );
});

export default ActivityFilters;
