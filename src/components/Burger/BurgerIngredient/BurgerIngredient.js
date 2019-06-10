import React from "react";

import classes from "./BurgerIngredient.css";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.breadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat} />;
      break;
    case "Bacon":
      ingredient = <div className={classes.Bacon} />;
      break;
    case "Chesse":
      ingredient = <div className={classes.Cheese} />;
      break;
    case "Salad":
      ingredient = <div className={classes.Salad} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
