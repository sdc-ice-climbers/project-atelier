import React, { useContext } from "react";
import { OverviewContext } from '../../Overview.jsx';
import Size from './Size.jsx';

const SizeSelector = () => {

  const {
    currentStyle,
    loading
  } = useContext(OverviewContext);

  if (loading) {
    return <div className="size-selector loading"></div>
  }

  let inventory = currentStyle.skus;

  if (inventory.null) {
    return <div></div>
  }

  // TODO: not all styles have S-XXL sizing, threw error & crashed on "One Size" (style 79261)

  // if (inventory[Object.keys(inventory)[5]].size === 'XL') {
  //   inventory[Object.keys(inventory)[5]].size = 'XXL';
  // }

  return (
    <div className="size-selector">
      {Object.keys(inventory).map((key) =>
        <Size
          key={key}
          sizes={inventory[key]}
          sku={key}
        />
      )}
    </div>
  )
};

export default SizeSelector;