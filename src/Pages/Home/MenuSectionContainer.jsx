import MenuItem from "./MenuItem";

function MenuSectionContainer(){
    return (
      <div className="menuSectionContainer">
        <div className="menuContent">
            <div className="menuContentPart">
                 <h2>Explore our menu</h2>
                 <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at a time.</p> 
            </div>
            <div className="menuimgPart">
               <MenuItem/>
            </div>
        </div> 
      </div>
    );
}

export default MenuSectionContainer;