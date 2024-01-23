import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

export const JobNotification = ({children, severity = "info"}) => (
    (
        <Grid item xs={12}>
            <Paper>
                <Alert severity={severity} style={{fontSize: '1rem'}}>
                    {children}
                </Alert>
            </Paper>
        </Grid>
    )
)