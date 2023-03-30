import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard"
import 'bootstrap/dist/css/bootstrap.min.css';


function RandomPassword(params) {
    let Password = ""
    const [newPassword, setNewPassword] = React.useState(Password)
    function randomPassword(params) {
        const letters = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%&*_"
        for (let i = 0; i < 10; i++) {
           let randomNumber = Math.floor(Math.random() * letters.length)
           Password += letters[randomNumber]
        }
       setNewPassword(Password)
    }
    const [isCopied, setIsCopied] = React.useState(false)

    const  onCopyText = () => {
        setIsCopied(true);
        setTimeout( () => {
            setIsCopied(false);
        }, 500);
    };
    return(
        <div className="container w-75 text-center bg-secondary mt-5 pb-5">
            <h4 className="text-warning mt-5 pt-5 mb-4">Random Password Generator</h4>
            <p className="text-light py-3 fw-semibold par">{newPassword}</p>
            <button className="btn btn-dark my-3" onClick={randomPassword}>Get Random Password</button>
        
            <CopyToClipboard text={newPassword} onCopy={onCopyText}>
            <div className="copy-area">
                <button className="btn btn-dark">Copy</button>
               {isCopied && <span className="text-light">Copied!</span>}
            </div>
            </CopyToClipboard>
           
        </div>
    )
}
export default RandomPassword