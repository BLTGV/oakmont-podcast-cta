export const getPercentileValue = (rows) => {
  let target = [];
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].c.length; j++) {
      if (j === 1) target.push(rows[i].c[j].v);
    }
  }
  return target;
};

export const sortPercentileValue = (target, desc) => {
  return target.sort(function (a, b) {
    if (desc) return b - a;
    else return a - b;
  });
};

export const reorderOldPercentileArray = (target, rows) => {
  let newRows = [];
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < rows[i].c.length; j++) {
      if (target[i] === rows[j].c[1].v) {
        newRows.push(rows[j]);
      }
    }
  }
  return newRows;
};

export const getThresholdValue = (rows) => {
  let target = [];
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].c.length; j++) {
      if (j === 0) target.push(rows[i].c[j].v);
    }
  }
  return target;
};
