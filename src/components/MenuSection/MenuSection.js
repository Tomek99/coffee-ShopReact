import React from "react";
import styles from "./MenuSection.module.scss";
import Menu from "../../data/menu.json";
import HeaderSection from "../HeaderSection/HeaderSection";
import MenuProduct from "../MenuProudct/MenuProduct";

function MenuSection(props) {
  return (
    <div className={styles.MenuSection} id="menuSection">
      <HeaderSection firstWord="our" secondWord="menu" />
      <div className={styles.itemsProduct}>
        {props.isTrue
          ? Menu.slice(0, 3).map((item) => (
              <MenuProduct
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                quantity={item.quantity}
                addItem={props.addItem}
                basketItems={props.basketItems}
              />
            ))
          : Menu.map((item) => (
              <MenuProduct
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                quantity={item.quantity}
                addItem={props.addItem}
                basketItems={props.basketItems}
              />
            ))}
      </div>
    </div>
  );
}

export default MenuSection;
