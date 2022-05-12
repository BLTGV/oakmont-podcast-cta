import React from "react";
import { useEffect, useState } from "react";
import { getThresholdValue, sortPercentileValue } from "../utils/rank";
import AboveTheFold from "../components/AboveTheFold";
import BelowTheFold from "../components/BelowTheFold";
import Footer from "../components/Footer";

function LayoutOne(props) {
  const [tableData, setTableData] = useState(0);
  const [rowData, setRowData] = useState([]);
  const [download, setDownload] = useState(0);
  const [rank, setRank] = useState(null);

  const getData = () => {
    fetch(process.env.REACT_APP_SPREADSHEET_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.blob();
      })
      .then(function (myJson) {
        const b = myJson;
        const fr = new FileReader();

        fr.onload = (e) => {
          let result = e.target.result;
          result = result.substring(result.indexOf(".setResponse("));
          result = result.replace(".setResponse(", "");
          result = result.replace(result.slice(-2), "");
          result = JSON.parse(result);
          setTableData(result);
          let threshold = result.table.rows;
          threshold = getThresholdValue(threshold);
          threshold = sortPercentileValue(threshold, true);
          setRowData(threshold);
        };

        fr.readAsText(b);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <AboveTheFold
        setDownload={setDownload}
        setRank={setRank}
        download={download}
        rowData={rowData}
      />
      <BelowTheFold rank={rank} />
      <Footer />
    </div>
  );
}

export default LayoutOne;
