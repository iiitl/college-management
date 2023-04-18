import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./result.css";
// import BasicModal from "./Result_view_modal";
// import { Clicksender } from "./Result_view_modal";
// import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function MultiActionAreaCard() {
  const opener = () => {
    console.log("opened");
  };
  // const {handleClickOpen,handleClose}=React.useContext(Clicksender);

  const Card_sample = (props) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/exams.jpg"
            alt="exams image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.sem}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={handleClickOpen("paper")}
          >
            Open
          </Button>
        </CardActions>
      </Card>
    );
  };

  //----------------------------------------------------------------------------

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <div className="result">
      <div className="result-child">
        <Card_sample sem={"Semester-1"} />
        <Card_sample sem={"Semester-2"} />
        <Card_sample sem={"Semester-3"} />
        <Card_sample sem={"Semester-4"} />
</div>
<div className="result-child">
        <Card_sample sem={"Semester-5"} />
        <Card_sample sem={"Semester-6"} />
        <Card_sample sem={"Semester-7"} />
        <Card_sample sem={"Semester-8"} />
        </div>
      </div>
      {/* <BasicModal/> */}

      {/* //====================================================================== */}
      
      <div>
        {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
        <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Results...</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <div className="reslt">
                <table cellSpacing={15} className="specs">
                  <thead>
                    <tr>
                      <td>
                        <h2>Subject</h2>
                      </td>
                      <td>
                        <h2>Grade</h2>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h3>COA</h3>
                      </td>
                      <td>
                        <h4>A+</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>DSA</h3>
                      </td>
                      <td>
                        <h4>A</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>0ops</h3>
                      </td>
                      <td>
                        <h4>B</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>WEB</h3>
                      </td>
                      <td>
                        <h4>A</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3>Sports</h3>
                      </td>
                      <td>
                        <h4>A+</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {/* <Button onClick={handleClose}>Subscribe</Button> */}
          </DialogActions>
        </Dialog>
      </div>
   
    </>
  );
}
