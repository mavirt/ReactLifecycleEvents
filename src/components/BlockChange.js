import React from "react";
import Block from "./Block";

function BlockChange() {
    let list = [
        ""
    ];

    //set states
    const [blocks, setBlocks] = React.useState(list);
    let [increment, setIncrement] = React.useState(0);
    const [back, setBack] = React.useState("blue");
    let [reset, setReset] = React.useState(false);

    React.useEffect(()=>{
        if((increment)%5==0){
            setBack("pink")
        }
        else(
            setBack("blue")
        )
    },[increment])

    let stylingBlock = {
        backgroundColor: back,
        borderColor: "white",
        borderWidth: "2px",
        borderStyle: "solid",
        height: "50px",
        width: "50px",
        marginTop: "10px"
    }

    let BlockEles = blocks.map((obj, idx) =>
        <div key={idx} style={stylingBlock}>{obj}</div>
    )


    const addBlock = () => {
        if ((increment % 2) == 0) {
            let newBlock = blocks;
            newBlock.push(
                ""
            );
            setBlocks(newBlock);
            console.log(blocks);
        }
    }


    return (
        <div>
            <button onClick={() => {
                setIncrement(increment + 1);
                addBlock()
            }}>Increase by 1 : {increment}</button>
            <button onClick={() => {
                setIncrement(0);
                setBlocks(list);
                setBack("blue")}
            }>Click to Reset
            </button>
            {BlockEles}
        </div>
    )


}

export default BlockChange;
