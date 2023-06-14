import { useState } from "react";

function Submit({ assetList, setAssetList }) {
  const [formAssetName, setFormAssetName] = useState("");

  function handleAssetChange(e) {
    setFormAssetName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      id: assetList.length + 1,
      name: formAssetName,
      votes: 0,
    };

    await fetch("http://localhost:3000/crypto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setAssetList([...assetList, formData]);
    setFormAssetName("");
    alert("Your submission has been added!");
  }

  return (
    <div className="submit-container">
      <form onSubmit={handleSubmit} className="submit-form">
        <input type="text" className="submit-input" onChange={handleAssetChange} value={formAssetName} />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Submit;