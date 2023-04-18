import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Last_part.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 function MultipleSelect() {
  const names = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];
  const Grades = [10, 9.5, 8, 7, 8.5, 9, 8, 8.8, 7.9, 9];
  const [IDarray, setIDarray] = React.useState([]);
  const [samplearray, setsamplearray] = React.useState([
    {
      namer: "",
      grader: "",
      id: "",
    },
  ]);
  React.useEffect(() => {
    // console.log(samplearray)
    console.log(IDarray);
  }, [samplearray]);
  const Adder = (e) => {
    // console.log(e.target)
    let a = e.target.dataset.value;
    // console.log(IDarray.find(y=>{ return (y===e.target.dataset.value)}))
    // console.log(parseInt(a))
    // console.log(IDarray.includes(parseInt(a)));
    if (IDarray.includes(parseInt(a)) || e.target.innerText == "=") {
    } else {
      setsamplearray([
        ...samplearray,
        {
          namer: e.target.innerText,
          grader: Grades[e.target.dataset.value - 1],
          id: e.target.dataset.value,
        },
      ]);
      setIDarray([...IDarray, Number(e.target.dataset.value)]);
    }

    // console.log(e.target.innerText)
  };
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <div className="semselector">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label" style={{backgroundColor:'white'}}>Semesters</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name, index) => (
              <MenuItem
                key={name}
                value={index + 1}
                style={getStyles(name, personName, theme)}
                onClick={Adder}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    <div
      style={{
        display: "flex",
        gap: "15rem",
        marginTop: "5rem",
        marginLeft: "20rem",
        alignItems: "center",
      }}
    >
      <div className="flexer">
        {samplearray.map((elem, index) => {
          if (index != 0) {
            return (
              <div className="beauty">
                {" "}
                <div>{elem.namer}</div>
                <div
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    padding: "0.3em",
                    borderRadius: "1.5em",
                  }}
                >
                  {elem.grader}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
    </>
  );
}
export default MultipleSelect;