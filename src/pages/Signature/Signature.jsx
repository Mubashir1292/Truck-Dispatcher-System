import { Button } from "@mui/material";
import React from "react";
import SignatureCanvas from "react-signature-canvas";
const Signature = () => {
  const [signature, setSignature] = React.useState(null);
  const [signImage, setSignImage] = React.useState(null);
  const handleClear = () => {
    signature.clear();
  };
  const handleSave = () => {
    const sign = signature.getTrimmedCanvas().toDataURL("image/png");
    setSignImage(sign);
  };
  return (
    <React.Fragment>
      <div className="w-full h-screen">
        <h1 className="text-white text-2xl text-center mt-1 mb-1">
          {/* Here must be condition onto the Title */}
          Add Or Update Signature
        </h1>
        <div className="flex flex-col lg:flex-row">
          <section className="border xl:w-4/12 lg:w-5/12 md:w-9/12 sm:w-full xs:w-full h-96 mx-auto rounded box-border p-2">
            <div className="flex justify-center items-center flex-col">
              <SignatureCanvas
                penColor="black"
                backgroundColor="white"
                canvasProps={{
                  width: "auto",
                  height: "300px",
                }}
                ref={(data) => setSignature(data)}
              />
            </div>
            <div className="flex justify-around items-start m-2">
              <Button variant="contained" color="error" onClick={handleClear}>
                Clear
              </Button>
              <Button variant="contained" color="success" onClick={handleSave}>
                Trim
              </Button>
            </div>
          </section>
          <section>
            {signImage && (
              <>
                <div className="flex justify-center items-center flex-col my-7 xl:w-full lg:w-full md:w-full sm:w-full xs:lg:w-full">
                  <img src={signImage} alt="Signature Image" />
                </div>
                <div className="flex justify-center items-center">
                  <Button variant="contained" className="w-52">
                    Save
                  </Button>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signature;
